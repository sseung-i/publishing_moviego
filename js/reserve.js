$(function() {


    $("#movie, #movie_select").hide();


    // 영화관별

    $("#cinemaBgcolor").click(function() {
        $("#cinema, #cinema_select").show();
        $("#movie, #movie_select").hide();
        $("#cinemaBgcolor").css("background-color","#fff");
        $("#movieBgcolor").css("background-color","#eee");

        // 예매날짜 오늘로 기본선택
        $(".day>ul").removeClass("dayClick");
        $(".daychange>li:nth-child(2)>ul").addClass("dayClick");
        $(".day>ul>li>div").removeClass("confirmday");
        $(".daychange>li:nth-child(2)>ul>li:last>div:first").addClass("confirmday");
    });
    
    $("#soeul>label").click(function() {
        $("#soeul>label").removeClass("placeClick");
        $(this).addClass("placeClick");
    });


    $("#cinema>ul>li").click(function() {
        $("#cinema>ul>li").removeClass("cinemaClick");
        $(this).addClass("cinemaClick");
    });

    $(".movie_list>form>label").click(function() {
        $(".movie_list>form>label").removeClass("movieFirstClick");
        $(this).addClass("movieFirstClick");
    });
    
    
    //영화별
    
    $("#movieBgcolor").click(function() {
        $("#cinema, #cinema_select").hide();
        $("#movie, #movie_select").show();
        $("#cinemaBgcolor").css("background-color","#eee");
        $("#movieBgcolor").css("background-color","#fff");

        // 예매날짜 오늘로 기본선택
        $(".day>ul").removeClass("dayClick");
        $(".daychange2>li:nth-child(2)>ul").addClass("dayClick");
        $(".day>ul>li>div").removeClass("confirmday");
        $(".daychange2>li:nth-child(2)>ul>li:last>div:first").addClass("confirmday");
    });
    


    $("#movieFirst>label").click(function() {
        $("#movieFirst>label").removeClass("cinema_select_movieClick");
        $(this).addClass("cinema_select_movieClick");
    });

    $("#cinema_do>ul>li").click(function() {
        $("#cinema_do>ul>li").removeClass("movie_select_doClick");
        $(this).addClass("movie_select_doClick");
    });

    $("#cinema_seoul>ul>li").click(function() {
        $("#cinema_seoul>ul>li").removeClass("movie_select_siClick");
        $(this).addClass("movie_select_siClick");
    });


    // 공통 예매일 클릭

    $(".day>ul").click(function() {
        $(".day>ul").removeClass("dayClick");
        $(this).addClass("dayClick");
        $(".day>ul>li>div").removeClass("confirmday");
        $("li:last>div:first",this).addClass("confirmday");
    });



    // 예매 클릭

    // 영화관별 (cinema_select)
    $("#cinema_select>ul>li:last-child>div:nth-child(2)>ul>li>a").click(function() {
        var cinema = $("#soeul>input:checked").val();
        var day = $(".confirmday").text();
        var movie = $("#movieFirst>input:checked").val();
        var time = $("h2",this).text();
        confirm("["+cinema+"점] "+movie+"("+day+"일 "+time+")"+"\n고객님께서 선택하신 영화가 맞습니까?");
        return false;
    });

    // 영화별 (movie_select)
    $("#movie_select>ul>li:last-child>div:nth-child(2)>ul>li>a").click(function() {
        var cinema = $(".movie_select_siClick").text();
        var day = $(".confirmday").text();
        var movie = $(".movie_list>form>input:checked").val();
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