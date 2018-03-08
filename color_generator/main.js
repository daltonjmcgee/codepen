$(function(){
  randomHex();
  generateHexes();
})

function randomHex(){
vals = "1234567890ABCDEF"
hex = [];
for (var i = 0;i<6;i++) {
	x = Math.round((Math.random()*15)+.5)
	hex.push(vals[x]);
}
return "\"#" + hex.join("")+"\""
}

function hexArray(){
  num = $("#hex_amount").val();
  num = parseInt(num);
  hexes = []
  if ($.type(num) !== "number"){
    return alert("Must enter number, like '42', or '24302910'");
  }
  else{
    for (var i = 0;i<num;i++){
      hexes.push(randomHex());
    }
    return hexes;
  }
  }

function generateHexes(){
  colorArr = hexArray()
  $("#colors > p").text("["+colorArr.toString()+"]");
}
