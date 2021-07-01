/* eslint-disable */

$(function(){

    $("div#shuttleFrame").animate(
        {"margin-left" : "-780px"},
        2000,
        function(){
//            $("이동할 대상").insertAfter("이동하려는 위치");
            $("div#shuttleFrame>a:first-child").insertAfter("a:last-child");
            $("div#shuttleFrame").css({
               "margin-left" : "0px"
            });
        }
    );

    // img 요소들이 왼쪽으로 차례 차례 쌓이면서 순서가 변경이 되고
    // 즉 img 요소를 감싸고 있는 a 태그의 순서를 바꿔 주도록하자
    // 이것은 .insertAfter() 기능으로 구현 가능하다. (위의 예시 참조)
    // margin left는 -780 이었다가 다시 셋팅을 margin left 0로 만들어야함

});
