$(document).ready(function() {
	$(".add").click(function() {
		var text = $(".stuff").val();
		if(text.length) {
			$('<li />', {html: text}).appendTo('ul.note-paper')
		}
	})
	$(".note-paper .li").mouseenter(function() {
		$('.need-list i').show();
	})
});