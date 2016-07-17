// $(document).ready(function() {
// 	$('#categorias').change(function(){
// 		$(this).val(){
			
// 		});
// 	});
// });
// var categorias = $('#categorias');
$(document).ready(function(){
	$('#cero').click(function(){
		$('.responsive-img').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#uno').click(function(){
		$('.responsive-img').hide();
		$('.familiar').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#dos').click(function(){
		$('.responsive-img').hide();
		$('.suspenso').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#tres').click(function(){
		$('.responsive-img').hide();
		$('.terror').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#cuatro').click(function(){
		$('.responsive-img').hide();
		$('.accion').show();
		$('.pelis').css('margin-top','0px');
	});
	$('#cinco').click(function(){
		$('.responsive-img').hide();
		$('.pelis').css('margin-top','200px');
		swal(
				'Oops... lo sentimos',
				 'no hay coincidencias',
				'error'
			);
		// if ($(#cinco).change) {
		// 	$('.pelis').css('margin-top','0');
		// 	// statement
		// }
		// if( $($(this)).click ){
		// 	// var pelis = $('.pelis');
		// 	$('.pelis').css('margin-top','200px');
		// }else{
		// 	$('.pelis').css('margin-top','0');
		// }
		
		// if ($(this).click) {
		// 	pelis.append('los sentimos')
		// 	// statement
		// }else{
		// 	pelis.append('');
		// }
		
	});


	// var categorias = $('#categorias').val();
	// var todos, terror, suspenso, comedia, familiar;
	// todos = $('#categorias').val(todos);
	// terror = $('#categorias').val(terror);
	// suspenso = $('#categorias').val(suspenso);
	// familiar = $('#categorias').val(familiar);
	// comedia = $('#categorias').val(comedia);
	// todos = $('.todos')

	// $('#categorias').change(function(){
	// 	if ( $(this).val() == todos) {
	// 		$('.suspenso').hide();
	// 		// statement
	// 	}

	// 	alert("el valor es " + $(this).val());
		// var todos = $('#categorias').val(todos);
		// var terror = $('#categorias').val(terror);
		// var suspenso = $('#categorias').val(suspenso);
		// var familiar = $('#categorias').val(familiar);
		// if ( todos ) {
		// 	$('.terror').hidden();
		// 	// statement
		// }
		// var lista = $(this).val();
		// $('a').class( lista )
		// if()
		// var filtro = $(this).val();
		// if ( filtro ==) {
		// 	// statement
		// 









		// if ( categorias == terror ) {
		// 	$('.comedia').add('.familiar').add('.terror').add('.suspenso').show();
		// 	// statement
		// }else {
		// 	$('.comedia').add('.familiar').add('.terror').add('.suspenso').hidden();
		// }
		// if ( categorias == terror ) {

		// 	// statement
		// }

		// if ( categorias.val() == todos ) {
			
		// 	$('img').show();
		// }

	// $(".questo").click(function (e) {
 //    		$(this).addClass('animated rollIn');
	// 	});

	// 	$(".questo").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
 //    	$(this).removeClass('animated rollIn');

});
