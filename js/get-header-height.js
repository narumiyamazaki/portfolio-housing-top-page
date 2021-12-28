//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$(".l-header").height();
    $("body").css("padding-top", height + 0);//10pxだけ余裕をもたせる
  });