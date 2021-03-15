


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Science Student", "Web Developer", "Designer", "VFX Artist", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var on = 0;
    $('#bulb').click(function(){
      if(on==0){
        $( "#bulb" ).animate({
          opacity: 1,
    
        }, 1, function() {
          $("#services").addClass("services2");
          on=1;
        });
      }
      else{
        $( "#bulb" ).animate({
          opacity: 0.7,
    
        }, 1, function() {
          $("#services").addClass("services");
          $("#services").removeClass("services2");
          on=0;
        });
      }
  });

});

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e){
    e.preventDefault();
    var key = e.key
    console.log(key);
    switch(key) {
      case 't':
        randomTheme();
        break;
      case 'h':
        changeHue();
        break;
      case 'b':
        randomBG();
        break;
    }
}
function keyUp(e){
    e.preventDefault();
}


var r = document.querySelector(':root');

function randomTheme(){
  console.log("randim theme");
  var colors = ["crimson", "#cf04ff", "#28c5c0","crimson", "#d8ca05", "#ff8400ed", "#4B59F7","crimson"];
  const random = Math.floor(Math.random() * colors.length);
  var theme = colors[random];
  r.style.setProperty('--theme', theme);
}

var bg=0;
function changeHue(){
  bg+=20;
  r.style.setProperty('filter', 'hue-rotate('+bg+'deg)');
}

var bgHue=0;
var d = document.getElementById('movebg');
function randomBG(){
  bgHue+=45;
  d.style.setProperty('filter', 'hue-rotate('+bgHue+'deg)');
}

var proj = document.getElementById('poster')
var countProj=0;
function changeProj(){
  countProj++;

  if(countProj%3==1){
  proj.style.setProperty('background-image', "url('images/wildwest.jpg')");
  }
  else if(countProj%3==2){
    proj.style.setProperty('background-image', "url('images/racoon.jpg')");
    }
  else{
      proj.style.setProperty('background-image', "url('images/colorSwitch.jpg')");
  }
}










  