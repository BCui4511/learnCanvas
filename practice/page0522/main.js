// 定义一些方便的方法
console.log('js开始执行的时间点', Date.now());
const addText = function (textString, element = document.body) {
    const textNode = document.createTextNode(textString);
    const textDiv = document.createElement('div');
    textDiv.appendChild(textNode);
    element.appendChild(textDiv);
};

const addCanvas = function (id, width = 150, height = 150, element = document.body) {
    const canvasNode = document.createElement('canvas');
    canvasNode.id = id;
    canvasNode.width = width;
    canvasNode.height = height;
    element.appendChild(canvasNode);
    return canvasNode;
};
// 练习1
(function () {
    addText('#1 基本用法');
    const canvasNode1 = addCanvas('canvas1');
    if (canvasNode1.getContext) {
        let ctx1 = canvasNode1.getContext('2d');
        ctx1.fillStyle = '#ff0000';
        ctx1.fillRect(10, 10, 80, 50);

        ctx1.fillStyle = 'rgba(0,0,255,0.5)';
        ctx1.fillRect(40, 25, 80, 50);
    }
})();
// 练习2
addText('#2 矩形');
const canvasNode2 = addCanvas('canvas2');
const ctx2 = canvasNode2.getContext('2d');
ctx2.fillRect(10, 10, 50, 50);
ctx2.clearRect(20, 20, 30, 30);
ctx2.strokeRect(30, 30, 10, 10);
// 练习3
addText('#3 路径');
const canvasNode3 = addCanvas('canvas3');
const ctx3 = canvasNode3.getContext('2d');
ctx3.beginPath();
ctx3.moveTo(10, 10);
ctx3.lineTo(10, 90);
ctx3.lineTo(50, 10);
ctx3.fill();
ctx3.strokeStyle = '#ff0000';
ctx3.closePath();
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(70, 10);
ctx3.lineTo(110, 10);
ctx3.lineTo(110, 90);
ctx3.stroke();
// canvas动画
addText('#4 动画');
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}
var countN = 0;
function draw(t) {
    var time = Date.now();
    var performanceNow = performance.now();
    if(countN===0) {
        console.log('第一次执行回调函数的时间',time);
        console.log('回调函数输入的timeStamp', t);
        console.log('时间戳的计时零点', time-t);
        console.log('页面加载的关键时间点', window.chrome.loadTimes());
        console.log('performance.timing.navigationStart',performance.timing.navigationStart);
        console.log('performance.now()',performanceNow);
        countN++;
    }
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // 全部清掉

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    // var nowtime = Date.now()-1558786795833;
    // ctx.rotate((2 * Math.PI) / 60000 * nowtime);
    // var angle = ((2*Math.PI)/60000)*nowtime;
    // console.log(angle);
    // ctx.rotate(angle);
      ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 1) * time.getSeconds() + ((2 * Math.PI) / 1000) * time.getMilliseconds());
    ctx.drawImage(earth, -12, -12);
    // Moon
    ctx.restore();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}
let canvasNode4 = addCanvas('canvas4', 300, 300);
const ctx = canvasNode4.getContext('2d');
// setTimeout(init,10000);
init();