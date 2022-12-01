'use strict';

//--------------------------- 
//　nav_headerハンバーガーメニュー(Javascript)
//----------------------------

window.addEventListener('DOMContentLoaded', function () {

  const checkBox = document.getElementById('checkbox');
  const menuPart = document.getElementById('menu_part');
  const mask = document.getElementById('mask');
  checkBox.addEventListener('change', function () {
    if (this.checked) { // ←重要なポイント！
      mask.style.display = 'block';
      menuPart.style.left = '0';
    } else {
      mask.style.display = 'none';
      menuPart.style.left = '-300px';
    }
  });
});


//--------------------------- 
//　カルーセルスライダー(slick)
// 参考URL:https://uzurea.net/explanation-of-jquery-slider-slick/
// のセンターモード
//----------------------------
$(function() {
  $('.slick-box').slick({
    arrows: false,
    centerMode: true, //センターモード
    centerPadding: '5%', //前後のパディング　これによって左右端に見えるほかの画像の割合が決まる
    autoplay: false, //オートプレイ
    autoplaySpeed: 2000, //オートプレイの切り替わり時間
    slidesToScroll: 1,
    slidesToShow: 3, 

    responsive: [{
      breakpoint: 676,
      settings: {
        arrows: false, // 前後の矢印非表示
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
});



// スクロールで表示位置まで来たらフワッと上方向にフェードインで表示

let fadeInTarget = document.querySelectorAll('.fade_in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll_in');
    }
  }
});