//rellax-js

//　パララックス対象要素のDOMを全て取得
const rellaxin = document.querySelectorAll(".js-rellax");
//　それぞれの親要素にrelativeなwrapperを付与
rellaxin.forEach(el => {

  const rellax = new Rellax(el, {
    relativeToWrapper: true,
    wrapper: el.parentElement
  });
// バグfix
  window.addEventListener("scroll", () => { // fix to init
    rellax.refresh();
  });

});



var rellax = new Rellax('.js-rellax', {
    speed: -5,
    center: false,
    wrapper: '.js-rellax',
    round: true,
    vertical: true,
    horizontal: false
  });
  