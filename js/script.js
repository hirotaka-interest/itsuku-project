//paginathing
$(function () {
  $('.shop__container-list').paginathing({
    perPage: 6,//1ページあたりの表示件数
    activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
    firstText: '<i class="fas fa-angle-double-left"></i>', // "最初ページ"に移動するfontawesome
    lastText: '<i class="fas fa-angle-double-right"></i>', // "最後のページ"に移動するfontawesome
  })
});
