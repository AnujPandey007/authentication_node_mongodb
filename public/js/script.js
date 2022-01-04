// alert("Hi, Welcome");

// let getPromptValue = prompt("What is your name?", "Guest");
// console.log(getPromptValue);

// let deleteMessage = confirm("Do you really want to delete this post?");
// console.log(deleteMessage);

// getApi();


async function getApi() {
    fetch("https://authenticationmongoose.herokuapp.com/getUsers/").then(function (response) {
        return response.json();
    }).then(function (data) {
        // appendData(data);
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });
}


