let dailyBoxes = document.querySelectorAll('label div');
let allCheckboxes = document.querySelectorAll('form input[type="checkbox"]');
for (thisChecked of allCheckboxes) {thisChecked.addEventListener('click',testCheck, true)}
let clearForm = document.getElementById("clearForm");
let date = new Date();
let time = date.getTime();
time += 3600 * 1000;
date.setTime(time);

// On load check the checkboxes status and change the classes accordingly.
window.addEventListener('load', () => {
    for(i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked) document.getElementById('box'+[i]).classList.add('bg-success');
        else document.getElementById('box'+[i]).classList.add('bg-danger');
    }
});

// RESET btn event listener. Removes cookies and changes classes.
clearForm.addEventListener('click', () => {
    dailyBoxes.forEach(ele => ele.classList.remove('bg-success'));
    dailyBoxes.forEach(ele => ele.classList.add('bg-danger'));
    // Loop through all the cookies created and remove them.
    for(i = 0; i < dailyBoxes.length; i++) {
        document.cookie = "box"+[i]+"=; Max-Age=0;";
    }
})
// Takes all the elements for the checkboxes on load and checks to see if they're checked or not. If not checked add the bg-danger class.
allCheckboxes.forEach(element => {
    for(i = 0; i < dailyBoxes.length; i++) {
        let checkCookie = new RegExp("box"+[i]+"=true"); // variable set as a regular expression to loop through, find all the cookies, and do someting.
        if(document.cookie.match(checkCookie)) {
            document.getElementById('input'+[i]).checked = true; // makes the checkbox checked if the cookie matches the regex of the same input id.
        }
    }
})
// Manipulate the click event on a checkbox.
function testCheck(event) {
    // Loops through the checkboxes and changes the classes if it's checked
    for(i = 0; i < allCheckboxes.length; i++) {
        if(allCheckboxes[i].checked) {
            console.log(document.getElementById('box'+[i]));
            document.getElementById('box'+[i]).classList.remove('bg-danger');
            document.getElementById('box'+[i]).classList.add('bg-success');
            // TODO create a cookie that lasts for 24hrs 
            document.cookie = "box"+[i]+"="+document.getElementById('input'+[i]).checked+"; expires="+date.toUTCString+"; path=/";
        }
        else if(!allCheckboxes[i].checked) {
            document.cookie = "box"+[i]+"="+document.getElementById('input'+[i]).checked+"; Max-Age=0;";
        }
    }
    // This loop changes the checkbox to "red" if it's unchecked.
    for(i = 0; i < allCheckboxes.length; i++) {
        if(!allCheckboxes[i].checked) {
            document.getElementById('box'+[i]).classList.remove('bg-success');
            document.getElementById('box'+[i]).classList.add('bg-danger');
        }
    }
}

// Show all cookies
// document.getElementById('cooks').addEventListener('click', () => {
//     alert(document.cookie);
// })