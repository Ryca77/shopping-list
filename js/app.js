$(document).ready(function() {
	
	$(".add").click(function() {
		var text = $(".items").val();
		if(text.length) {
			$('ul.note-paper').append('<li class="item">' + text + '<i class="trash fa fa-trash" /> <i class="cart fa fa-cart-plus" /></li>');
			$(".items").val('');
		}
	})
	$(".items").keypress(function(event) {
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

	$(function() {
    $(".note-paper").sortable();
    $(".shopping-cart").sortable();
  });

});