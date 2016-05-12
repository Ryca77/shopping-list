$(document).ready(function() {
	
	$(".add").click(function() {
		var text = $(".stuff").val();
		if(text.length) {
			$('ul.note-paper').append('<li class="item">' + text + '<i class="trash fa fa-trash" /> <i class="cart fa fa-cart-plus" /></li>');
			$(".stuff").val('');
		}
	})
	$(".stuff").keypress(function(event) {
		if(event.which == 13) {
			$(".add").click();
		}
	});

	$("body").on("click", ".cart", function() {
  		$(this).parent(".item").appendTo(".shopping-cart");
  		$(this).removeClass("cart fa fa-cart-plus").addClass("undo fa fa-undo");
	});

	$("body").on("click", ".trash", function() {
		$(this).parent("li").remove();
	});

	$("body").on("click", ".undo", function() {
		$(this).parent(".item").appendTo(".note-paper");
		$(this).removeClass("undo fa fa-undo").addClass("cart fa fa-cart-plus");
	});

});