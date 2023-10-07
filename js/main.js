const ham = $("#js-hamburger"); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $("#js-nav"); //js-navの要素を取得し、変数navに格納
ham.on("click", function () {
  ham.toggleClass("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("active"); // ナビゲーションメニューにactiveクラスを付け外し
});
