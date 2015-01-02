(function(){
$(document).ready(function() {

function Desktop() {

}
Desktop.prototype = {
	/// ウィンドウのリサイズをされたとき
	resized : function () {
		$(".desktop").css("width", $(window).width() + "px");
		$(".desktop").css("height", $(window).height() + "px");	
	}
};


var desktop = new Desktop();
desktop.resized();

$(window).resize(function() {
	desktop.resized();
});


});   /* end of document.ready */
})(); /* end of closure */
