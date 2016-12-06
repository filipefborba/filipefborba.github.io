$(document).ready(function() {
	$('.camera-icon').click(function() {
     $('#cameraInput').trigger("click");
   });
});

$("#apto-carta").change(function() {
  if ($(this).data('options') == undefined) {
    /*Taking an array of all options-2 and kind of embedding it on the select1*/
    $(this).data('options', $('#morador-carta option').clone());
  }
  var id = $(this).val();
  var options = $(this).data('options').filter('[value=' + id + ']');
  $('#select2').html(options);
});
