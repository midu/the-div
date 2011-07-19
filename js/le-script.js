$(function () {
  $('#le-input').keyup(function () {
    $('#le-style').html($(this).val());
  });
});

// #le-box{-webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg);transform: rotate(-90deg);}#main{overflow:hidden;}
if (window.location.hash.match(/#s=/) !== null) {
  append=window.location.hash.split('#s=')[1];
  $('#le-input').val($('#le-input').val() + '\n' + append);
  $('#le-style').html($('#le-input').val().replace(/</g, '&lt;').replace(/>/g, '&gt;'));
}