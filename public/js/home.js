
getUserData();

async function getUserData() {
    fetch("https://authenticationmongoose.herokuapp.com/getUsers/").then(function (response) {
        return response.json();
    }).then(function (data) {
        appendData(data);
    }).catch(function (err) {
        console.log(err);
    });
}

function appendData(data) {
    var mainContainer = document.getElementById("userCard");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `<div class="card">
                        <span style="--i:0;"></span>
                        <span style="--i:1;"></span>
                        <span style="--i:2;"></span>
                        <span style="--i:3;"></span>
                        <div class="cardBox">
                            <div class="quote"><h2>${data[i].userName}</h2> <br> <br> <div>${data[i].userEmail}</div> </div>
                        </div>
                    </div>`
      mainContainer.appendChild(div);
    }
}