
async function createUser() {
    let userName = document.getElementById('Uname').value;
    let userAge = document.getElementById('age').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('Pass').value;
    let isMale = document.getElementById('check').value;

    let userData = {
        userName: userName,
        userAge: userAge,
        userEmail: userEmail,
        userPassword: userPassword,
        isMale: isMale=="on" ? true : false
    }
      
    // console.log(userData);
    fetch('https://authenticationmongoose.herokuapp.com/insertUser/', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => /*console.log(json)*/window.location.replace("https://authenticationmongoose.herokuapp.com/homePage"))
    .catch(err => console.log(err));
}


