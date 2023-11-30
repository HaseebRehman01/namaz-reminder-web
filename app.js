if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then((res) => console.log(res, "service worker registered"))
        .catch((err) => console.log("service worker not registered", err));
    });
  }
  window.addEventListener("load", () => {
    Notification.requestPermission((result) => {
      if (result === "granted") {
      }
    });
  });



  
function updatePakistanTime() {
    var timeElement = document.getElementById("pakistan-time");
    var currentUTC = new Date();
    var pakistanTimezone = "Asia/Karachi";
    var options = { timeZone: pakistanTimezone };
    var pakistanDate = new Date(currentUTC.toLocaleString("en-US", options));
    var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var pakistanTimeString = pakistanDate.toLocaleTimeString("en-US", timeOptions);

    function prayertime() {
        var currentday = new Date();
        var month = currentday.getMonth();
        var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthvar = arrmonth[month];
        var date = currentday.getDate();
        var year = currentday.getFullYear();

        // Variable Declarations
        var fajrStartTime, fajrEndTime, zuharStartTime, zuharEndTime, asrStartTime, asrEndTime, maghribStartTime, maghribEndTime, ishaStartTime, ishaEndTime;

        fajrStartTime = new Date(`${monthvar} ${date}, ${year} 05:32:00 AM`); // new day
        fajrEndTime = new Date(`${monthvar} ${date}, ${year} 06:51:00 AM`); // new day
        zuharStartTime = new Date(`${monthvar} ${date}, ${year} 12:17:00 PM`); //new day (afternoon)
        zuharEndTime = new Date(`${monthvar} ${date}, ${year} 04:06:00 PM`); //new day (afternoon)
  
        asrStartTime = new Date(`${monthvar} ${date}, ${year} 04:07:00 PM`); //new day (afternoon)
        asrEndTime = new Date(`${monthvar} ${date}, ${year} 05:42:00 PM`); //new day (afternoon)
        maghribStartTime = new Date(`${monthvar} ${date}, ${year} 05:43:00 PM`); //new day (afternoon)

        maghribEndTime = new Date (`${monthvar} ${date}, ${year} 06:30:00 PM`); //new day (evening)

        ishaStartTime = new Date(`${monthvar} ${date - 1}, ${year} 07:03:00 PM`);//new day (night)
  
        ishaEndTime = new Date(`${monthvar} ${date}, ${year} 05:31:00 AM`);//next day means if now is sun than (this code is for mon)
      
 console.log(ishaStartTime,ishaEndTime)

        function uppernamaz() {
            var namazTiming = document.getElementById("namaz-timing");
            var namazremindertime = document.getElementById("namaz-reminder-time");

            if (currentday >= fajrStartTime && currentday <= fajrEndTime) {
                namazTiming.innerHTML = "Fajr";
                namazremindertime.innerHTML = "5:32 am - 6:51 am";
            } 
            else if (currentday >= zuharStartTime && currentday <= zuharEndTime) {
                 console.log(zuharStartTime)

                namazTiming.innerHTML = "Zuhar";
                namazremindertime.innerHTML = "12:17 am - 04:06 pm";
            } else if (currentday >= asrStartTime && currentday <= asrEndTime) {
                namazTiming.innerHTML = "Asr";
                namazremindertime.innerHTML = "04:07 pm - 05:42 pm";
            } 
            else if (currentday >= maghribStartTime && currentday <= maghribEndTime) {
                namazTiming.innerHTML = "Maghrib";
                namazremindertime.innerHTML = "05:43 pm - 06:17 pm";
            } 
            else if (currentday >= ishaStartTime && currentday <= ishaEndTime) {
                namazTiming.innerHTML = "Isha";
                namazremindertime.innerHTML = "07:03 pm - 05:31 am";
            } 
            // console.log(ishaStartTime , ishaEndTime)
            else{

                namazTiming.innerHTML = "There are no <br>farz prayers<br> currently"; 
                namazremindertime.innerHTML = "";
            }
    
        }

        uppernamaz();
    }

    prayertime();

    timeElement.innerHTML = pakistanTimeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updatePakistanTime, 1000);

// Initial call to display the time immediately
updatePakistanTime();

function recentDate() {
    var nowDate = document.getElementById("now-date");
    var currentday = new Date();
    var month = currentday.getMonth();
    var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthvar = arrmonth[month];
    var date = currentday.getDate();
    var year = currentday.getFullYear();

    nowDate.innerHTML = `${monthvar} ${date}, ${year}`;
}

recentDate();

function shownamaz() {
    var nowDate = document.getElementById("now-date");
    var currentday = new Date();
    var month = currentday.getMonth();
    var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthvar = arrmonth[month];
    var date = currentday.getDate();
    var year = currentday.getFullYear();

    var fajar = document.getElementById("fajar");
    var fajartime = document.getElementById("fajartime");
    fajar.innerHTML = `Fajar , ${monthvar} ${date}`;
    fajartime.innerHTML = `05:32 am`;

    var zuhar = document.getElementById("zuhar");
    var zuhartime = document.getElementById("zuhartime");
    zuhar.innerHTML = `Zuhar , ${monthvar} ${date}`;
    zuhartime.innerHTML = `12:17 PM`;  // Corrected to PM

    var asr = document.getElementById("asr");
    var asrtime = document.getElementById("asrtime");
    asr.innerHTML = `Asr , ${monthvar} ${date}`;
    asrtime.innerHTML = `04:07 PM`;

    var magh = document.getElementById("magh");
    var maghtime = document.getElementById("maghtime");
    magh.innerHTML = `Maghrib , ${monthvar} ${date}`;
    maghtime.innerHTML = `05:43 PM`;

    var isha = document.getElementById("isha");
    var ishatime = document.getElementById("ishatime");
    isha.innerHTML = `Isha , ${monthvar} ${date}`;
    ishatime.innerHTML = `07:03 PM`;
}

shownamaz();

const togglebutton = document.getElementById('menu-toggle');
const navlinks = document.getElementById('nav-links-toggle');
togglebutton.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});