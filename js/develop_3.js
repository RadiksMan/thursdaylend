function validate(form, options){

    var setings = {
        errorFunction:null,
        submitFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction();
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                $(element).closest('.form_row').removeClass('error');
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    form.submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }
    }
}


function validationCall(){


  var formSur = $('.call-form').serialize();
  var form = $('.call-form');

    $.ajax({
        url : form.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                form.trigger("reset");
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

        }
    });
}

function popNext(){
    var form1 = $('.form-top');
    var form2 = $('.form-bottom');
    $.fancybox.open("#call_success",{
        padding:0,
        fitToView:false,
        wrapCSS:"call-popup",
        autoSize:true,
        afterClose: function(){
            clearTimeout(timer);
        }
    });
    var timer = null;

    timer = setTimeout(function(){
        $.fancybox.close("#call_success");
    },2000);
    form1.trigger("reset");
    form2.trigger("reset");
}


$(document).ready(function() {
    validate('.form-top', {submitFunction:popNext});
	validate('.form-bottom', {submitFunction:popNext});
    validate('.call-form', {submitFunction:validationCall});

	inputNumber($('.phone'));

	$('.fancybox_popup').fancybox({
	    padding:0,
	    fitToView:false,
	    autoSize:true,
        wrapCSS:"call-popup",
	    closeBtn:false
	});


    $('.results').slick({
       centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      infinite: true,
      draggable:false,
      focusOnSelect:true
    });

    $('.recmails').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      infinite: true
    });
    
});




