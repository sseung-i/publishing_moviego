$(function() {

    $(".allpro>li:nth-child(n+9)").hide();
    
    // 선물
    
    
    setInterval(giftRoll,2500);
    
    function giftRoll() {
        $(".gift>div:nth-child(3)>ul").animate({left:"-300px"},300, function() {
            $(".gift>div:nth-child(3)>ul>li:first").appendTo(".gift>div:nth-child(3)>ul");
            $(".gift>div:nth-child(3)>ul").css("left","0px");
        });
    };
    
    
    $(".cate>ul>li>input").click(function() {
        
        $(".cate>ul>li>label").removeClass("cateClick");
        $(this).next().addClass("cateClick");
        
        $(".allpro>li").hide();
        

        for(i=1; i<=4; i++) {
            if($(".cate>ul>li:eq("+i+")>input").is(":checked")==true) {
                inputVal=$(".cate>ul>li:eq("+i+")>input:checked").val();
                $(".allpro>li[title="+inputVal+"]").show();
            };
        };


        if($(".cate>ul>li:eq(0)>input").is(":checked")==true) {
            $(".plusbtn").show();
        }else {
            $(".plusbtn").hide();
        }
        
    });

    $(".cate>ul>li>input[value=all]").click(function() {
        $(".allpro>li:nth-child(-n+8)").show();
    });
    
    $(".plusbtn").click(function() {
        var allNum = $(".allpro>li").length;
        var now = $(".allpro>li:visible").length;
        // alert(now);

        now = Math.floor(now/4)*4;

        if(now>=allNum-4) {
            $(".plusbtn").hide();
        }

        if(now>=allNum) {
            return;
        }else {
            $(".allpro>li").hide();
            $(".allpro>li:nth-child(-n"+(now+4)+")").show();
        }
        return false
    });


});