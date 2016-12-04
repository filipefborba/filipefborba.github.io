$(document).ready(function() {
	// declaração da variável
	var ApEscolhido;


	$('.combobox').change(function() {
	// obtendo o valor do atributo value da tag option
	ApEscolhido = $(".combobox option:selected").val();
	$('.ap_box').css("display","block");
	if (ApEscolhido === '101') {
		$('.ap_box').empty()
		$('.ap_box').append('<p>101</p>')
		$('ul').empty();
		$('ul').append('<li class="list_item">Marcelo H.</li>');
		$('ul').append('<li class="list_item">Megan Fox</li>');
		$('ul').append('<li class="list_item">Marcelo Jr. Fox</li>');

		$('#name5').css('display','none');
		$('#status5').css('display','none');
		$('#name6').css('display','none');
		$('#status6').css('display','none');

		$('#name3').css('display','none');
		$('#status3').css('display','none');
		$('#name4').css('display','none');
		$('#status4').css('display','none');

		$('#name1').css('display','inline');
		$('#status1').css('display','inline-block');
		$('#name2').css('display','inline');
		$('#status2').css('display','inline-block');

		}

	else if (ApEscolhido === '102') {
		$('.ap_box').empty()
		$('.ap_box').append('<p>102</p>')
		$('ul').empty();
		$('ul').append('<li class="list_item">Fabio A.</li>');
		$('ul').append('<li class="list_item">Sra. A.</li>');

		$('#name1').css('display','none');
		$('#status1').css('display','none');
		$('#name2').css('display','none');
		$('#status2').css('display','none');

		$('#name5').css('display','none');
		$('#status5').css('display','none');
		$('#name6').css('display','none');
		$('#status6').css('display','none');

		$('#name3').css('display','inline');
		$('#status3').css('display','inline-block');
		$('#name4').css('display','inline');
		$('#status4').css('display','inline-block');

		}

	else if (ApEscolhido === '201') {
		$('.ap_box').empty()
		$('.ap_box').append('<p>201</p>')
		$('ul').empty();
		$('ul').append('<li class="list_item">Gabriel Noal</li>');

		$('#name1').css('display','none');
		$('#status1').css('display','none');
		$('#name2').css('display','none');
		$('#status2').css('display','none');

		$('#name3').css('display','none');
		$('#status3').css('display','none');
		$('#name4').css('display','none');
		$('#status4').css('display','none');

		$('#name5').css('display','inline');
		$('#status5').css('display','inline-block');
		$('#name6').css('display','inline');
		$('#status6').css('display','inline-block');

		}

	});




})
