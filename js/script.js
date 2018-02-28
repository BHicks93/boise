// place circles
  var divs = document.getElementsByClassName('circle');

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  for ( var i=0; i < divs.length; i++ ) {
      var thisDiv = divs[i];
      randomTop = getRandomNumber(56, winHeight-56);
      randomLeft = getRandomNumber(56, winWidth-56);
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";
  }

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // pause vid when project clicked

  // open project window
  // on click this show this project


  $( "#circle-1" ).click(function() {
    $( "#project-1" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-2" ).click(function() {
    $( "#project-2" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-3" ).click(function() {
    $( "#project-3" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-4" ).click(function() {
    $( "#project-4" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-5" ).click(function() {
    $( "#project-5" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-6" ).click(function() {
    $( "#project-6" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-7" ).click(function() {
    $( "#project-7" ).fadeIn( "slow" ).show(500);
  });
  $( "#circle-8" ).click(function() {
    $( "#project-8" ).fadeIn( "slow" ).show(500);
  });

  // show scrim
  $( ".circle" ).click(function() {
    $( "#scrim" ).show(10);
  });

  // close project and hide scrim
  $( ".close, #scrim" ).click(function() {
    $( "#project-1, #project-2, #project-3, #project-4, #project-5, #project-6, #project-7, #project-8, #scrim" ).fadeOut( "slow" );
  });
  // show project teaser image
  // on hover show image
  $( "#circle-1" ).hover(function() {
    $( "#project-1-image" ).toggleClass("show")
  });
  $( "#circle-2" ).hover(function() {
    $( "#project-2-image" ).toggleClass("show")
  });
  $( "#circle-3" ).hover(function() {
    $( "#project-3-image" ).toggleClass("show")
  });
  $( "#circle-4" ).hover(function() {
    $( "#project-4-image" ).toggleClass("show")
  });
  $( "#circle-5" ).hover(function() {
    $( "#project-5-image" ).toggleClass("show")
  });
  $( "#circle-6" ).hover(function() {
    $( "#project-6-image" ).toggleClass("show")
  });
  $( "#circle-7" ).hover(function() {
    $( "#project-7-image" ).toggleClass("show")
  });
  $( "#circle-8" ).hover(function() {
    $( "#project-8-image" ).toggleClass("show")
  });

  // mouse over #site-header animate css top 0px;
  // mouseleave #site-header animate css top -218px;
  $( "#site-header" ).mouseenter(function() {
     $( "#menu-wrapper" ).animate({ "top": "0px" }, 500 );
  });
  $( "#menu-wrapper" ).mouseleave(function() {
    $( "#menu-wrapper" ).animate({ "top": "-231px" }, 500 );
  });
