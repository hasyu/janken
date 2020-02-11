'use strict';

var min = 0;
var max = 2;
var a = Math.floor(Math.random() * (max + 1 - min)) + min;
var te = ['グー','チョキ','パー']

document.getElementById('guu').onclick = function() {
  var guunokekka = ['引き分け','勝ち','負け']
  document.getElementById('randamu').innerHTML = te[a];
  document.getElementById('kekka').innerHTML = guunokekka[a];
}

document.getElementById('tyoki').onclick = function() {
  var tyokinokekka = ['負け','引き分け','勝ち']
  document.getElementById('randamu').innerHTML = te[a];
  document.getElementById('kekka').innerHTML = tyokinokekka[a];
}

document.getElementById('pa').onclick = function() {
  var panokekka = ['勝ち','負け','引き分け']
  document.getElementById('randamu').innerHTML = te[a];
  document.getElementById('kekka').innerHTML = panokekka[a];
}

document.getElementById('saikai').onclick = function() {
  window.location.reload();
}