const url = 'https://randomuser.me/api';

fetch(url)
.then(function(response){
    return response.json();
}).then(function(myJson){
    console.log(myJson);
    let htmlPic = document.querySelector('img');
    htmlPic.src = myJson.results[0].picture.large

    let htmlName = document.getElementById('name');
    let name = myJson.results[0].name.first + ' ' + myJson.results[0].name.last;
    htmlName.innerText = 'My name is ' + name;

    let htmlEmail = document.getElementById('email');
    htmlEmail.innerText =  'Email: ' + myJson.results[0].email;

    let htmlDob = document.getElementById('dob');
    let dob = myJson.results[0].dob.date;
    let dobF = dob.slice(0,10);
    htmlDob.innerText = 'DOB: ' + dobF;

    let htmlAdd = document.getElementById('address');
    let address = myJson.results[0].location.street.number + ' ' + myJson.results[0].location.street.name;
    htmlAdd.innerText = 'Address: ' + address;

    let hmtlPhone = document.getElementById('phone');
    let phone = myJson.results[0].phone;
    hmtlPhone.innerText = 'Phone Number: ' + phone;

    let htmlPassword = document.getElementById('password');
    let password = myJson.results[0].login.password;
    htmlPassword.innerText = 'Password: ' + password;

    let gender = myJson.results[0].gender;
    let body = document.querySelector('body');
    if(gender == 'male'){
        body.style.color = 'blue';
    }else
        body.style.color = 'pink';
    

});


