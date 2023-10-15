const ham = $("#js-hamburger"); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $("#js-nav"); //js-navの要素を取得し、変数navに格納
ham.on("click", function () {
  ham.toggleClass("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("active"); // ナビゲーションメニューにactiveクラスを付け外し
});

/*** inviuw */
$(function () {
  $(".js-fade").on("inview", function () {
    $(this).addClass("inview");
  });
});
// 下からフェードイン用
$(function () {
  $(".js-fadeBottom").on("inview", function () {
    $(this).addClass("inview");
  });
});

// 上からフェードイン用
$(function () {
  $(".js-fadeTop").on("inview", function () {
    $(this).addClass("inview");
  });
});

// 左からフェードイン用
$(function () {
  $(".js-fadeLeft").on("inview", function () {
    $(this).addClass("inview");
  });
});

// 右からフェードイン用
$(function () {
  $(".js-fadeRight").on("inview", function () {
    $(this).addClass("inview");
  });
});

jQuery(window).bind("scroll", function () {
  scrolled = jQuery(window).scrollTop();
  weight1 = 0.5;
  weight2 = 0.12;
  jQuery(".parallax1").css("top", 300 - scrolled * weight1 + "px");
});
//slick
$(function () {
  $("#js-slider-2").slick({
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    appendDots: $(".dots-2"), // ドットナビゲーションの生成位置を変更
    speed: 1000, // スライドさせるスピード（ミリ秒）
    slidesToShow: 1, // 表示させるスライド数
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    variableWidth: true, // スライド幅の自動計算を無効化
    autoplay: true,
  });
});
