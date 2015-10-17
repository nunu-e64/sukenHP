var timer;

(function(){$(function(){

	$("div").mouseover(function(){
		$(this).addClass("rollover");
	}).mouseout(function(){
		$(this).removeClass("rollover");
	});
	
	$("div").mousedown( function(){
		timer = jQuery . now();
	});
	
	$("div#what").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://www.geocities.co.jp/HiTeens-Penguin/3884/whats.html';
		}
	});
	
	$("div#games").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://mathlabo.6.ql.bz/index.html';
		}
	});
	
	$("div#blog").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://mathlabo.blog.fc2.com/';
		}
	});

	$("div#gallery").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://www.geocities.co.jp/HiTeens-Penguin/3884/gallery.html';
		}
	});
	
	$("div#bbs").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://bbs6.sekkaku.net/bbs/imsc.html';
		}
	});
	
	$("div#links").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			window.location.href='http://www.geocities.co.jp/HiTeens-Penguin/3884/links.html';
		}
	});
	
	/*
	$("div#break").mouseup( function(){
		if( jQuery . now() - timer < 200  ){
			document.title="壊せ";
			$("div").addClass("break");
			alert("Ready?");
			breakout();
		}
	});
	*/
	
	return $('.gridly').gridly({
	  base: 42,
	  gutter: 9,
	  columns: 20,
	});
});}).call(this);

var input_key_buffer = new Array();
var timerID;
var vx;
var vy;
var barx = 600;
var element = document.getElementById("sample");

// ------------------------------------------------------------
// キーボードを押したときに実行されるイベント
// ------------------------------------------------------------
document.onkeydown = function (e){
	// InternetExplorer 用
	if (!e)	e = window.event;
	
	input_key_buffer[e.keyCode] = true;
};

// ------------------------------------------------------------
// キーボードを離したときに実行されるイベント
// ------------------------------------------------------------
document.onkeyup = function (e){
	// InternetExplorer 用
	if (!e)	e = window.event;

	input_key_buffer[e.keyCode] = false;
};

// ------------------------------------------------------------
// ウィンドウが非アクティブになる瞬間に実行されるイベント
// ------------------------------------------------------------
//window.onblur = function (){
	// 配列をクリアする
//	input_key_buffer.length = 0;
//};

// ------------------------------------------------------------
// キーボードが押されているか調べる関数
// ------------------------------------------------------------
function KeyIsDown(key_code){

	if(input_key_buffer[key_code]){
		return true;
	}
	return false;
}


function breakout(){
	if(KeyIsDown(37)){
		barx -= 8;
		alert(barx);
	}
	if(KeyIsDown(39)){
		barx += 8;
		alert(barx);
	}
	element.style.left = '100px';
	timerID = setTimeout( "breakout()" , 50 );
}

