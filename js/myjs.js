$("#btn1").bind( "click", function(event, ui) {
	alert("Speak")
	
    TTS.speak({
        text: 'His palms are sweaty, knees weak, arms are heavy Theres vomit on his sweater already, moms spaghetti Hes nervous, but on the surface he looks calm and ready To drop bombs, but he keeps on forgettin What he wrote down, the whole crowd goes so loud He opens his mouth, but the words wont come out Hes chokin, how, everybods jokin now The clocks run out, times up, over, blaow! Snap back to reality, oh there goes gravity Oh, there goes Rabbit, he choked Hes so mad, but he wont give up that easy? No He wont have it, he knows his whole back citys ropes It dont matter, hes dope, he knows that, but hes broke',
        locale: 'en-GB',
        rate: 0.75
    }, function () {
        alert('success');
    }, function (reason) {
        alert(reason);
    });
  });
  
  /*MPEG4 aufnehmen und mit Player abspielen*/
  
	count = 0;
	let poxx;
	let posyy;
  

   /*$("#myCanvas").bind("click", function(event, ui) {
   let posx = event.clientX;
   let posy = event.clientY;
   
   //alert("touched "+posx +" "+posy);  
   var c = document.getElementById("myCanvas"); 
   let dim = c.getBoundingClientRect();  
   posxx = event.clientX - dim.left; //um haelfte des bildes verschieben
   posyy = event.clientY - dim.top;

   
   //alert("Canvas "+c.width +" "+c.height);    
   var image = new Image();
   image.src = 'img/baum.jpg';
   var cont = c.getContext("2d");
   cont.drawImage(image,posxx,posyy);
	
	var myVar = setInterval(myTimer, 1000);
	
    });  
	
	
	
	function myTimer() {
    var d = new Date();
    document.getElementById("zeit").innerHTML = d.toLocaleTimeString();
    //alert("touched "+posx +" "+posy); 
    var c = document.getElementById("myCanvas"); 
     
    //alert("Canvas "+c.width +" "+c.height);   
    var image = new Image();
    image.src = 'img/baum.jpg';
    var cont = c.getContext("2d");
    cont.drawImage(image,posxx+count,posyy+count);
    count = count+10;
	}
	
	function pant(){
		
	}
	*/
	/*document.querySelector('p').addEventListener('touchstart', f);
	document.querySelector('p').addEventListener('touchend', f);
	document.querySelector('p').addEventListener('touchmove', f);
	document.querySelector('p').addEventListener('touchcancel', f);*/
	
/*function rect(){
var canvas = document.getElementById('myCanvas'), ctx = canvas.getContext('2d'), rect = {}, drag = false;

function init() {
  canvas.addEventListener("touchstart", touchHandler, false);
  canvas.addEventListener("touchmove", touchHandler, false);
  canvas.addEventListener("touchend", touchHandler, false);
}


function touchHandler(event) {
  if (event.targetTouches.length == 1) { //one finger touche
    var touch = event.targetTouches[0];

    if (event.type == "touchstart") {
      rect.startX = touch.pageX;
      rect.startY = touch.pageY;
      drag = true;
    } else if (event.type == "touchmove") {
      if (drag) {
        rect.w = touch.pageX - rect.startX;
        rect.h = touch.pageY - rect.startY ;
        draw();
      }
    } else if (event.type == "touchend" || event.type == "touchcancel") {
      drag = false;
    }
  }
}

function draw() {
  ctx.fillLine(rect.startX, rect.startY, rect.w, rect.h);


 ctx.clearLine(0, 0, canvas.width, canvas.height);



  ctx.fillStyle = "orange";
}

init();
}*/
var el = document.getElementById('mycanvas');
var ctx = el.getContext('2d');
var isDrawing;

el.onmousedown = function(e) {
  isDrawing = true;
  ctx.moveTo(e.clientX, e.clientY);
};
el.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
};
el.onmouseup = function() {
  isDrawing = false;
};
