const fetch = require('node-fetch');
const express = require('express');
const app = express();
let date = new Date();
const axios = require('axios');
const cors = require('cors');
var port = process.env.PORT || 5000;
var timeOut=20000;
var prevData={}; // to store prev res.

app.use(cors());
var day;
var month;

//districts
var districts=[
    {
        'district' :395,
        'id_45':-1001191912453,
        'id_18':-1001482838324
    },
    {
        'district' :363,
        'id_45':-1001337852461,
        'id_18':-1001371945651
    },
    {'district':392,
    'id_45':-1001308634995,
    'id_18':-1001193694702
    }
    
]

var options={
    "method":"GET",
    headers:{
        'Authorization': "Bearer abcde",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'}
}
var months={
5:31,
6:30,
7:31,
8:31,
9:30,
10:31,
11:30,
12:31
}

//get the current date and time
function date_time()
{
     day = date.getDate();
     month = date.getMonth()+1;
}

//send message to group
async function bot(data, id_45, id_18)
{
    try{
        setTimeout(async ()=>{
    data.sessions.forEach(async(element) => {
        if(element.available_capacity>1 && !(element.name+element.min_age_limit in prevData) && element.min_age_limit>18){
        prevData[element.name+element.min_age_limit]=element.available_capacity;
            var text ="Age group: "+'Above ' + element.min_age_limit  +'\n'+ 'Center Name: '+element.name+"\n"+"District: "+element.district_name+'\n'+
        "Pincode: "+element.pincode+'\n'+"Date: " + element.date +'\n'+ "Available Capacity: "+element.available_capacity+'\n'+ "Dose 1 available capacity: "+element.available_capacity_dose1+'\n'+"Dose 2 available capacity: "+element.available_capacity_dose2+'\n'+'Fee Type: '+element.fee_type+'\n'+ 
        "Vaccine: "+ element.vaccine+'\n'+"https://selfregistration.cowin.gov.in"+'\n';
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id='+id_45+'&text='+text)
        .then(response => response.json());
        if(element.pincode == "400078" || element.pincode == "400086" || element.pincode == "400079")
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629'+'&text='+text)
        .then(response => response.json());

        }
        else if(element.name+element.min_age_limit in prevData && element.available_capacity!= prevData[element.name+element.min_age_limit] && element.min_age_limit>18){
            prevData[element.name+element.min_age_limit]=element.available_capacity;
            var text ="Age group: "+'Above ' + element.min_age_limit  +'\n'+ 'Center Name: '+element.name+"\n"+"District: "+element.district_name+'\n'+
        "Pincode: "+element.pincode+'\n'+"Date: " + element.date +'\n'+ "Available Capacity: "+element.available_capacity+'\n'+ "Dose 1 available capacity: "+element.available_capacity_dose1+'\n'+"Dose 2 available capacity: "+element.available_capacity_dose2+'\n'+'Fee Type: '+element.fee_type+'\n'+ 
        "Vaccine: "+ element.vaccine+'\n'+"https://selfregistration.cowin.gov.in"+'\n';
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id='+id_45+'&text='+text)
        .then(response => response.json());
        if(element.pincode == "400078" || element.pincode == "400086" || element.pincode == "400079")
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629'+'&text='+text)
        .then(response => response.json());
        } 
        else if(element.available_capacity>1 && !(element.name+element.min_age_limit in prevData) && element.min_age_limit<45){
                prevData[element.name+element.min_age_limit]=element.available_capacity;
                var text ="Age group: "+'Above ' + element.min_age_limit  +'\n'+ 'Center Name: '+element.name+"\n"+"District: "+element.district_name+'\n'+
                "Pincode: "+element.pincode+'\n'+"Date: " + element.date +'\n'+ "Available Capacity: "+element.available_capacity+'\n'+ "Dose 1 available capacity: "+element.available_capacity_dose1+'\n'+"Dose 2 available capacity: "+element.available_capacity_dose2+'\n'+'Fee Type: '+element.fee_type+'\n'+ 
                "Vaccine: "+ element.vaccine+'\n'+"https://selfregistration.cowin.gov.in"+'\n';
                await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id='+id_18+'&text='+text)
                .then(response => response.json());
                if(element.pincode == "400078" || element.pincode == "400086" || element.pincode == "400079")
                await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629'+'&text='+text)
                .then(response => response.json());
        }
        else if(element.available_capacity>1 && element.name+element.min_age_limit in prevData && element.available_capacity!= prevData[element.name+element.min_age_limit] && element.min_age_limit<45)
        {
            prevData[element.name+element.min_age_limit]=element.available_capacity;
            var text ="Age group: "+'Above ' + element.min_age_limit  +'\n'+ 'Center Name: '+element.name+"\n"+"District: "+element.district_name+'\n'+
        "Pincode: "+element.pincode+'\n'+"Date: " + element.date +'\n'+ "Available Capacity: "+element.available_capacity+'\n'+ "Dose 1 available capacity: "+element.available_capacity_dose1+'\n'+"Dose 2 available capacity: "+element.available_capacity_dose2+'\n'+'Fee Type: '+element.fee_type+'\n'+ 
        "Vaccine: "+ element.vaccine+'\n'+"https://selfregistration.cowin.gov.in"+'\n';
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id='+id_18+'&text='+text)
        .then(response => response.json());
        if(element.pincode == "400078" || element.pincode == "400086" || element.pincode == "400079")
        await fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629'+'&text='+text)
        .then(response => response.json());
        }
    })
    },5000);
}
catch(err){

};
    
}



//apicall to cowin
async function apiCall(){

if(date.getHours()>=16 && date.getMinutes()>1 && date.getDate()==day){
day=day+1;
}
if(day>months[month])
{
    day=1;
    month=month+1;
}


try{
    districts.forEach(async (element)=>{
        await fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+element.district+'&date='+day+'-'+month+'-'+'2021',
        {
            headers:{'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
        }).
        then(res=>{
            return res.json();
        }
        ).then(data=>
            {
                if(data.sessions!=undefined)
                bot(data, element.id_45,element.id_18);
        }).catch(err=>{
            fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629?&text=server down PTM'+err).
            then(res=>res.json());
        
       });
       
    });
setTimeout(apiCall, timeOut);
}
catch(err){
    fetch('https://api.telegram.org/bot1897809062:AAHkNJXVvzTWgKYi8uQ7az0p0YkePqua73I/sendMessage?chat_id=939780629?&text=server down PTM'+err).
    then(res=>res.json());
  setTimeout(apiCall, timeOut)
};
}


date_time();
setTimeout(apiCall, timeOut);
console.log("running");
app.listen(port);
// 363 395
