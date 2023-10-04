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

document.addEventListener("DOMContentLoaded", getBrowser);

function addZero(num, digit) {
    return String(num).padStart(digit, '0')
}

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

function factorialCalc() {
    let num = prompt("Enter a positive number.", 8);
    if (isNaN(num)) {
        alert("Invalid input, enter a positive number.");
    } else if (num < 0) {
        alert("Negative numbers not allowed.")
    } else {
        let result = num
        if (result == 0) {
            result = 1;
        } else {
            for (let i = num; i > 1; i--) {
                result *= (i - 1);
            }
        }
        document.getElementById("result").textContent = ("The factorial of " + num + " is " + result + ".");
    }
}

function movePic() {
    let clickX = event.clientX;
    let clickY = event.clientY;
    document.getElementById("AnakinPic").style.left = clickX + "px";
    document.getElementById("AnakinPic").style.top = clickY + "px";
}

document.addEventListener("click", movePic);

function changeTheme() {
    document.body.classList.toggle("lightMode");
}