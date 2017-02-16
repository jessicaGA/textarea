
//See the cdn
$('textarea').on('keyup', function(){
  autosize($(this));
  
  //force label to stay at the top if there is text in the form
  if($(this).val().length > 0){
    $(this).addClass('contains-text');
  }
})

//focus in textarea if clicked on the label
$('.textarea-group label').on('click tap', function(){
  $(this).siblings('textarea').focus();
})