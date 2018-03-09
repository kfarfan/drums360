const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");

var audio = new Audio("assets/css/sounds/boom.wav");
var q = new Audio("assets/css/sounds/clap.wav");
var w = new Audio("assets/css/sounds/hihat.wav");
var e = new Audio("assets/css/sounds/kick.wav");
var r = new Audio("assets/css/sounds/openhat.wav");
var t = new Audio("assets/css/sounds/ride.wav");
var y = new Audio("assets/css/sounds/snare.wav");
var u = new Audio("assets/css/sounds/tink.wav");
var i = new Audio("assets/css/sounds/tom.wav");

document.body.addEventListener('keypress', function(event){
  if(event.keyCode === 97){
    audio.play();
    a.classList.toggle('playing');
  }
  if(event.keyCode === 115){
    q.play();
    s.classList.toggle('playing');
  }
  if(event.keyCode === 100){
    w.play();
    d.classList.toggle('playing');
  }
  if(event.keyCode === 102){
    e.play();
    f.classList.toggle('playing');
  }
  if(event.keyCode === 103){
    r.play();
    g.classList.toggle('playing');
  }
  if(event.keyCode === 104){
    t.play();
    h.classList.toggle('playing');
  }
  if(event.keyCode === 106){
    y.play();
    j.classList.toggle('playing');
  }
  if(event.keyCode === 107){
    u.play();
    j.classList.toggle('playing');
  }
  if(event.keyCode === 108){
    i.play();
    l.classList.toggle('playing');
  }
});
