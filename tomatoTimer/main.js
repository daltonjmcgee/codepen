//vanillaJS practice
var running = false;

function addTime(value) {
  let val = document.getElementById(value)
  let currentTime = Number(val.innerHTML)
  if (currentTime >= 30) {
    alert("30 minute time limit for purposes of testing")
  } else {
    val.innerHTML = currentTime + 1
  }
}

function subtractTime(value) {
  let val = document.getElementById(value)
  let currentTime = Number(val.innerHTML)
  if (currentTime <= 0) {
    alert("Can't go below zero minutes.")
  } else {
    val.innerHTML = currentTime - 1
  }
}

function countDown(mainTime, breakTime) {
  var percentConst = mainTime,
    increment = 0,
    time = mainTime

  function start() {
    increment += 1;
    percent = 100 / (percentConst / 1000) * increment;

    timer = setTimeout(function() {
      var minutes = Math.floor(time / 60000).toString(),
        seconds = ((time / 1000) % 60).toString();
      if (minutes.length == 1) {
        minutes = "0" + minutes
      }
      if (seconds.length == 1) {
        seconds = "0" + seconds
      }

      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById("display").style.background = `linear-gradient(to top, #FF8888 ${percent}%, #FFF 0% )`;

      time -= 1000;

      if (time >= 0) {
        start()
      } else if (time < 0) {
        document.getElementById("timer-time").innerHTML = 0;
        time = breakTime, breakTime = 0, increment = 0
        if (time===0 && breakTime === 0){
          document.getElementById("display").classList.add("timer-display-start");
          document.getElementById("break-time").innerHTML = 0
          document.getElementById("display").style.background = "";
          running = false;
          return;
        }
        start()
      };
    }, 1000)
  }
  return start();
}


document.getElementById('timer-plus').addEventListener('click',
  function() {
    addTime('timer-time');
  })

document.getElementById('timer-minus').addEventListener('click',
  function() {
    subtractTime('timer-time');
  })

document.getElementById('break-plus').addEventListener('click',
  function() {
    addTime('break-time');
  })

document.getElementById('break-minus').addEventListener('click',
  function() {
    subtractTime('break-time');
  })

document.getElementById('display').addEventListener('click',
  function() {
    let mainClock = 0,
      breakClock = 0;
    if (!running) {
      running = true;
      mainClock = (Number(document.getElementById("timer-time").innerHTML)) * 60000;
      breakClock = (Number(document.getElementById("break-time").innerHTML)) * 60000;
      document.getElementById("display").classList.remove("timer-display-start");
      return countDown(mainClock, breakClock);
    }
  })
