// DUCK HUNT
  // an intelligence game for intelligent people :)

//Variables and intiliazation section
  var $shotgun = $('#shotgun')
  var currentPlayer = 1
  var p1Score = 0
  var p2Score = 0
  var continueCode = "x"
  var makeCloudRepeat = genRandomNum(5000, 10000)

  $('html').off('mousedown', playShootingFX)
  $('#alertBox').hide()
  $('#resetBox').hide()
  $('body').on('dragstart', 'img', function(event) { event.preventDefault(); });

  var playTheme = setInterval(function(){
    $("#theme")[0].play()
  }, 5050)

//DISABLE THEME
$("#disableTheme").on("click", function(){
  clearInterval(playTheme)
  $(this).remove()
} )


// SHOTGUN SOUND
  $shotgun[0].shoot = function(){
    this.pause()
    this.currentTime = 0
    this.play()
  }

// SHOTGUN SOUND
  function playShootingFX(){
    $shotgun[0].shoot()
    $("body").css("background-color","white")
    var stopShot = setTimeout(function() {
      $('body').css("background-color","lightblue")
    }, 50 )
  }

// RANDOM NUMBER/POSITION GENERATOR
  function genRandomNum(min, max){
    return (Math.round(Math.random() * (max - min)) + min)
  }
    function randomTop() {
      return genRandomNum(5, ($(window).height() - 100))
    }
    function randomLeft() {
      return genRandomNum(5, ($(window).width() - 50))
    }

// CREATE A DUCK
  //create a div with duck image within the field of play and animate
function createDuck(){
  var x = randomTop();
  var y = randomLeft();
  var flyCode = "RU";
  $('#container').append('<div class="duck"><img src="./images/RightFaceDuck.gif" alt="" /></div>')
  $('.duck').last().animate({ top: x, left: y }, 600, function duckAnimation() {
    newTop = randomTop();
    newLeft = randomLeft();
      if (newLeft >= y) {
            $(this).html('<img src="./images/RightFaceDuck.gif" alt="" />')
      } else if (newLeft < y){
            $(this).html('<img src="./images/LeftFaceDuck.gif" alt="" />')
      }
    x = newTop
    y = newLeft
    $(this).animate({ top: x, left: y }, 1000, duckAnimation);
  })
  }

// DEAD DUCK
  //change img of duck when clicked, animate to drop, increase score
$('body').on('mousedown', '.duck', function(){
    $(this).stop()
    $(this).html('<img src="./images/deadduck.png" alt="" />')
    $(this).animate({top: 650 }, 500, function() {
      $(this).remove()
      createDuck()
    })
    trackScore();
  })

// TRACK SCORE
function trackScore(){
  if (currentPlayer == 1) {
    p1Score = p1Score + 1
    $("#player1Score").text(p1Score)
  } else if (currentPlayer == 2){
    p2Score = p2Score + 1
    $("#player2Score").text(p2Score)
  }
  announcer()
}

// WELCOME SCREEN
  //window that starts the game when clicked
$('#welcome').on('click', function(){
  $('html').off('mousedown', playShootingFX)
  console.log("begin")
  clearInterval(playTheme)
  $("#disableTheme").remove()
  $(this).remove()
  playerReadyWindow()
})

// FUNCTION 'GOROUTE'
  //traffic signal to guide into proper functions
function goRoute(){
  console.log("what to do")
  if (continueCode == "x"){
    startTimer()
  } else if (continueCode == "y"){
    evaluator()
  } else if (continueCode == "z"){
    evaluator()
  }
}

// START CLOCK FUNCTION
  //starts main timer and initialiazes start of player turns
function startTimer(){
  console.log("launch timer")
  $('#timer').text('30')
  createDuck()
  createDuck()
  createDuck()
  $('html').on('mousedown', playShootingFX)
  gameTimer = setInterval(goTimer, 1000);}

// CLOCK FUNCTION
  //displays numbers in timer and processes next step
function goTimer(){
  console.log("start counting")
  var $timerNumber = $('#timer').text()
  if ($timerNumber > 10) {
      $timerNumber = $timerNumber - 1
      $('#timer').text($timerNumber)
  } else if ($timerNumber > 0) {
      $timerNumber = $timerNumber - 1
      $('#timer').text("0" + $timerNumber)
  } else if ($timerNumber == 0) {
      $('.duck').remove()
      $('html').off('mousedown', playShootingFX)
      clearInterval(gameTimer)
      if (continueCode == "x"){
        continueCode = "y"
        goRoute()
      } else if (continueCode == "y"){
        continueCode = "z"
        goRoute()

        return
      }
  }
}

// SWITCH PLAYERS FUNCTION
  //switches to player 2 and clears the board
function switchPlayers(){
  //player 2 notification
  $('.duck').remove()
  console.log("switch Players")
  currentPlayer = 2
  playerReadyWindow()
}

// STOP FUNCTION
  //after player 2's turn, clears the board and proceeds
function stop(){
  currentPlayer = 0
  $(".score2").css("background-color","white")
  console.log("stop")
  $('.duck').remove()
  WinnerMessage()
}

// PLAYER READY WINDOW FUNCTION
  //prompts player to ready and sets score window color
function playerReadyWindow(){
  //greeting for current player
  if (currentPlayer == 1) {
    $('#alertLine1').text(" PLAYER 1, READY? ")
    $(".score1").css("background-color","yellow")
    $(".score2").css("background-color","white")
  } else if (currentPlayer == 2) {
    $('#alertLine1').text(" PLAYER 2, READY? ")
    $(".score1").css("background-color","white")
    $(".score2").css("background-color","yellow")
  }
  //set initial countdown time to 3
  $("#alertLine2").text("3")
  //1 sec interval to countdown from 3 to "go!!!"
  var countDownAlert = setInterval(function(){
    var $count = $('#alertLine2').text()
    if ($count > 1) {
        $count = ($count - 1);
        $('#alertLine2').text(""+$count+"")
    } else {
      $count = "GO!!!";
      $('#alertLine2').text(""+$count+"")
      clearInterval(countDownAlert)
    }
  } , 1000)
  //show alertbox and wait 4 seconds then hide it
  $('#alertBox').show()
  setTimeout(function(){
    $('#alertBox').hide()
    startTimer()
    }, 4000)
    }

// WINNER MESSAGE
  // evaluates winner and displays winning message
function WinnerMessage(){
  console.log("winner message")
  if (p1Score > p2Score) {
    $("#winner")[0].play()
    $('#alertLine1').text("           PLAYER 1          ")
    $('#alertLine2').text("           WINS!!!!          ")
    setTimeout(function(){
      $("#yourethebest")[0].play()
    }, 3000)
  } else if (p1Score < p2Score) {
    $("#winner")[0].play()
    $('#alertLine1').text("           PLAYER 2          ")
    $('#alertLine2').text("           WINS!!!!          ")
    setTimeout(function(){
      $("#yourethebest")[0].play()
    }, 3000)
  } else if (p1Score == p2Score) {
    $('#alertLine1').text("           A TIE!!!          ")
    $('#alertLine2').text("          TRY  AGAIN         ")
  }
  $('#alertBox').show()
  setTimeout(function(){
    $('#alertBox').hide()
    castResetBox()
  }, 10000)
}

// RESET BUTTON
  //window with reset button to clear score and start game over
function castResetBox(){
  $('#resetBox').show()
  $("button").mouseup(function(){
      currentPlayer = 1;
      p1Score = 0;
      $("#player1Score").text(p1Score)
      p2Score = 0;
      $("#player2Score").text(p2Score)
      continueCode = "x"
    $('#alertBox').hide()
    $('#resetBox').hide()
    playerReadyWindow()
  })
}

// EVALUATOR
  //produces message based on score and continues to next step
function evaluator(){
  var evalScore = 0
    $('#alertLine1').text(" ROUND OVER ")
    if (currentPlayer == 1){
      evalScore = p1Score
    } else if (currentPlayer == 2){
      evalScore = p2Score
    }
    if (evalScore == 0){
    $('#alertLine2').text("    Are You There? Hello?     ")
    }else if (evalScore == 1){
    $('#alertLine2').text("  Have A Participation Trophy ")
    } else if (evalScore == 2){
    $('#alertLine2').text("   Nice Job Stevie Wonder     ")
    }else if (evalScore == 3){
    $('#alertLine2').text("     ...Storm Trooper?        ")
    }else if (evalScore == 4){
    $('#alertLine2').text("Practice Makes ...Average ...Eventually")
    }else if (evalScore == 5){
    $('#alertLine2').text("Don't Feel Bad. The Ducks Aren't Real")
    }else if (evalScore == 6){
    $('#alertLine2').text("   Major Mallard Murderer!    ")
    }else if (evalScore == 7){
    $('#alertLine2').text("     Nice Shooting Tex!       ")
    }else if (evalScore == 8){
    $('#alertLine2').text("  Wild Bill Would Be Proud    ")
    }else if (evalScore == 9){
    $('#alertLine2').text("    Good Stuff Anne Oakley    ")
    }else if (evalScore == 10){
    $('#alertLine2').text("     Nice Job Dirty Harry     ")
    }else if (evalScore == 11){
    $('#alertLine2').text("   Excellent Performance!!!   ")
    }else if (evalScore == 12){
    $('#alertLine2').text("      Certified Bad Ass!      ")
    }else if (evalScore == 13){
    $('#alertLine2').text("      Chief Duck Killer       ")
    }else if (evalScore == 14){
    $('#alertLine2').text("       King Duck Killer       ")
    }else if (evalScore == 15){
    $('#alertLine2').text("   We're You In Seal Team 6?  ")
    }else if (evalScore == 16){
    $('#alertLine2').text("      Certified Marksman      ")
    }else if (evalScore == 17){
    $('#alertLine2').text("      Gold Level Marksman     ")
    }else if (evalScore == 18){
    $('#alertLine2').text("    Platinum Level Marksman   ")
    }else if (evalScore == 19){
    $('#alertLine2').text("  Master Level Sharpshooter   ")
    }else if (evalScore == 20){
    $('#alertLine2').text("Legendary Master Level Sharpshooter")
    }else if (evalScore == 21){
    $('#alertLine2').text("        God Tier Level        ")
    }else if (evalScore == 22){
    $('#alertLine2').text("       God Tier Level 2       ")
    }else if (evalScore == 23){
    $('#alertLine2').text("       God Tier Level 3       ")
    }else if (evalScore == 24){
    $('#alertLine2').text("       God Tier Level 4       ")
    }else if (evalScore == 25){
    $('#alertLine2').text("       God Tier Level 5       ")
    }else if (evalScore == 26){
    $('#alertLine2').text("  Double God Tier Level Gold  ")
    }else if (evalScore == 27){
    $('#alertLine2').text("Triple God Tier Level Platinum")
    }else if (evalScore == 28){
    $('#alertLine2').text("Quadruple God Tier Level Diamond")
    }else if (evalScore == 29){
    $('#alertLine2').text("Ultra Ultimate God Tier Level")
    }else if (evalScore >= 30){
    $('#alertLine2').text("Infinite God Tier! You Win The Internet")
    }
     $('#alertBox').show()
     setTimeout(function(){
       $('#alertBox').hide()
          if (continueCode == "y"){
            switchPlayers()
          }else if (continueCode =="z"){
            stop()
          }
      }, 5000)
    }

// ANNOUNCER
function announcer(){
  if (currentPlayer == 1){
    scoreTalk = p1Score
  } else if (currentPlayer == 2){
    scoreTalk = p2Score
  }
    if (scoreTalk == 1){
      $("#firstblood")[0].play()
    }else if (scoreTalk == 6) {
      $("#headshot")[0].play()
    }else if (scoreTalk == 8){
      $("#killingspree")[0].play()
    }else if (scoreTalk == 10){
      $("#rampage")[0].play()
    }else if (scoreTalk == 12){
      $("#extermination")[0].play()
    }else if (scoreTalk == 13){
      $("#dominating")[0].play()
    }else if (scoreTalk == 14){
      $("#bloodbath")[0].play()
    }else if (scoreTalk == 15){
      $("#unstoppable")[0].play()
    }else if (scoreTalk == 16){
      $("#annihilation")[0].play()
    }else if (scoreTalk == 17){
      $("#wickedsick")[0].play()
    }else if (scoreTalk == 18){
      $("#megakill")[0].play()
    }else if (scoreTalk == 19){
      $("#ultrakill")[0].play()
    }else if (scoreTalk == 20){
      $("#monsterkill")[0].play()
    }else if (scoreTalk > 20 && scoreTalk < 26){
      $("#godlike")[0].play()
    }else if (scoreTalk > 26){
      $("#godlike2")[0].play()
    }
}

// CREATE CLOUDS
  // create a cloud with random placement and speed
function clouds(){
   console.log("make a cloud")
   //Assign it the image: cloud( 1 – 4)
   var imageNumber = genRandomNum(1, 4)
   //make a div
    $('#container').append('<div class="cloud"><img src="./images/cloud' + imageNumber + '.png" alt="" /></div>')
    //Set positions and give it an animation speed (60 - 100)
    var cloudSetTop = genRandomNum(10, 60)
    var $lastCloud = $('.cloud').last()
    $lastCloud.css({top: cloudSetTop + "%"})
	  // var setLeft = $("body").css(top: cloudSetTop"%", left: 105)
    var animSpeed = genRandomNum(500, 800)
    $("div.cloud").animate({ left: -25 + "%" }, (animSpeed  * 100), function() {
    $(this).remove()
    })
 }

// CAST CLOUDS
  // set interval for random cloud production
setInterval( function(){
  clouds()}, makeCloudRepeat)
