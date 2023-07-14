
function getUserName(){
    var UserName = prompt("Kullanici ismini giriniz")
    var screenName = document.getElementById("myName");
    screenName.textContent = UserName;
}

getUserName();

function clockInfo(){
    var clockPrint = document.getElementById("myClock");

    // Saat bilgisini alma
    var ClockNow = new Date().toLocaleTimeString();

    // Saat bilgisini yazdırma
    clockPrint.textContent = ClockNow;
}

     // İlk saat güncellemesi
     clockInfo();

     // Her saniyede bir saat güncellemesi yapma
     setInterval(clockInfo, 1000);