// スクロールさせたい場所を定義
var position = $("#pick-up").offset().top;

// 指定のボタンを押したら、スクロールさせる。
$('.p-button--scroll__pick-up').click(function(){
    $("html,body").animate({
        scrollTop : position
    }, {
        queue : false
    });
});