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

	$(".note-paper, .cart").click(function() {
		console.log('click');
            $(".note-paper li").appendTo(".shopping-cart");
	});

});