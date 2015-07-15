// JavaScript Document
$(init);
function init(){
	gotop();syimg()
	getVisitNum('fwnums');//访问计数
	
	if(!$(".bm-con")[0]){
	document.oncontextmenu=function(e){return true;};
    document.onselectstart=function(e){return true;};
	
	$(document).bind("contextmenu", function(e) {
    return true;
    });
	
	function key() {
		if(event.shiftKey||event.altKey||event.ctrlKey){
			window.close();d
			return true;
			}
         
      }
      document.onkeydown = key;
	}
	}
function getVisitNum(tag){//访客统计
	$('#'+tag).load('/new/plus/visit.php');	
	}
function syimg(){
	var _p=$(".w-l-litpic");
	var _imgs=$(".w-l-litpic img");
	var _bigpic=$("#h-b-img");
	var _len=_imgs.length;
	var _timer,speed=4000;
	var _t=0;
	
	_p.find("span").css("opacity",.9);
	_p.hover(function(){_p.find("span").slideUp();},function(){_p.find("span").slideDown()});
	_bigpic.attr("src",_imgs.eq(_t).attr("src"));	
	_imgs.each(function(index, element) {
        $(this).hover(function(){
		clearTimeout(_timer);
		if(_t==index) return;
		_t=index;
		_bigpic.attr("src",_imgs.eq(_t).attr("src"));		
		},function(){//_timer=setTimeout(autoG,speed);
		});
    });
	
	//_timer=setTimeout(autoG,speed);
	function autoG(){
		_t++;
		if(_t>=_len) _t=0;
		_bigpic.attr("src",_imgs.eq(_t).attr("src"));
		//_timer=setTimeout(autoG,speed);
		}
	}
function gotop(){
	var _atop=$("<a/>").attr("href","javascript:void(0)").addClass("g-top").appendTo($("body"));
	_atop.click(function(){$(window).scrollTop(0);});
	if(document.all&&!window.XMLHttpRequest){
		_atop.css("position","absolute");
		$(window).scroll(function(){
			_atop.css("bottom",20);
			});
		}
	$("a").focus(function(){$(this).blur()});
	}
	
function AddFavorite(title, url) {
	try{
		window.external.addFavorite(url, title);
		}
	catch(e){
		try{
			window.sidebar.addPanel(title, url, "");
			}
		catch(e){
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
			}
		}
}

function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
       obj.setHomePage(url);
   }catch(e){
       if(window.netscape){
          try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
         }catch(e){
              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
          }
       }else{
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
       }
  }
}

function showSP(str){
	var _id=parseInt(str);
	var _w=$(window).width();
	var _h=$(window).height();
	var _top=$(window).scrollTop();
	var _ah=(document.body.scrollHeight==0)?document.documentElement.scrollHeight:document.body.scrollHeight;
	var _divbg=$("<div/>").addClass("sp-show-bg").css({"opacity":0.7,"height":document.body.scrollHeight+50}).appendTo($("body"));
	var _div=$("<div/>").addClass("sp-show");
	var _nw=(_w>_h)?_h*.8:_w*.8;
	var _nh=_nw-88;
	var _ntop=(_h-_nh)/2+_top;
	var _nleft=(_w-_nw)/2;
	var _url="http://115.28.189.143/qj/quanjing-50.html";
	switch(_id){
		case 1:
		_url="http://115.28.189.143/qj/quanjing-50.html";
		break;
		case 2:
		_url="http://115.28.189.143/qj/quanjing-51.html";
		break;
		case 3:
		_url="http://115.28.189.143/qj/quanjing-52.html";
		break;
		case 4:
		_url="http://115.28.189.143/qj/quanjing-53.html";
		break;
		case 5:
		_url="http://115.28.189.143/qj/quanjing-54.html";
		break;
		case 6:
		_url="http://115.28.189.143/qj/quanjing-55.html";
		break;
		case 7:
		_url="http://115.28.189.143/qj/quanjing-56.html";
		break;
		case 8:
		_url="http://115.28.189.143/qj/quanjing-59.html";
		break;
		case 9:
		_url="http://115.28.189.143/qj/quanjing-57.html";
		break;
		case 10:
		_url="http://115.28.189.143/qj/quanjing-58.html";
		break;
		}
	
	_div.css({"width":_nw,"height":_nh,"left":_nleft,"top":_ntop}).html('<iframe width="'+_nw+'" style="margin-top:-44px" height="'+_nw+'" frameborder="0" scrolling="no" src="'+_url+'"></iframe>').appendTo($("body"));
	_divbg.click(function(){
		_divbg.remove();
		_div.remove();
		})
	}