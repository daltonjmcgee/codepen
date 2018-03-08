$(function(){
  loadJSON();
  generateQuote();
  newQuote();
})
var index = [];
var colors = ["#21AA16", "#B9FE91", "#F229CD", "#61A439", "#342D5E", "#B3FAD7", "#AD59E4", "#5DC423", "#1D8C39", "#23CCB1"];

function randomBgColor() {
  "use strict";
  var x = Math.round((Math.random() * colors.length));
  var color = colors[x];
  $("body").animate({backgroundColor:color},250 );
  $("#quote, #attribution, #new_quote").animate({color:color},25);
}

function randNum(num){
  return Math.round(Math.random() * num)
}

function loadJSON(){
    $.getJSON("https://raw.githubusercontent.com/bpb27/trump-tweet-archive/master/data/realdonaldtrump/2017.json", function(json){
        json.forEach(function(val){
          index.push("<p>"+val.text+"</p>")
    })
    generateQuote();
});
}

function generateQuote(){
      num = randNum(index.length - 1)
      document.getElementById("quote").innerHTML = index[num];
      randomBgColor();
}

function newQuote(){
  $("#new_quote").click(function(){
      generateQuote();
    })}
