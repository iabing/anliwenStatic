/**
 * @Title  安丽文-登录注册等
 * @Author a_bing
 * @Date   2016-03-04
 * @email  ia_bing@163.com
 * @note   安丽文-版权所有
 */

$(function(){
  //search type
  $('#typeP').click(function(){
    var oUl = $('#typeUl');
    var oIcon = $('#selectIcon');
    if(oUl.css('display') == 'none'){
      oUl.show();
      oIcon.attr('class','a-icon17');
    }else{
      oUl.hide();
      oIcon.attr('class','a-icon11');
    }
  });
  $('#typeUl li').click(function(){
    var oIcon = $('#selectIcon');
    oIcon.attr('class','a-icon11');
    $('#searchType').val($(this).html());
    $('#typeUl').hide();
  });
});

//加入收藏
function joinShou(url,title){
	if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
      var ua = navigator.userAgent.toLowerCase();
      if(ua.indexOf("msie 8")>-1){
          external.AddToFavoritesBar(url,title,'');//IE8
      }else{
          try {
              window.external.addFavorite(url, title);
          } catch(e) {
              try {
                  window.sidebar.addPanel(title, url, "");//firefox
              } catch(e) {
                  alert("加入收藏失败，请使用Ctrl+D进行添加");
              }
          }
      }
  }
  return false;
}

