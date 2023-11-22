//   var currentday = new Date()
// //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
// var month = currentday.getMonth()
// var arrmonth = ["January","February","March","April","May","June","July","August","September","October","November",
// "December"];

//   var monthvar = arrmonth[month]
//   console.log(monthvar)
//         var date = currentday.getDate()
   
//         var year = currentday.getFullYear()
    

function updatePakistanTime() {

    var timeElement = document.getElementById("pakistan-time");

    // Create a new Date object with the Pakistan time zone (Asia/Karachi)
    var currentUTC = new Date();

    // Get the current date and time in Pakistan time zone
    var pakistanTimezone = "Asia/Karachi";
    var options = {timeZone: pakistanTimezone};
    var pakistanDate = new Date(currentUTC.toLocaleString("en-US", options));

    // Format the time as a string
    var timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var pakistanTimeString = pakistanDate.toLocaleTimeString("en-US", timeOptions);



var nowDate = document.getElementById("now-date")



    // Fajr time range (adjust this as needed)
    function prayertime(){
        // console.log(currentUTC)

        var currentday = new Date()
        //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
        var month = currentday.getMonth()
        var arrmonth = ["January","February","March","April","May","June","July","August","September","October","November",
        "December"];
        
          var monthvar = arrmonth[month]
        //   console.log(monthvar)
                var date = currentday.getDate()
           
                var year = currentday.getFullYear()


         function uppernamaz(){
            var fajrStartTime = new Date(`${monthvar} ${date}, ${year} 05:32:00 AM`);
            var fajrEndTime = new Date(`${monthvar} ${date}, ${year} 06:51:00 AM`);
            var zuharStartTime = new Date(`${monthvar} ${date}, ${year} 12:17:00 PM`);
            var zuharEndTime = new Date(`${monthvar} ${date}, ${year} 04:06:00 PM`);
            var asrStartTime = new Date(`${monthvar} ${date}, ${year} 04:07:00 PM`);
            var asrEndTime = new Date(`${monthvar} ${date}, ${year} 05:42:00 PM`);
            var maghribStartTime = new Date(`${monthvar} ${date}, ${year} 05:43:00 PM`);
            var maghribEndTime = new Date(`${monthvar} ${date}, ${year} 06:17:00 PM`);
            var ishaStartTime = new Date(`${monthvar} ${date}, ${year} 07:03:00 PM`);
            var ishaEndTime = new Date(`${monthvar} ${date}, ${year} 05:31:00 AM`);
   
            
            var namazTiming = document.getElementById("namaz-timing");
            var namazremindertime = document.getElementById("namaz-reminder-time");
            
            if (pakistanDate >= fajrStartTime && pakistanDate <= fajrEndTime) {
                namazTiming.innerHTML = "Fajr";
                namazremindertime.innerHTML = "5:32 am - 6:51 am"
            } else if (pakistanDate >= zuharStartTime && pakistanDate <= zuharEndTime) {
                namazTiming.innerHTML = "Zuhar";
                namazremindertime.innerHTML = "12:17 am - 04:06 pm"
                              
            } else if (pakistanDate >= asrStartTime && pakistanDate <= asrEndTime) {
                namazTiming.innerHTML = "Asr";
                namazremindertime.innerHTML = "04:07 pm - 05:42 pm"
            } else if (pakistanDate >= maghribStartTime && pakistanDate <= maghribEndTime) {
                namazTiming.innerHTML = "Maghrib";
                namazremindertime.innerHTML = "05:43 pm - 06:17 pm"
            } else if (pakistanDate >= ishaStartTime && pakistanDate <= ishaEndTime) {
               
                    namazTiming.innerHTML = "Isha";
                    namazremindertime.innerHTML = "07:03 pm - 05:31 am"
                }
       
           
    }
       uppernamaz() 
    }


    prayertime()
   


    timeElement.innerHTML = pakistanTimeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updatePakistanTime, 1000);

// Initial call to display the time immediately
updatePakistanTime();
function recentDate(){
    var nowDate = document.getElementById("now-date")
    var currentday = new Date()
    //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
    var month = currentday.getMonth()
    var arrmonth = ["January","February","March","April","May","June","July","August","September","October","November",
    "December"];
    // //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
    
      var monthvar = arrmonth[month]
    //   console.log(monthvar)
            var date = currentday.getDate()
        var year = currentday.getFullYear()

    nowDate.innerHTML = `${monthvar} ${date} , ${year} ` 
}
recentDate()

function shownamaz(){
    var nowDate = document.getElementById("now-date")
    var currentday = new Date()
    //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
    var month = currentday.getMonth()
    var arrmonth = ["January","February","March","April","May","June","July","August","September","October","November",
    "December"];
    // //   var currentdays = ["sunday", "monday","wednesday", "thursday", "friday", "saturday"]
    
      var monthvar = arrmonth[month]
    //   console.log(monthvar)
            var date = currentday.getDate()
        var year = currentday.getFullYear()

    var fajar = document.getElementById("fajar")
    var fajartime = document.getElementById("fajartime")
    fajar.innerHTML = `Fajar , ${monthvar} ${date}`
fajartime.innerHTML = `05:32 am`

var zuhar = document.getElementById("zuhar")
var zuhartime = document.getElementById("zuhartime")
zuhar.innerHTML = `Zuhar , ${monthvar} ${date}`
zuhartime.innerHTML = `12:17 am`


var asr = document.getElementById("asr")
var asrtime = document.getElementById("asrtime")
asr.innerHTML = `Asr , ${monthvar} ${date}`
asrtime.innerHTML = `04:07 PM`


var magh = document.getElementById("magh")
var maghtime = document.getElementById("maghtime")
magh.innerHTML = `Maghrib , ${monthvar} ${date}`
maghtime.innerHTML = `05:43 PM`


var isha = document.getElementById("isha")
var ishatime = document.getElementById("ishatime")
isha.innerHTML = `Maghrib , ${monthvar} ${date}`
ishatime.innerHTML = `07:03 PM`

}
shownamaz()


    // function updatePakistanTime() {
    //     var timeElement = document.getElementById("pakistan-time");
    //     var currentUTC = new Date();
    //     var pakistanTimezone = "Asia/Karachi";
    //     var options = { timeZone: pakistanTimezone };
    //     var pakistanDate = new Date(currentUTC.toLocaleString("en-US", options));
    //     var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    //     var pakistanTimeString = pakistanDate.toLocaleTimeString("en-US", timeOptions);

    //     function prayertime() {
    //         var currentday = new Date();
    //         var month = currentday.getMonth();
    //         var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //         var monthvar = arrmonth[month];
    //         var date = currentday.getDate();
    //         var year = currentday.getFullYear();

    //         // Variable Declarations
    //         var fajrStartTime, fajrEndTime, zuharStartTime, zuharEndTime, asrStartTime, asrEndTime, maghribStartTime, maghribEndTime, ishaStartTime, ishaEndTime, tahajjudStartTime, tahajjudEndTime;

    //         fajrStartTime = new Date(`${monthvar} ${date}, ${year} 05:32:00 AM`);
    //         fajrEndTime = new Date(`${monthvar} ${date}, ${year} 07:00:00 AM`);
    //         zuharStartTime = new Date(`${monthvar} ${date}, ${year} 12:17:00 PM`);
    //         zuharEndTime = new Date(`${monthvar} ${date}, ${year} 04:06:00 PM`);
    //         asrStartTime = new Date(`${monthvar} ${date}, ${year} 04:07:00 PM`);
    //         asrEndTime = new Date(`${monthvar} ${date}, ${year} 05:42:00 PM`);
    //         maghribStartTime = new Date(`${monthvar} ${date}, ${year} 05:43:00 PM`);
    //         maghribEndTime = new Date(`${monthvar} ${date}, ${year} 06:17:00 PM`);
    //         ishaStartTime = new Date(`${monthvar} ${date}, ${year} 07:03:00 PM`);

    //         // Adjust ishaEndTime to the next day for Tahajjud calculation
    //         var nextDay = new Date(currentday);
    //         nextDay.setDate(nextDay.getDate() + 1);
    //         ishaEndTime = new Date(`${arrmonth[nextDay.getMonth()]} ${nextDay.getDate()}, ${nextDay.getFullYear()} 05:31:00 AM`);
            
    //         tahajjudStartTime = new Date(`${monthvar} ${date}, ${year} 08:03:00 PM`);
    //         tahajjudEndTime = new Date(`${arrmonth[nextDay.getMonth()]} ${nextDay.getDate()}, ${nextDay.getFullYear()} 05:28:00 AM`);

    //         function uppernamaz() {
    //             var namazTiming = document.getElementById("namaz-timing");

    //             if (currentday >= fajrStartTime && currentday <= fajrEndTime) {
    //                 namazTiming.innerHTML = "Fajr";
    //             } 
    //     if (currentday >= zuharStartTime && currentday <= zuharEndTime) {
    //                 namazTiming.innerHTML = "Zuhar";
    //             } else if (currentday >= asrStartTime && currentday <= asrEndTime) {
    //                 namazTiming.innerHTML = "Asr";
    //             } else if (currentday >= maghribStartTime && currentday <= maghribEndTime) {
    //                 namazTiming.innerHTML = "Maghrib";
    //             } else if (currentday >= ishaStartTime && currentday <= ishaEndTime) {
    //                 var currentTime = currentday.getTime();
    //                 var ishaAlertTime = ishaEndTime.getTime() - 60000; // 1 minute before Isha end time
    //                 if (currentTime <= ishaAlertTime) {
    //                     namazTiming.innerHTML = "Isha/Tahajjud";
    //                 } else {
    //                     namazTiming.innerHTML = "Isha";
    //                 }
    //             } else if (currentday >= tahajjudStartTime && currentday <= tahajjudEndTime) {
    //                 alert("Tahajjud time is open!");
    //                 namazTiming.innerHTML = "Tahajjud";
    //             } else {
    //                 namazTiming.innerHTML = "No prayer time currently.";
    //             }
    //         }
    //         uppernamaz();
    //     }

    //     prayertime();
    //     timeElement.innerHTML = pakistanTimeString;
    // }

    // // Update the time every second (1000 milliseconds)
    // setInterval(updatePakistanTime, 1000);

    // // Initial call to display the time immediately
    // updatePakistanTime();

    // function recentDate() {
    //     var nowDate = document.getElementById("now-date");
    //     var currentday = new Date();
    //     var month = currentday.getMonth();
    //     var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     var monthvar = arrmonth[month];
    //     var date = currentday.getDate();
    //     var year = currentday.getFullYear();

    //     nowDate.innerHTML = `${monthvar} ${date}, ${year} `;
    // }
    // recentDate();

    // function shownamaz() {
    //     var currentday = new Date();
    //     var month = currentday.getMonth();
    //     var arrmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     var monthvar = arrmonth[month];
    //     var date = currentday.getDate();

    //     var fajar = document.getElementById("fajar");
    //     var fajartime = document.getElementById("fajartime");
    //     fajar.innerHTML = `Fajar , ${monthvar} ${date}`;
    //     fajartime.innerHTML = `05:32 AM`; // consistent time format

    //     var zuhar = document.getElementById("zuhar");
    //     var zuhartime = document.getElementById("zuhartime");
    //     zuhar.innerHTML = `Zuhar , ${monthvar} ${date}`;
    //     zuhartime.innerHTML = `12:17 PM`; // consistent time format

    //     var asr = document.getElementById("asr");
    //     var asrtime = document.getElementById("asrtime");
    //     asr.innerHTML = `Asr , ${monthvar} ${date}`;
    //     asrtime.innerHTML = `04:07 PM`;

    //     var magh = document.getElementById("magh");
    //     var maghtime = document.getElementById("maghtime");
    //     magh.innerHTML = `Maghrib , ${monthvar} ${date}`;
    //     maghtime.innerHTML = `05:43 PM`;

    //     var isha = document.getElementById("isha");
    //     var ishatime = document.getElementById("ishatime");
    //     isha.innerHTML = `Isha , ${monthvar} ${date}`;
    //     ishatime.innerHTML = `07:03 PM`;
    // }
    // shownamaz();