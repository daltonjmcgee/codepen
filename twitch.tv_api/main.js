$(function(){
  twitchJSON()
})

function twitchJSON(){$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/esl_sc2', function(data){
  console.log(data.stream)
  if (data.stream === null){
    $(".users").html(`No.`)
  }
  else {
    $(".users").html(`Yes.
      <br>
        <a href="https://twitch.tv/esl_sc2"><span id="game">${data.stream.channel.game}</span></a>
      <br>
      <span id="status">${data.stream.channel.status}</span>`)
  }
})}
