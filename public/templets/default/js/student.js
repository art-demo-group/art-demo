// JavaScript Document
function showStudents(){
	var _id=arguments[0]?arguments[0]:0;
	var _name=arguments[1]?arguments[1]:"";
	$(".banji-s a").removeClass("on");
	$(".banji-s a[id="+_id+"w]").addClass("on");
	$(".stu-s-l").css("opacity",0.5);
	var id =parseInt(_id);
	$.getJSON("/ms/stu.php",{"id":id,"name":_name,"rad":Math.random()},function(data){
		$(".stu-s-l ul").html("");
		if(data.length>0){
			for(var _v in data){
				$("<li/>").html("<a href='/ms/?name="+data[_v]['title']+"' target='_blank'><b><img src='/ms"+data[_v]['litpic']+"' /></b><i>"+data[_v]['title']+"</i></a>").appendTo($(".stu-s-l ul"));
				}
			$("<div/>").addClass("clear").appendTo($(".stu-s-l ul"));
			}
		else $(".stu-s-l ul").html("该班暂无学生信息！");
		$(".stu-s-l").css("opacity",1);
		})
	}

function sousuoStu(){
	var _p=$(".d-ss-s");
	_p.find("button").click(
	function(){
		var _name=_p.find("input").val();
		if(_name==""){
			_p.find("input").focus();
			return false;
			}
		showStudents(1,_name);	
		$(window).scrollTop(0);
		}
	);
	
	}

$(function(){showStudents(4);sousuoStu()});