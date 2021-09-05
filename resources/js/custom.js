//scroll behaviour function
$(function(){
    $('.menu-area ul li a ,.overlay-content ul li a ').on('click',function(){
        $('html,body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
            
        },2000);
        return false;
        
    });
    
});

//mixitup
var mixer = mixitup('.grid-portfolio-container');
/*animated text*/
$(function() {
        $('.animated-text').animatedHeadline({
            animationType: 'slide'
        });
    })

//counter
$(document).ready(function(){
    $('#count-box').CountUpCircle({
duration: 500, // In ms, default: 5000
opacity_anim: false,
step_divider: 1
});
    $('#count-box1').CountUpCircle({
duration: 500, // In ms, default: 5000
opacity_anim: false,
step_divider: 3
});
    $('#count-box2').CountUpCircle({
duration: 500, // In ms, default: 5000
opacity_anim: false,
step_divider: 1
});
    $('#count-box3').CountUpCircle({
duration: 500, // In ms, default: 5000
opacity_anim: false,
step_divider: 2
});
});

//skill bar
$('.skillbar').skillBars({

  // number start
  from: 0,       

  // number end 
  to: false,      

  // animation speed
  speed: 1000,   

  // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
  interval: 100,    

  // the number of decimal places to show
  decimals: 0,      

  // callback method for every time the element is updated,
  onUpdate: null,   

  // callback method for when the element finishes updating
  onComplete: null,   

  // CSS classes
  classes:{
    skillBarBar : '.skillbar-bar',
    skillBarPercent : '.skill-bar-percent',
  }
  
});
//slider
$('.demo').slick({
    autoplay:true,
    autoplaySpeed: 4000,


});

//open menu
function openNav(){
    document.getElementById("mynav").style.width = "100%";
}
//close menu
function closeNav(){
    document.getElementById("mynav").style.width = "0%";
}

//active link
$(".menu-area ul li a , .overlay-content ul li a").click(function(){
    $(".menu-area ul li a , .overlay-content ul li a").removeClass("active");
    $(this).addClass("active");
    
});






























