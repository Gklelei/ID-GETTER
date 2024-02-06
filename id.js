document.addEventListener('DOMContentLoaded', function(){
   document.querySelector('form').onsubmit = function(){
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const year = document.querySelector('#year').value;
    const msg = document.querySelector('p');
    var ID = 'S' + fname.substring(0,3) + lname.substring(0,2) + 2111;
    alert(`SCHOOL ID: ${ID}`.toLocaleUpperCase());
   }
})