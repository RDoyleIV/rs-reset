let navLinks = document.querySelectorAll('div > a.nav-link');
let path = document.location.href;
let btnTheme = document.getElementById('btnTheme');
let themeCookie = new RegExp("theme-dark=true"); 

console.log(path)

if(path.endsWith('/new-home/')) navLinks[0].classList.add('nav-active')
else navLinks[0].classList.remove('nav-active');
if(path.endsWith('new.php')) navLinks[1].classList.add('nav-active')
else navLinks[1].classList.remove('nav-active');



btnTheme.addEventListener('click', (event) => {
    if (event) {
        if(document.querySelector('i#btnTheme').classList.contains('text-light')) {
            document.cookie = 'theme-dark=true;';
            document.cookie = 'theme-light=; Max-Age=0;';
            document.querySelector('i#btnTheme').classList.replace('text-light', 'text-dark');
            document.querySelector('link[href="css/light.css"]').setAttribute('href', 'css/dark.css');
        }
        else {
            document.cookie = 'theme-light=true;';
            document.cookie = 'theme-dark=; Max-Age=0;';
            document.querySelector('i#btnTheme').classList.replace('text-dark', 'text-light');
            document.querySelector('link[href="css/dark.css"]').setAttribute('href', 'css/light.css');
        }
    }
})
if(document.cookie.match(themeCookie)) {
    document.querySelector('i#btnTheme').classList.add('text-dark');
    document.querySelector('link[href="css/light.css"]').setAttribute('href', 'css/dark.css');
}
else {
    document.querySelector('i#btnTheme').classList.add('text-light');
    document.querySelector('link[href="css/dark.css"]').setAttribute('href', 'css/light.css');
}