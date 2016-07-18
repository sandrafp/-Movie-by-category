$(document).ready(function(){
	$('#cero').click(function(){
		$('.responsive-img').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#uno').click(function(){
		$('.responsive-img').hide(1200);
		$('.familiar').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#dos').click(function(){
		$('.responsive-img').hide(1200);
		$('.suspenso').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#tres').click(function(){
		$('.responsive-img').hide(1200);
		$('.terror').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#cuatro').click(function(){
		$('.responsive-img').hide(1200);
		$('.accion').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#cinco').click(function(){
		$('.responsive-img').hide(1200);
		$('.pelis').css('margin-top','200px');
		swal(
				'Oops... lo sentimos',
				 'no hay coincidencias',
				'error'
			);
		
	});
	$('#categorias').change(function(){
		// if ( $(this).val() == 'suspenso') {
		// 	$('.responsive-img').hide(1200);
		// 	$('.suspenso').show();
		// }
		// if ( $(this).val() == 'terror') {
		// 	$('.responsive-img').hide(1200);
		// 	$('.terror').show();
		// }
		// if ( $(this).val() == 'familiar') {
		// 	$('.responsive-img').hide(1200);
		// 	$('.familiar').show();
		// }
		// if ( $(this).val() == 'accion') {
		// 	$('.responsive-img').hide(1200);
		// 	$('.accion').show();
		// }
		// if ( $(this).val() == 'todos') {
		// 	$('.responsive-img').show();
			
		// }
		$('.responsive-img').show(1000);
		$('.responsive-img').not('.'+$('#categorias').val()).hide(1000);

	});

});
