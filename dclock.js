function myClock() {
    var d = new Date();
    var day = d.getDay();
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = d.getMonth() + 1; // Adding 1 because month is zero-based
    var year = d.getFullYear();

    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var amOrPm = "AM";

    if (hour >= 12) {
        amOrPm = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    var formattedDate =  week[day] + ":" + month + ":" + year ;

    var formattedTime = hour + ":" + min + ":" + sec + " " + amOrPm;

    document.getElementById("clock").innerHTML = formattedDate + " " + formattedTime;
}

setInterval(myClock, 1000);