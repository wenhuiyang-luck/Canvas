// 使用 JavaScript 来绘制图像
var c2 = document.getElementById("myCanvas2"); //找到 <canvas> 元素
var ctx2 = c2.getContext("2d"); //创建 context 对象
ctx2.fillStyle = "#FF0000"; //fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）
ctx2.fillRect(0,0,150,75); //fillRect(x,y,width,height) 方法定义了矩形当前的填充方式

// Canvas路径
var c3 = document.getElementById("myCanvas3"); 
var ctx3 = c3.getContext("2d");
ctx3.moveTo(0,0); //moveTo(x,y) 定义线条开始坐标
ctx3.lineTo(200,100); //lineTo(x,y) 定义线条结束坐标
ctx3.stroke(); //绘制线条我们必须使用到 "ink" 的方法，就像stroke().

// Canvas路径
var c4 = document.getElementById("myCanvas4"); 
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.arc(95,50,40,0,2*Math.PI); //arc(x,y,r,start,stop)
ctx4.stroke();

// Canvas文本
var c5 = document.getElementById("myCanvas5"); 
var ctx5 = c5.getContext("2d");
ctx5.font = "30px Arial";
ctx5.fillText("hello world",30,60); //fillText(text,x,y) - 在 canvas 上绘制实心的文本,

// Canvas文本
var c6 = document.getElementById("myCanvas6"); 
var ctx6 = c6.getContext("2d");
ctx6.font = "30px Arial";
ctx6.strokeText("hello world",30,60); //strokeText(text,x,y) - 在 canvas 上绘制空心的文本

// Canvas渐变
var c7 = document.getElementById("myCanvas7"); 
var ctx7 = c7.getContext("2d");
var grd7 = ctx7.createLinearGradient(0,0,200,0); //createLinearGradient(x,y,x1,y1) - 创建线条渐变
// 创建渐变 
grd7.addColorStop(0,"red"); //addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
grd7.addColorStop(1,"white");
// 填充渐变
ctx7.fillStyle = grd7;
ctx7.fillRect(10,10,150,80); 

// Canvas渐变
var c8 = document.getElementById("myCanvas8"); 
var ctx8 = c8.getContext("2d");
var grd8 = ctx8.createRadialGradient(75,50,5,90,60,100); //createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
// 创建渐变 
grd8.addColorStop(0, "red"); //addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
grd8.addColorStop(1, "white");
// 填充渐变
ctx8.fillStyle = grd8;
ctx8.fillRect(10,10,150,80); 

// Canvas图像
var c9 = document.getElementById("myCanvas9"); 
var ctx9 = c9.getContext("2d");
var img=document.getElementById("scream");
img.onload = function() {
	ctx9.drawImage(img,10,10); //drawImage(image,x,y)
} 