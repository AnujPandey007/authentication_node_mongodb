// alert("Hi, Welcome");

// let getPromptValue = prompt("What is your name?", "Guest");
// console.log(getPromptValue);

// let deleteMessage = confirm("Do you really want to delete this post?");
// console.log(deleteMessage);

// getApi();

// import express from 'express';

// const app = express();

// app.post('/login', async(req, res)=>{
//     let _data = {
//         userName: "qwe",
//         userAge: 20,
//         userEmail: "req.body.userEmail",
//         userPassword: "req.body.userPassword",
//         isMale: true
//     }
      
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify(_data),
//         headers: {"Content-type": "application/json; charset=UTF-8"}
//     })
//     .then(response => response.json()) 
//     .then(json => console.log(json))
//     .catch(err => console.log(err));
// });


async function createUser() {
    let userName = document.getElementById('Uname').value;
    console.log(userName);
    // let _data = {
    //     userName: "qwe",
    //     userAge: 20,
    //     userEmail: "req.body.userEmail",
    //     userPassword: "req.body.userPassword",
    //     isMale: true
    // }
      
    // fetch('https://authenticationmongoose.herokuapp.com/insertUser/', {
    //     method: "POST",
    //     body: JSON.stringify(_data),
    //     headers: {"Content-type": "application/json; charset=UTF-8"}
    // })
    // .then(response => response.json()) 
    // .then(json => console.log(json))
    // .catch(err => console.log(err));
}


