// function that retrieves the user's browser info and displays it on the page
function getBrowser() {
    let userAgent = navigator.userAgent;
    let browserName
    if (userAgent.indexOf("Chrome") !== -1) {
        browserName = "Google Chrome";
      } else if (userAgent.indexOf("Firefox") !== -1) {
        browserName = "Mozilla Firefox";
      } else if (userAgent.indexOf("Edge") !== -1) {
        browserName = "Microsoft Edge";
      } else if (userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Apple Safari";
      } else {
        browserName = "Unknown";
      }

    document.getElementById("browser").innerHTML = "Browser: " + browserName;

}
// When the page loads, the function get browser is called
document.addEventListener("DOMContentLoaded", getBrowser);

// Used to add 0 before hour minute or second on the clock if they are single digits
function addZero(num, digit) {
    return String(num).padStart(digit, '0')
}

// gets the time and displays it to the page
function updateTime() {
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date();
 
    if (now.getHours() < 12) {
        document.getElementById("time").innerText = 
            addZero(now.getHours(), 2) + ":" +
            addZero(now.getMinutes(), 2) + ":" +
            addZero(now.getSeconds(), 2) + "  AM";
    } else {
        document.getElementById("time").innerText = 
            addZero((now.getHours() - 12), 2) + ":" +
            addZero(now.getMinutes(), 2) + ":" +
            addZero(now.getSeconds(), 2) + "  PM";
    }

    document.getElementById("date").innerText =        
        week[now.getDay()] + " " +
        addZero(now.getMonth() + 1, 2) + "/" +
        addZero(now.getDate(), 2) + "/" +
        addZero(now.getFullYear(), 2);
}

// factorial calculator
function factorialCalc() {
    // user enters the number they want to find factorial of
    let num = prompt("Enter a positive number.", 8);
    // if the user enters anything other than a number they are alerted
    if (isNaN(num)) {
        alert("Invalid input, enter a positive number.");
    // if the number is negative the user is alerted that it is not allowed
    } else if (num < 0) {
        alert("Negative numbers not allowed.")
    // if input is valid
    } else {
        let result = num
        if (result == 0) {
            result = 1;
        } else {
            for (let i = num; i > 1; i--) {
                result *= (i - 1);
            }
        }
        // outputs the final answer
        document.getElementById("result").textContent = ("The factorial of " + num + " is " + result + ".");
    }
}

// moves the center of the picture to where the user clicks
function movePic() {
    let clickX = event.clientX;
    let clickY = event.clientY;
    document.getElementById("AnakinPic").style.left = clickX + "px";
    document.getElementById("AnakinPic").style.top = clickY + "px";
}

// detects when user clicks and calls movePic function
document.addEventListener("click", movePic);

// toggles between dark mode and light mode
function changeTheme() {
    document.body.classList.toggle("lightMode");
}