// JavaScript Document
$(picinit);
var _data;
function picinit(){
	var _p=$(".piclist").addClass("h-main");	
	var _con=$("<div/>").addClass("h-con").html("<ul>LOADING...</ul><ul></ul><ul></ul><ul style='margin-right:0'></ul><div class='clear'></div>");
	var _ul=_con.find("ul");
	_p.html("").append(_con);
	$.getJSON("/works", {
			"actype": "getpicdata",
			"typeone":_typeone,
			"tidh": parseInt(_id),
			"key":Math.random()
		},
		function(data) {
			_ul.html("");
			_data=data;
			pic();
		})	
	}


function pic(){
	var _p=$(".h-con");
	var _h=$(window).height()+$(window).scrollTop();
	var _bh=0;
	var _pul;
	var _ul;
	var _ok=true;
	var timer=null;
	var speed=10;
	var _ut=0;
	
	_pul=_p.find("ul");
		
	timer=setTimeout(addImg,speed);
	$(window).scroll(function(){
		var _hh=$(window).height()+$(window).scrollTop();
		if(_hh>_h){
			clearTimeout(timer);
		_h=_hh;
		timer=setTimeout(addImg,speed);
		}
		});
	
	_ul=_pul.eq(0);
	function addImg(){
			clearTimeout(timer);
			if(_ut<_data.length){						
			_ul=getMinul();
			var _li=$("<li/>").css("opacity",0).html(getLi(_data[_ut]["src"],_data[_ut]["title"],_data[_ut]["src"])).appendTo(_ul);
			_li.animate({"opacity":1},"fast");
			_li.find("a").focus(function(){$(this).blur();}).eq(1).css("opacity",0.6);
		    imgOk(_li.find("img"));	
			}
		}
	
	
	function imgOk(img){
		_ut++;
		_ul=getMinul();
		if(_ul.height()+360<_h) timer=setTimeout(addImg,speed);
		}
	
	function getLi(url,tit,url1){
		var _h=Math.ceil(_data[_ut]["h"]/_data[_ut]["w"]*200);
		var str="<a href='javascript:void(0)' onclick='showBig("+_ut+")'><img style='width:200px;height:"+_h+"px' src='"+url+"' alt='"+tit+"' /></a><a href='javascript:void(0)' target='_blank' class='slh'  onclick='showBig("+_ut+")'>"+tit+"</a>";
		return str; 
		}
	
	
	function getMinul(){
		var _u=_pul.eq(0);
		var _h=_u.height();
		
		for(var i=1;i<4;i++){
			if(_h>_pul.eq(i).height()){
				_u=_pul.eq(i);
				_h=_u.height();
				}
			}
		return _u;
		}
		
	}

function showBig(num){
	    var _top=$(window).scrollTop();
		var _h=$(window).height();
		var _w=$(window).width();
		var t=num;
		var ka;
		
		$("html").addClass("htmlov");
		$("<div/>").addClass("yinbg").css("height",_h+_top+2000).click(hideBig).appendTo($("body"));
		var _bp=$("<div/>").addClass("bigpic").css({"left":Math.ceil((_w-600)/2),"top":Math.ceil(_top+(_h-300)/2)}).appendTo($("body"));
		var _img=$("<img/>").attr("src",_data[t]['src']).css("opacity",0).appendTo(_bp);
		var _tit=$("<a/>").html(_data[t]['title']).css("bottom",-40).addClass("slh").appendTo(_bp);
		
		$("<a/>").addClass("kz kzl").css("opacity",0).appendTo(_bp);
		$("<a/>").addClass("kz kzr").css("opacity",0).appendTo(_bp);
		
		ka=$(".bigpic a.kz");
		
		ka.each(function(index) {
            $(this).click(function(){
				if(index==1) t++;
				else t--;
				if(t<0) t=_data.length-1;
				if(t>=_data.length) t=0;
				var _img1=_bp.find("img");
				var _img=$("<img/>").attr("src",_data[t]['src']).css("opacity",0).appendTo(_bp);
				bPicOk(_img,t);
				//if(_img[0].complete) bPicOk(_img);
		        //else _img.load(function(){bPicOk(_img);});
				_img1.animate({"opacity":0},"fast",function(){$(this).remove()})
				}).hover(function(){
				$(this).animate({"opacity":0.9});
				},function(){
					$(this).animate({"opacity":0});
					});
        });
		bPicOk(_img,t);
		//if(_img[0].complete) bPicOk(_img);
		//else _img.load(function(){bPicOk(_img);});
		
		
		function bPicOk(img,t){
			var _iw=parseInt(_data[t]['w']);
			var _ih=parseInt(_data[t]['h']);
			var _niw=_iw+20;
			var _nih=_ih+50;
			
			if(_iw+120>_w || _ih+150>_h){
				var _wp=(_w-100)/(_h-100);
				if(_iw/_ih>_wp){
					_niw=_w-100;
					_nih=Math.ceil(_niw*_ih/_iw);
					} 
				else{
					_nih=_h-100;
					_niw=Math.ceil(_nih*_iw/_ih);
					}
				_iw=_niw-20;
				_ih=_nih-50;
				}
			_bp.animate({"width":_niw,"height":_nih,"left":Math.ceil((_w-_niw)/2),"top":Math.ceil(_top+(_h-_nih)/2)},"fast",function(){_tit.html(_data[t]['title']);_tit.animate({"bottom":0});ka.css("height",_ih+10)});
			img.css({"width":_iw,"height":_ih}).animate({"opacity":1},"slow");
			}
		}


function hideBig(){
	$("html").removeClass("htmlov");
	$(".yinbg").remove();
	$(".bigpic").remove();
	}
