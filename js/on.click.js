$(function() {
    //マウスをのせたらクラスを追加・除去
    //トップページ
    $('.p-article--line-up__french-bulldog-house,.p-article--line-up__figure__cute-house,.p-article--line-up__figure__living-access,.p-article--line-up__figure__French-taste,.p-article--line-up__figure__Playful-house,.p-article--line-up__meruhen-house,.p-article--line-up__shabbychic-house,.p-article--line-up__shabbychic-house,.p-article--line-up__Country-house,.p-article--line-up__walnut-tree').hover(function() {
      $(this).find('i:first').toggleClass('is-block');
      $(this).find('img').toggleClass('is-hover');
    });
  });

  //JamHomeエステートとはスライダー
  $(function() {
    //マウスをのせたらクラスを追加・除去
    //トップページ
    $('').hover(function() {
      $(this).find('i:first').toggleClass('is-block');
      $(this).find('img').toggleClass('is-hover');
    });
  });
  
  
  $(function() {
    //マウスをのせたらクラスを追加・除去
    //JamHomeエステートとは
    $('.p-main--slide__img__wrapper').hover(function() {
      $(this).find('img').toggleClass('is-hover');
      $(this).find('.p-main--slider__items__wrapper').toggleClass('is-block');
    });
  });

    //クリックしたらハートが色づく
    $('.frame').on('click',function() {
      $(this).next('.magenta').toggleClass('is-block');
    });

    $('.magenta').on('click',function() {
      $(this).toggleClass('is-block');
    });


    //ヘッダーメニューのナビゲーション部分開閉
    $(function() {
      // hoverを使用
      $(".p-nav--custom-home > a").hover(function(){
        $(".p-sub-menu--custom-home").toggleClass("is-block");
        //ホバーが離れた時
      }, function(){
        $(".p-sub-menu--custom-home").toggleClass("is-block");
      });
    });

    //ハンバーガーメニューの開閉
    $('.p-nav-btn').on('click',function(){
      $(".p-header--nav-body").toggleClass("is-open");
      $(".p-header--heading1").toggleClass("is-open");
      $(".p-header--link").toggleClass("is-open");
      $('.p-main-menu').toggleClass('is-open');
      $('.p-icon--header__wrapper').toggleClass('is-open');
      $('.p-contact').toggleClass('is-open');
      $('.l-header').toggleClass('is-open');
      $('.p-nav-btn').toggleClass('is-open');
      $('.p-nav-btn > a').toggleClass('is-open');
    });

    
    $(function(){
      $(window).resize(function(){
        $(function(){
          //pc
        if (window.matchMedia("(min-width: 1024px)").matches) {
          $(".p-header--nav-body").removeClass("is-open");
          $(".p-header--heading1").removeClass("is-open");
          $(".p-header--link").removeClass("is-open");
          $('.p-main-menu').removeClass('is-open');
          $('.p-icon--header__wrapper').removeClass('is-open');
          $('.p-contact').removeClass('is-open');
          $('.l-header').removeClass('is-open');
          $('.p-nav-btn').removeClass('is-open');
          $('.p-nav-btn > a').removeClass('is-open');
        } else {
          ;
        }
      });
    });
  });

    $(function() {
      // hoverを使用
      $(".p-nav--company-profile > a").hover(function(){
        $(".p-sub-menu--company-profile").toggleClass("is-block");
        //ホバーが離れた時
      }, function(){
        $(".p-sub-menu--company-profile").toggleClass("is-block");
      });
    });
