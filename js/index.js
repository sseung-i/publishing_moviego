$(function() {


    var nowImg = 0;
    var imgNum = $(".slideBgCover>ul>li:last").index();

    $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","1400px");
    $(".slideText>li").not(":eq("+nowImg+")").hide();
    
    
    setInterval(slide,5000);
    
    
    function slide() {
        $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","1400px");
        
        nowImg = nowImg == imgNum ? 0 : nowImg+=1;
        
        $(".slideBgCover>ul>li").eq(nowImg-1).animate({left:"-1400px"},300);
        $(".slideBgCover>ul>li").eq(nowImg).animate({left:"0px"},300, function() {
            $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","1400px");
        });
        $(".slideText>li").eq(nowImg-1).fadeOut();
        $(".slideText>li").eq(nowImg).fadeIn();
        
        $(".slideBullet>li").eq(nowImg).addClass("bulletClick").animate({width:"70px"},300);
        $(".slideBullet>li").not(":eq("+nowImg+")").removeClass("bulletClick").animate({width:"10px"},300);

    };


    function prevSlide() {
        $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","-1400px");


        nowImg = nowImg == imgNum ? 4 : nowImg-=1;

        if(nowImg==4) {
            $(".slideBgCover>ul>li").eq(0).animate({left:"1400px"},300);
        }else{
            $(".slideBgCover>ul>li").eq(nowImg+1).animate({left:"1400px"},300);
        }

        $(".slideBgCover>ul>li").eq(nowImg).animate({left:"0px"},300, function() {
            $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","-1400px");
        });

        $(".slideText>li").eq(nowImg+1).fadeOut();
        $(".slideText>li").eq(nowImg).fadeIn();
        
        $(".slideBullet>li").eq(nowImg).addClass("bulletClick").animate({width:"70px"},300);
        $(".slideBullet>li").not(":eq("+nowImg+")").removeClass("bulletClick").animate({width:"10px"},300);
    };


    $(".slideBullet>li").click(function() {
        var clickNum = $(this).index();

        if (nowImg==clickNum) return;
        else {
            $(".slideBullet>li").removeClass("bulletClick");
            $(".slideBullet>li").eq(clickNum).addClass("bulletClick").animate({width:"70px"},300);
            $(".slideBullet>li").not(":eq("+clickNum+")").removeClass("bulletClick").animate({width:"10px"},300);

            $(".slideBgCover>ul>li").not(":eq("+nowImg+")").css("left","1400px");
            $(".slideBgCover>ul>li").eq(nowImg).animate({left:"-1400px"},300);
            $(".slideBgCover>ul>li").eq(clickNum).animate({left:"0px"},300, function() {
                $(".slideBgCover>ul>li").not(":eq("+clickNum+")").css("left","1400px");
            });
            $(".slideText>li").eq(nowImg).fadeOut();
            $(".slideText>li").eq(clickNum).fadeIn();
            
            nowImg = clickNum;
        } 
    });

    // $(".slide_prev, .slide_next").click(function() {
    //     clearInterval(clear);
    // });

    $(".slide_prev").click(function() {
        prevSlide();
    });

    $(".slide_next").click(function() {
        slide();
    })
   

    // 하단 마우스오버

    $("#service_2>li").mouseover(function() {
        $("div",this).animate({opacity:"0"},500);
    });

    $("#service_2>li").mouseout(function() {
        $("div",this).animate({opacity:"1"},500);
    });




});