const canvas = document.getElementById("graph"), ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
let w = canvas.width, h = canvas.height;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "rgb(166,112,219)");

let rValue = 'R';

function redrawGraph(rValueFun) {
    ctx.clearRect(0, 0, w, h);
    let r = (w - w / 6.4) / 2;
    let lineLength = w / 30;

    ctx.lineWidth = w / 300;
    ctx.strokeStyle = "rgb(54,29,98)";

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(w / 2, h / 2);
    ctx.arc(w / 2, h / 2, r / 2, 0, Math.PI / 2, false);
    ctx.moveTo(w / 2, h / 2 + r / 2);
    ctx.lineTo(w / 2 - r, h / 2 + r / 2);
    ctx.lineTo(w / 2 - r, h / 2);
    ctx.lineTo(w / 2, h / 2 - r);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 - 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 + 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 - 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 + 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(0, h / 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(w / 2 - lineLength, h / 2 + r);
    ctx.lineTo(w / 2 + lineLength, h / 2 + r);
    ctx.moveTo(w / 2 - lineLength, h / 2 + r / 2);
    ctx.lineTo(w / 2 + lineLength, h / 2 + r / 2);
    ctx.moveTo(w / 2 - lineLength, h / 2 - r);
    ctx.lineTo(w / 2 + lineLength, h / 2 - r);
    ctx.moveTo(w / 2 - lineLength, h / 2 - r / 2);
    ctx.lineTo(w / 2 + lineLength, h / 2 - r / 2);

    ctx.moveTo(w / 2 + r, h / 2 - lineLength);
    ctx.lineTo(w / 2 + r, h / 2 + lineLength);
    ctx.moveTo(w / 2 + r / 2, h / 2 - lineLength);
    ctx.lineTo(w / 2 + r / 2, h / 2 + lineLength);
    ctx.moveTo(w / 2 - r, h / 2 - lineLength);
    ctx.lineTo(w / 2 - r, h / 2 + lineLength);
    ctx.moveTo(w / 2 - r / 2, h / 2 - lineLength);
    ctx.lineTo(w / 2 - r / 2, h / 2 + lineLength);
    ctx.stroke();
    ctx.closePath();

    let label1, label2;
    if (isNaN(rValueFun)) {
        label1 = rValueFun
        label2 = rValueFun + '/2'
    } else {
        label1 = rValueFun
        label2 = rValueFun / 2
    }

    rValue = label2
    console.log(label1)
    const fontSize = w / 40;
    ctx.fillStyle = 'rgb(54,29,98)';

    ctx.font = `500 ${fontSize * 1.4}px sans-serif`;
    ctx.fillText('y', w / 2 + lineLength, 15)
    ctx.fillText('x', w - 20, h / 2 - lineLength)

    ctx.fillText('-' + label2, w / 2 + lineLength, h / 2 + r / 2);
    ctx.fillText('-' + label1, w / 2 + lineLength, h / 2 + r);
    ctx.fillText(label2, w / 2 + lineLength, h / 2 - r / 2);
    ctx.fillText(label1, w / 2 + lineLength, h / 2 - r);

    ctx.fillText(label1, w / 2 + r - lineLength, h / 2 - lineLength);
    ctx.fillText(label2, w / 2 + r / 2 - lineLength, h / 2 - lineLength);
    ctx.fillText('-' + label1, w / 2 - r - lineLength, h / 2 - lineLength);
    ctx.fillText('-' + label2, w / 2 - r / 2 - lineLength, h / 2 - lineLength);
}

redrawGraph(rValue)