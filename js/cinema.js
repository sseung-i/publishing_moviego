$(function() {



    // 공지사항

    setInterval(noticeRoll,3000);

    function noticeRoll() {
        $(".notice>ul").animate({top:"-30px"},300, function() {
            $(".notice>ul>li:first").appendTo(".notice>ul");
            $(".notice>ul").css({top:"0px"});
        });
    }



    // 이미지롤링
    $(".cinemaImg>ul:nth-child(2)>li").not(":eq(0)").css("left","400px");
    
    var nowImg = 0;
    var imgNum = $(".cinemaImg>ul:nth-child(2)>li").length-1;
    
    var clear = setInterval(cinemaRoll,3000);
    
    function cinemaRoll() {


        nowImg = nowImg == imgNum ? 0 : nowImg+=1 ;
        
        $(".cinemaImg>ul:nth-child(2)>li").eq(nowImg-1).animate({left:"-400px"},300);
        $(".cinemaImg>ul:nth-child(2)>li").eq(nowImg).animate({left:"0px"},300, function() {
            $(".cinemaImg>ul:nth-child(2)>li").not(":eq("+nowImg+")").css("left","400px");
        });

        $(".cinemaImg_bullet>li").eq(nowImg).addClass("bulletNow");
        $(".cinemaImg_bullet>li").not(":eq("+nowImg+")").removeClass("bulletNow");
    };
    

    $(".cinemaImg_bullet>li").click(function() {
        var clickNum = $(this).index();

        if (nowImg==clickNum) return;
        else {
            $(".cinemaImg_bullet>li").removeClass("bulletNow");
            $(".cinemaImg_bullet>li").eq(clickNum).addClass("bulletNow");
            $(".cinemaImg_bullet>li").not(":eq("+clickNum+")").removeClass("bulletNow");


            $(".cinemaImg>ul:nth-child(2)>li").not(":eq("+nowImg+")").css("left","400px");
            $(".cinemaImg>ul:nth-child(2)>li").eq(nowImg).animate({left:"-400px"},300);
            $(".cinemaImg>ul:nth-child(2)>li").eq(clickNum).animate({left:"0px"},300, function() {
                $(".cinemaImg>ul:nth-child(2)>li").not(":eq("+clickNum+")").css("left","400px");
            });
            nowImg = clickNum;
        }
    });


    // 영화예매

    $("#movieFirst>label").click(function() {
        $("#movieFirst>label").removeClass("movieFirstClick");
        $(this).addClass("movieFirstClick");
    });


    $("#movieFirst>label").click(function() {
        $("#movieFirst>label").removeClass("cinema_select_movieClick");
        $(this).addClass("cinema_select_movieClick");
    });


    $("#cinema>ul").not(":eq(0)").hide();

    $(".place_si>li").click(function() {
        var nowsi = $(this).index();
        $(".place_si>li").removeClass("si_click");
        $(this).addClass("si_click");
        $("#cinema>ul>li").removeClass("cinema_click");
        $("#cinema>ul").hide();
        $("#cinema>ul").eq(nowsi).show();
        $("#cinema>ul:eq("+nowsi+")>li:first").addClass("cinema_click");
    });

    //가산 임시변경
    $("#gasan, .place_si>li:nth-child(1)").click(function() {
        $(".gasan>div>div>h2").text("가산디지털점");
        $(".gasan>div>div:nth-child(1)>ul>li:nth-child(2)").show();
        $(".gasan>div>div:nth-child(2)>p:nth-child(1)>span").text("[08514] 서울특별시 금천구 디지털로10길 9 (가산동, 현대아울렛)");
        $(".gasan>div>div:nth-child(2)>p:nth-child(3)>span:nth-child(1)").text("6개관");
        $(".gasan>div>div:nth-child(2)>p:nth-child(3)>span:nth-child(2)").text("1,054석");
    });
    
    //경기광주 임시변경
    $("#gyonggi_guangju, .place_si>li:nth-child(2)").click(function() {
        $(".gasan>div>div>h2").text("경기광주");
        $(".gasan>div>div:nth-child(1)>ul>li:nth-child(2)").hide();
        $(".gasan>div>div:nth-child(2)>p:nth-child(1)>span").text("경기도 광주시 중앙로89-6 2층");
        $(".gasan>div>div:nth-child(2)>p:nth-child(3)>span:nth-child(1)").text("8개관");
        $(".gasan>div>div:nth-child(2)>p:nth-child(3)>span:nth-child(2)").text("1,202석");
    });


    $("#cinema>ul>li").click(function() {
        $("#cinema>ul>li").removeClass("cinema_click");
        $(this).addClass("cinema_click");
    });

    $(".day>ul").click(function() {
        $(".day>ul").removeClass("dayClick");
        $(this).addClass("dayClick");
        $(".day>ul>li>div").removeClass("confirmday");
        $(">li>div:first",this).addClass("confirmday");
    });


    // 예매 클릭

    $(".timeTable>ul>li>a").click(function() {
        var cinema = $(".cinema_click").text();
        var day = $(".confirmday").text();
        var movie = $("#movieFirst>input:checked").val();
        var time = $("h2",this).text();
        confirm("["+cinema+"점] "+movie+"("+day+"일 "+time+")"+"\n고객님께서 선택하신 영화가 맞습니까?");
        return false;
    });




    // 날짜시간 입력

    var today = new Date();

    var nowYear = today.getFullYear();

    var nowMonth = today.getMonth()+1;

    var nowDate = today.getDate();

    var nowDay = today.getDay()+1;
    
    
    nowMonthAllDate = 31;
    
    
    // alert(nowDay);
    
    
    // 오늘
    $(".daychange>li:nth-child(2)>ul>li>span,.daychange2>li:nth-child(2)>ul>li>span").text(nowYear+"."+nowMonth);
    $(".daychange>li:nth-child(2)>ul>li>div:first, .daychange2>li:nth-child(2)>ul>li>div:first").text(nowDate);
    

    if(nowDay==7) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("토");
    }else if(nowDay==6) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("금");
    }else if(nowDay==5) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("목");
    }else if(nowDay==4) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("수");
    }else if(nowDay==3) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("화");
    }else if(nowDay==2) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("월");
    }else if(nowDay==1) {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("토");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("일");
    }else {
        $(".daychange>li:nth-child(3)>ul>li>div:last, .daychange2>li:nth-child(3)>ul>li>div:last").text("일");
        $(".daychange>li:nth-child(4)>ul>li>div:last, .daychange2>li:nth-child(4)>ul>li>div:last").text("월");
        $(".daychange>li:nth-child(5)>ul>li>div:last, .daychange2>li:nth-child(5)>ul>li>div:last").text("화");
        $(".daychange>li:nth-child(6)>ul>li>div:last, .daychange2>li:nth-child(6)>ul>li>div:last").text("수");
        $(".daychange>li:nth-child(7)>ul>li>div:last, .daychange2>li:nth-child(7)>ul>li>div:last").text("목");
        $(".daychange>li:nth-child(8)>ul>li>div:last, .daychange2>li:nth-child(8)>ul>li>div:last").text("금");
        $(".daychange>li:nth-child(9)>ul>li>div:last, .daychange2>li:nth-child(9)>ul>li>div:last").text("토");
    }

    var nextMonth = 0;

    if(nowDate==nowMonthAllDate) {
        $(".daychange>li:nth-child(3)>ul>li:first, .daychange2>li:nth-child(3)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nextMonth+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nextMonth+3);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nextMonth+4);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nextMonth+5);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+6);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+7);
    } else if(nowDate==nowMonthAllDate-1) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li:first, .daychange2>li:nth-child(4)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nextMonth+2);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nextMonth+3);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nextMonth+4);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+5);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+6);
    } else if(nowDate==nowMonthAllDate-2) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li:first, .daychange2>li:nth-child(5)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nextMonth+2);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nextMonth+3);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+4);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+5);
    } else if(nowDate==nowMonthAllDate-3) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nowDate+3);
        $(".daychange>li:nth-child(6)>ul>li:first, .daychange2>li:nth-child(6)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nextMonth+2);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+3);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+4);
    }
    else if(nowDate==nowMonthAllDate-4) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nowDate+3);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nowDate+4);
        $(".daychange>li:nth-child(7)>ul>li:first, .daychange2>li:nth-child(7)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+2);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+3);
    }
    else if(nowDate==nowMonthAllDate-5) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nowDate+3);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nowDate+4);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nowDate+5);
        $(".daychange>li:nth-child(8)>ul>li:first, .daychange2>li:nth-child(8)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nextMonth+1);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+2);
    }
    else if(nowDate==nowMonthAllDate-6) {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nowDate+3);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nowDate+4);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nowDate+5);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nowDate+6);
        $(".daychange>li:nth-child(9)>ul>li:first, .daychange2>li:nth-child(9)>ul>li:first").html("<span>"+nowYear+"."+(nowMonth+1)+"</span>");
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nextMonth+1);
    }
    else {
        $(".daychange>li:nth-child(3)>ul>li>div:first, .daychange2>li:nth-child(3)>ul>li>div:first").text(nowDate+1);
        $(".daychange>li:nth-child(4)>ul>li>div:first, .daychange2>li:nth-child(4)>ul>li>div:first").text(nowDate+2);
        $(".daychange>li:nth-child(5)>ul>li>div:first, .daychange2>li:nth-child(5)>ul>li>div:first").text(nowDate+3);
        $(".daychange>li:nth-child(6)>ul>li>div:first, .daychange2>li:nth-child(6)>ul>li>div:first").text(nowDate+4);
        $(".daychange>li:nth-child(7)>ul>li>div:first, .daychange2>li:nth-child(7)>ul>li>div:first").text(nowDate+5);
        $(".daychange>li:nth-child(8)>ul>li>div:first, .daychange2>li:nth-child(8)>ul>li>div:first").text(nowDate+6);
        $(".daychange>li:nth-child(9)>ul>li>div:first, .daychange2>li:nth-child(9)>ul>li>div:first").text(nowDate+7);
    }
    

});