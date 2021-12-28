// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fade-down-trigger').each(function(){ //fade-down-triggerというクラス名が
    　　var elemPos = $(this).offset().top-5; //要素より、50px上の
    　　var scroll = $(window).scrollTop();
    　　var windowHeight = $(window).height();
    　　if (scroll >= elemPos - windowHeight){
    　　$(this).addClass('fade-down');
    　　// 画面内に入ったらfade-downというクラス名を追記
    　　    }
    　　});

    }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
    
    function delayScrollAnime() {
      var time = 0.1;//遅延時間を増やす秒数の値
      var value = time;
      $('.delayScroll').each(function () {
        var parent = this;					//親要素を取得
        var elemPos = $(this).offset().top;//要素の位置まで来たら
        var scroll = $(window).scrollTop();//スクロール値を取得
        var windowHeight = $(window).height();//画面の高さを取得
        var childs = $(this).children();	//子要素を取得
        
        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
          $(childs).each(function () {
            
            if (!$(this).hasClass("fade-down")) {//アニメーションのクラス名が指定されているかどうかをチェック
              
              $(parent).addClass("play");	//親要素にクラス名playを追加
              $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
              $(this).addClass("fade-down");//アニメーションのクラス名を追加
              value = value + time;//delay時間を増加させる
              
              //全ての処理を終わったらplayを外す
              var index = $(childs).index(this);
              if((childs.length-1) == index){
                $(parent).removeClass("play");
              }
            }
          })
        }else {
          $(childs).removeClass("fade-down");//アニメーションのクラス名を削除
          value = time;//delay初期値の数値に戻す
        }
      })
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
  