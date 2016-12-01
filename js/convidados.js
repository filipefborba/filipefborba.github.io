$(document).ready(function() {
	// declaração da variável
	var ApEscolhido;

		
	$('.combobox').change(function() {
	// obtendo o valor do atributo value da tag option
	ApEscolhido = $(".combobox option:selected").val();
	$('ap_box').css("display","block");
	if (ApEscolhido === '101') {
		$('.ap_box').append('<p>101</p>')
		$('ul').append('<li class="list_item">Marcelo H.</li>');
		$('ul').append('<li class="list_item">Megan Fox</li>');
		$('ul').append('<li class="list_item">Marcelo Jr. Fox</li>');
		console.log(ApEscolhido);
	}
	});




})
