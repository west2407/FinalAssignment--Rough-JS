// hide show text

$('.readmore a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideDown()
  $('.readmore').hide()
  $('.readless').show()
}
)


$('.readless a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideUp()
  $('.readless').hide()
  $('.readmore').show()
}
)

$('.learnmore').click(function() {
  event.preventDefault();
  $('#learnmoretext').slideDown()
  $('.learnmore').hide()

}
)

// form validation alert

function validateForm()
 {
	 console.log('connected')
     var a=document.forms["input_form"]["name"].value;
     var b=document.forms["input_form"]["email"].value;
     var c=document.forms["input_form"]["message"].value;
     if (a=="" || a=="",b==null || b=="",c==null || c==""  )
     {
         alert("Please fill-in all required fields!");
         
         return false;
     }
 }