

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

/*function movePic() {
    let clickX = event.clientX;
    let clickY = event.clientY;
    document.getElementById("movingPicture").style.left = clickX + "px";
    document.getElementById("movingPicture").style.top = clickY + "px";
    let ogX = int(document.getElementById("movingPicture").style.left - "px");
    let ogY = int(document.getElementById("movingPicture").style.top - "px");
    while ((document.getElementById("movingPicture").style.left != (clickX + "px")) && (document.getElementById("movingPicture").style.top != (clickY + "px"))) {
        document.getElementById("movingPicture").style.left += ((clickX - ogX) / 20) + "px";
        document.getElementById("movingPicture").style.top += ((clickY - ogY) / 20) + "px";
        setTimeout(movePic, 1000);
    }
}*/

function movePic() {
    const elem = document.getElementById("movingPicture");
    let clickX = event.clientX;
    let clickY = event.clientY;
    let ogX = parseInt(elem.style.left);
    let ogY = parseInt(elem.style.top);
    while ((parseInt(elem.style.left) != clickX) && (parseInt(elem.style.top) != (clickY))) {
        document.getElementById("movingPicture").style.left = (ogX + ((clickX - ogX) / 20)) + "px";
        document.getElementById("movingPicture").style.top = (ogY + ((clickY - ogY) / 20)) + "px";
        setTimeout(movePic, 1000);
    }
}

document.addEventListener("click", movePic);