$(function() {



    $(".eventcate>li>input").click(function() {

        $(".eventcate>li>label").removeClass("eventcateClick");
        $(this).next().addClass("eventcateClick");

        $(".eventinfo>li").hide();

        if(this.checked) {
            for(i=0; i<=2; i++) {
                if($(".eventcate>li:eq("+i+")>input").is(":checked")==true) {
                    inputVal=$(".eventcate>li:eq("+i+")>input:checked").val();
                    $(".eventinfo>li[title="+inputVal+"]").show();
                };
            };
        };

        if($(".eventcate>li:eq(0)>input").is(":checked")==true) {
            $(".plusbtn").show();
        }else {
            $(".plusbtn").hide();
        }
        
        
    });
    
    $(".eventcate>li>input[value=all]").click(function() {
        $(".eventinfo>li:nth-child(-n+2)").show();
    });
    

    $(".eventinfo>li:nth-child(n+3)").hide();

    $(".plusbtn").click(function() {
        var allNum = $(".eventinfo>li").length;
        var now = $(".eventinfo>li:visible").length;

        now = Math.floor(now/2)*2;

        if(now>=allNum-2) {
            $(".plusbtn").hide();
        }
        if(now>=allNum) {
            return;
        }else {
            $(".eventinfo>li").hide();
            $(".eventinfo>li:nth-child(-n"+(now+2)+")").show();
        }
        return false

    });


    // 공지사항

    $(".notice>div>ul:nth-child(2)>ul>li").click(function() {
        $(".notice>div>ul:nth-child(2)>ul>li").removeClass("noticePage");
        $(this).addClass("noticePage");
    });



    // 멤버쉽

    $(".membership, .sale").stop().mouseover(function() {
        $(this).animate({borderRadius:"50px"},300);
    });

    $(".membership, .sale").stop().mouseout(function() {
        $(this).animate({borderRadius:"0px"},300);
    });

    $(".membership, .sale").click(function() {
        $(this).css("borderColor","red");
    });



});