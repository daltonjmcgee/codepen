$(function(){
  loadJSON();
  generateQuote();
  newQuote();
})
var index = [];
var colors = ["#E092C9","#36778B","#44668E","#B2B2C2","#BC8DC9","#204A2A","#DE64DE","#5DECEB","#967F36","#08B660","#428DF3","#0FDB4B","#7300B8","#F0766D","#57D9F0","#2FDB0B","#EDADB2","#2A3C82","#02E557","#0FEE74","#6B6487","#93C99F","#0DAD6A","#AE4AFE","#4B44B4","#3FE5AF","#2BD59E","#76CD79","#C8683A","#DDDA5C","#B9BEDB","#D7C690","#CBC3C7","#333FCC","#A8E288","#A76DDD","#FF9475","#2D575D","#6D8757","#ED0484","#074C3D","#DC7EBC","#FC9558","#8AD787","#4BE5DB","#D6654C","#600A58","#DBF3C0","#5C835F","#CE6727"]

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
    $.getJSON("https://raw.githubusercontent.com/minibeastsoftware/codepen/master/djt_quotes/condensed_2018.json", function(json){
        json.forEach(function(val){
          index.push("<p>"+val.text+"</p>"+"<span id='timestamp'>"+val.created_at+"</span>")
    })
    generateQuote();
});
}

function generateQuote(){
      num = randNum(index.length - 1)
      $("#quote").html(index[num]);
      randomBgColor();
}

function newQuote(){
  $("#new_quote").click(function(){
      generateQuote();
    })}
