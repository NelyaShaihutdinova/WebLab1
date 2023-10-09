let buttonCheck = document.getElementById('checkButton')
buttonCheck.onclick = handleButtonCheckClick;
let table = document.getElementById("table");
const ALERT_DESIGN = document.getElementById('#customalert');
const BODY_ELEMENT = document.querySelector('body');

function handleButtonCheckClick() {
    let flag = true;
    let option = document.getElementById("select").value;
    let x;
    let y;
    let r;
    if (option.includes(option)) {
        x = option;
    } else {
        flag = false;
        alert("x should be one of the following values: -3, -2, -1, 0, 1, 2, 3, 4, 5");
    }

    let coordinatesY = document.getElementById("inputText").value;
    if (coordinatesY !== '') {
        let checkY = Number(coordinatesY);
        if (!isNaN(checkY)) {
            if (3 > checkY && checkY > -5) {
                y = checkY;
            } else {
                flag = false;
                alert("y belongs to (-5; 3)");
            }
        } else {
            flag = false;
            alert("y should contain only digits");
        }
    } else {
        flag = false;
        alert("y cannot be empty");
    }

    let radius = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < radius.length; i++) {
        if (radius[i].checked) {
            r = radius[i].value;
            break;
        }
    }
    if (flag) {
        send(x, y, r);
    }
}

function send(x, y, r) {
    axios({
        method: 'get',
        url: 'script.php',
        params: {
            x: x,
            y: y,
            r: r,
            time: new Date().toTimeString(),
            clear: false
        }
    })
        .then(function (response) {
            redrawGraph(r);
            table.innerHTML = response.data;
        })
}

function clearTable() {
    axios({
        method: 'get',
        url: 'script.php',
        params: {
            clear: true
        }
    })
        .then(function (response) {
            table.innerHTML = response.data;
        })
}

window.realAlert = window.alert
window.alert = function (s) {
    customAlert(s);
}

function customAlert(s) {
    if (ALERT_DESIGN === null) {
        BODY_ELEMENT.insertAdjacentHTML('beforeend', '<div id="customalert" class="on"><span class="alerttext">' + s + '</span><span id="contact-remove-sign"></span></div>');
        const fadeIn = (el, timeout, display) => {
            el.style.opacity = "0";
            el.style.display = display || '#customalert';
            el.style.transition = `opacity ${timeout}ms`;
            setTimeout(() => {
                el.style.opacity = "1";
            }, 10);
        };
        const ALERT_DESIGN = document.querySelector('#customalert');
        fadeIn(ALERT_DESIGN, 1500, 'flex');
        const fadeOut = (el, timeout) => {
            el.style.opacity = "1";
            el.style.transition = `opacity ${timeout}ms`;
            el.style.opacity = "0";

            setTimeout(() => {
                el.style.display = 'none';
            }, timeout);
        };
        fadeOut(ALERT_DESIGN, 1500);
    }
}