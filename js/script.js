//logoの表示
$(function () {
  $(window).on('load',function(){
    $("#splash").delay(4200).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(4200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });
  });


//-----paginathing-----
$(function () {
  var windowWidth = $(window).width();
  var windowTb = 1024;
  if (windowWidth <= windowTb) {
    $('.shop__container-list').paginathing({
      perPage: 4,
      activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
      firstText: '<i class="fas fa-angle-double-left"></i>', // "最初ページ"に移動するfontawesome
      lastText: '<i class="fas fa-angle-double-right"></i>', // "最後のページ"に移動するfontawesome
    });
  } else {
    $('.shop__container-list').paginathing({
      perPage: 6,
      activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
      firstText: '<i class="fas fa-angle-double-left"></i>', // "最初ページ"に移動するfontawesome
      lastText: '<i class="fas fa-angle-double-right"></i>', // "最後のページ"に移動するfontawesome
    });
  }



  // -----サムネイル画像を押すと、メイン画像が変わる-----
  $('.shop__img-choice li').click(function(){

    var index = $('.shop__img-choice li').index(this);

    var imageurl = $('.shop__img-choice li').eq(index).find('img').attr('src');

    //ulのクラス名を取得（空白で分割）
    className = $(this).parent().attr('class').split(" ");

    $('img.shop__img-gallery-image.'+className[1]).attr('src',imageurl);
  });
});









