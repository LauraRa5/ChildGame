$("#btnstart").bind( "click", function(event, ui) {
	//alert("Speak")
	
    TTS.speak({
        text: 'Hallo! Ich bin die kleine Raupe Sli und alle meine Geschwister sind schon wunderschoene Schmetterlinge geworden und koennen fliegen. Ich moechte auch so gerne mitfliegen, aber dazu muss ich noch viel mehr Aepfel essen, um wachsen zu koennen. Der Weg zu meinen Aepfeln ist so schwer, dass ich es alleine nicht schaffe. Willst du mir dabei helfen? Zeichne mir einfach mit deinem Finger den Weg vor, damit ich weis, wo ich hinlaufen muss. Aber Vorsicht! Du darfst die Raender des Weges nicht beruehren, sonst piksen mich die Stacheln der Straeucher. Probier es doch einmal aus und zeig mir den Weg zu diesem Apfel. Wenn du soweit bist klicke auf den grosen Button unten, um loszulegen.',
        locale: 'de-DE',
        rate: 1
    }, function () {
      //  alert('success');
    }, function (reason) {
      //  alert(reason);
    });
  });
  
var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.lineWidth = 10;
ctx.lineJoin = ctx.lineCap = 'round';

var isDrawing, points = [ ];

el.onmousedown = function(e) {
  isDrawing = true;
  points.push({ x: e.clientX, y: e.clientY });
};

el.onmousemove = function(e) {
  if (!isDrawing) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  points.push({ x: e.clientX, y: e.clientY });

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
};

el.onmouseup = function() {
  isDrawing = false;
  points.length = 0;
};
