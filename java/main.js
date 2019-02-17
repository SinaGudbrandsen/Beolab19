
/*

const section = document.querySelector("sectiontwo");

let currentPixel = window.scrollY;

console.log(currentPixel); 

if (currentPixel  > 1300) {

    var dynamicItem = document.querySelector("dynamictext"); 

    dynamicItem.classList.add("dynamictextAnimation");

    console.log("yes"); 
}

*/
/*
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200 ) {
            $("#textTitle").css({"color" : "#902B24"})
        }
        else  {
            $("textTitle").css({"opacity": "0"})
        }
    })
})

*/



var window_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'left': object_position_left
        });
    });
});

// move dynamicctext
var window_width = $("#sectionthree").width() - $('#dynamictext').width();

var document_height = $("#sectionthree").height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height) - 2500;
        $('#dynamictext').css({
            'left': object_position_left
        });
    });
});
/*
if (object_position_left < 450) {
    $('#dynamictext').css({
        opacity: 0
    });

};*/

// move wirelesstext
var window_width_wireless = $("#sectionthree").width() - $('#wirelesstext').width();

var document_height_wireless = $("#sectionthree").height();

$(function () {
    $(window).scroll(function () {
        var scroll_position2 = $(window).scrollTop();
        var object_position_left2 = window_width_wireless * (scroll_position2 / document_height_wireless) -2250;
        $('#wirelesstext').css({
            'right': object_position_left2 
        });
    });
});

// move subwoofertext
var window_width_subwoofer = $("#sectionthree").width() - $('#subwoofertext').width();

var document_height_subwoofer = $("#sectionthree").height();

$(function () {
    $(window).scroll(function () {
        var scroll_position_subwoofer = $(window).scrollTop();
        var object_position_left_subwoofer = window_width_subwoofer * (scroll_position_subwoofer / document_height_subwoofer) -1700;
        $('#subwoofertext').css({
            'left': object_position_left_subwoofer 
        });
    });
});

/*var  window_width_subwoofer = document.getElementById("textsection").width

*/



/*ScrollReveal().reveal('.sectionfourtitle', {easing: 'steps(5)', delay: 500,distance: '10px' });
ScrollReveal().reveal('.sectiononeimg',{easing: 'steps(5)', delay: 100, distance: '20px'});
*/

// MAKE HEADER CHANGE COLOR IF ITS PASSES DARKER THE HEIGHT OF DIVS WITH DARKER COLORS

$(document).ready(function() {
    $(window).scroll(function() {
       var element1height = $( '.stickywrapper' ).height(); 
       var element2height = $( ".scrollwrapper" ).height();
       var element3height = $( '#textsection'   ).height(); 
       var total = element1height + element2height;
       var all = total + element3height; 
       var st = $(this).scrollTop();
       if( st > element1height ) {
       $("h1").addClass("active"); 
       } 
       else {
       $("h1").removeClass("active"); 
       }
       if(st > total ) {
       $("h1").removeClass("active"); 
       } 
       if(st > all) {
       $("h1").Class("active"); 
       }
      }); 
     }); 


// Paralax effect
$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });     