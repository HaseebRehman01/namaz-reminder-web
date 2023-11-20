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
        var fajrStartTime = new Date(`${monthvar} ${date}, ${year} 02:17:00 AM` );
    var fajrEndTime = new Date(`${monthvar} ${date}, ${year} 02:17:50 AM` );
var div = document.getElementById("div")
    if (pakistanDate >= fajrStartTime && pakistanDate <= fajrEndTime) {
        alert("Fajr time is open!");
        div.style.display = "none"
    }  
    
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