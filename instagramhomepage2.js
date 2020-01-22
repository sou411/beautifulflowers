$(window).scroll(function (){
    $('.fadein').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin')
        } else  $(this).removeClass('scrollin')
    });
});

$(window).scroll(function (){
    $('.fadein2').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +1000){
            $(this).addClass('scrollin2')
        } else  $(this).removeClass('scrollin2')
    });
});

$(window).scroll(function (){
    $('.fadein2-1').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +1000){
            $(this).addClass('scrollin2-1')
        } else  $(this).removeClass('scrollin2-1')
    });
});


$(window).scroll(function (){
    $('.fadeinfortag1-6').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollinfortag1-6')
        } else  $(this).removeClass('scrollinfortag1-6')
    });
});

$(window).scroll(function (){
    $('.fadeinfromleft').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollinfromleft')
        } else  $(this).removeClass('scrollinfromleft')
    });
});

$(window).scroll(function (){
    $('.fadeinfromright').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollinfromright')
        } else  $(this).removeClass('scrollinfromright')
    });
});

$(window).scroll(function (){
    $('.fadeout').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +500){
            $(this).addClass('scrollout')
        } else  $(this).removeClass('scrollout')
    });
});

$(window).scroll(function (){
    $('.fadein3').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin3')
        } else  $(this).removeClass('scrollin3')
    });
});

$(window).scroll(function (){
    $('.fadein4').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin4')
        } else  $(this).removeClass('scrollin4')
    });
});

$(window).scroll(function (){
    $('.fadein5').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin5')
        } else  $(this).removeClass('scrollin5')
    });
});
$(window).scroll(function (){
    $('.fadein6').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin6')
        } else  $(this).removeClass('scrollin6')
    });
});

$(window).scroll(function (){
    $('.fadein7').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin7')
        } else  $(this).removeClass('scrollin7')
    });
});

$(window).scroll(function (){
    $('.fadein8').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollin8')
        } else  $(this).removeClass('scrollin8')
    });
});

$(window).scroll(function (){
    $('.fadeinwarm').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollinwarm')
        } else  $(this).removeClass('scrollinwarm')
    });
});

$(window).scroll(function (){
    $('.fadeincold').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
            $(this).addClass('scrollincold')
        } else  $(this).removeClass('scrollincold')
    });
});






$("#slidertitle1").css({
    top:"15%",left:"10%",opacity:0
}).animate({
    top:"20%",left:"2%",opacity:1
},2000).animate({
    top:"20%",left:"2%",opacity:1
},4000).animate({
    top:"15%",left:"10%",opacity:0
},2000);

$("#slidertitle2").css({
    top:"38%",right:"10%",opacity:0
}).animate({
    top:"33%",right:"1%",opacity:1
},2000).animate({
    top:"33%",right:"1%",opacity:1
},4000).animate({
    top:"38%",right:"10%",opacity:0
},2000);

$("#slidercanvas2").css({
    top:"20%",left:"-10%",opacity:0
}).animate({
    top:"15%",left:"25%",opacity:1
},3500).animate({
    top:"15%",left:"25%",opacity:1
},2500).animate({
    top:"20%",left:"-10%",opacity:0
},2000);

$("#slidercanvas3").css({
    top:"50%",left:"57%",opacity:0
}).animate({
    top:"67%",left:"47%",opacity:1
},3800).animate({
    top:"67%",left:"47%",opacity:1
},2200).animate({
    top:"50%",left:"57%",opacity:0
},2000);

$("#slidercanvas4").css({
    top:"20%",left:"-10%",opacity:0
}).animate({
    top:"45%",left:"7%",opacity:1
},3500).animate({
    top:"45%",left:"7%",opacity:1
},2500).animate({
    top:"20%",left:"-10%",opacity:0
},2000);

$("#headertitle a").css({
    top:"-10%"
}).animate({
    top:"-10%"
},6500).animate({
    top:"2.5%"
},1500);

$("#nav-drawer").css({
    right:"3%",opacity:0
}).animate({
    right:"3%",opacity:0
},6500).animate({
    right:"4%",top:"1.5%",opacity:1
},3500);

$("#slidercanvas1").css({
    right:"93%",opacity:0
}).animate({
    right:"93%",opacity:0
},6500).animate({
    right:"94%",opacity:1
},2000);

$("#mainphoto1").css({
    opacity:0
}).animate({
    opacity:0
},7200).animate({
    opacity:1
},1000);

$("#slidercanvas8").css({
    opacity:0
}).animate({
    opacity:0
},7200).animate({
    opacity:0.5
},1000);

$("#tag1-1").css({
    top:"80%"
}).animate({
    top:"80%"
},8700).animate({
    top:"30%",opacity:1
},2000);

$("#tag1-2").css({
    top:"80%"
}).animate({
    top:"80%"
},9700).animate({
    top:"37%",opacity:1
},2000);

$("#tag1-3").css({
    top:"80%"
}).animate({
    top:"80%"
},10700).animate({
    top:"44%",opacity:1
},2000);

$("#tag1-4").css({
    top:"80%"
}).animate({
    top:"80%"
},11700).animate({
    top:"51%",opacity:1
},2000);

$("#tag1-5").css({
    top:"80%"
}).animate({
    top:"80%"
},12700).animate({
    top:"58%",opacity:1
},2000);

$("#slidercanvas9").css({
    opacity:0
}).animate({
    opacity:0
},7200).animate({
    opacity:1
},1000);


$('#nav-content2').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content3').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content4').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content5').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content6').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content7').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content8').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content9').click(function(){
    $('#nav-input').prop('checked',false)
});
$('#nav-content10').click(function(){
    $('#nav-input').prop('checked',false)
});

