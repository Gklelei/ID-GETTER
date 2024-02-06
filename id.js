document.addEventListener('DOMContentLoaded', function(){
   document.querySelector('form').onsubmit = function(){
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const year = document.querySelector('#year').value;
    const msg = document.querySelector('p');
    const sem = document.querySelector('#sem').value;
    let yrvalue;
    if (year == 2020 && sem == 'FIRST'){
        yrvalue = 2111;
    }
    else if(year == 2020 && sem == 'SECOND') {
        yrvalue = 2112;
    }
   else if (year == 2021 && sem == 'FIRST'){
        yrvalue = 2211;
    }
    else if(year == 2021 && sem == 'SECOND') {
        yrvalue = 2212;
    }
    else if (year == 2022 && sem == 'FIRST'){
        yrvalue = 2311;
    }
    else if(year == 2022 && sem == 'SECOND') {
        yrvalue = 2312;
    }
    if (year == 2023 && sem == 'FIRST'){
        yrvalue = 2411;
    }
    else if(year == 2023 && sem == 'SECOND') {
        yrvalue = 2412;
    }
     var ID = 'S' + fname.substring(0,3) + lname.substring(0,2) + yrvalue;
    alert(`SCHOOL ID: ${ID}`.toLocaleUpperCase());
    //alert(`the sem is ${sem}`);
   }
})