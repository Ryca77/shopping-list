$(document).ready(function() {
	
	$(".add").click(function() {
		var text = $(".stuff").val();
		if(text.length) {
			$('ul.note-paper').append('<li>' + text + '<i class="trash fa fa-trash" /> <i class="cart fa fa-cart-plus" /></li>');
			$(".stuff").val('');
		}
	})
	$(".stuff").keypress(function(event) {
		if(event.which == 13) {
			$(".add").click();
		}
	});

	$("body").on("click", ".cart", function() {
  		$(this).parent("li").appendTo(".shopping-cart");
	});

	$("body").on("click", ".trash", function() {
		$(this).parent("li").remove();
	});

	$(".trash").click(function() {
		console.log('trash');
	});

	$(".cart").click(function() {
		console.log('cart');
	});

	$(".note").click(function() {
		console.log('note');
	});


});