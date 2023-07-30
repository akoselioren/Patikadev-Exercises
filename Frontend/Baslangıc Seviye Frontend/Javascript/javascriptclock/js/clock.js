let names = prompt("Lütfen İsminizi Giriniz :")
let myName = document.querySelector("#myName");
myName.innerHTML = `${names}`

function timeUp()
{
    let date = new Date();
    let clock = document.getElementById("myClock");
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    hours = ('0' + hours).slice(-2);
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = days[date.getDay()]

    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2)

    clock.innerHTML=`${hours}:${minutes}:${seconds} ${today}`;
}

setInterval(timeUp,1000);