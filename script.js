function checkDay() {
    var input = document.getElementById("dayInput").value.toLowerCase();

    if (input === "") {
        showModal("Give an input!");
    } else {
        var birthdayDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        var birthdayMessage = `It's your birthday!! Happy Birthday!! Sending you the warmest birthday wishes on ${birthdayDate} Sunshine. The world is a brighter place because you're in it.`;
        showBirthdayMessage(birthdayMessage);
    }
}

function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");
    modal.style.display = "block";
    modalMessage.innerText = message;
}

function showBirthdayMessage(message) {
    var container = document.querySelector(".container");
    container.innerHTML = `
        <h1>It's your birthday!!</h1>
        <p>${message}</p>
    `;
    
    var audio = new Audio('bg.mp3');
    audio.loop = true;
    audio.play();
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    var audio = new Audio('bg.mp3');
    audio.loop = true;
    audio.play();
});
