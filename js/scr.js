var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}


/* input only Number  */
function inputNumber(block) {
	$('input', block).keypress(function(e) {
		if (e.which >= 47 && e.which <= 57 ){}
		else return false;
	});

	$('input', block).keyup(function() {
		$inputNum = $(this);
		if ($inputNum.val == '' || $inputNum.val() == 0) {
			$inputNum.val('');
		}
	});
}


/* u_tabs */
function u_tabs(link, block) {
	$(link).click(function(e) {
		var $currentTab = $(this);
		var tabId = $currentTab.data('utab');

		$(link).removeClass('active');
		$currentTab.addClass('active');

		$(block).hide().removeClass('active');
		$(block+'[data-utab="' + tabId + '"]').show().addClass('active');
		if($(link).is('a')){
			e.preventDefault();
		}
	});
	$(link).eq(0).click();
}


/* scrollUp */
function scrollUp(block,targetBlock) {
    console.log('eeeeeeeeeeeeeeee');
    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });

    function showHideScrollUp(){
        if($('body').scrollTop()>($(window).height()/4)){
            console.log('123');
            $(block).addClass('active');
        }
        else{
            $(block).removeClass('active');
        }
    }

    showHideScrollUp();

    $(window).resize(function(){
        showHideScrollUp();
    });

    $(window).scroll(function(){
        showHideScrollUp();
    });


}



function initScrollpane(){
	$('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight'));
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });
    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

function valueShow(){
	$('.timer-wrap').each(function() {
		if($(this).is('.animated:not(.timered)')){
			$(this).addClass('timered');

			var timer = $(this).find('.timer');
			var timerValue = timer.data('value');
            var pointValue = 1;
            if(timerValue>=100 && timerValue<250){
                pointValue = 2;
            }
            else if(timerValue>=250 && timerValue<1000){
                pointValue = 3;
            }
            else if(timerValue>=1000 && timerValue<2000){
                pointValue = 4;
            }
            else if(timerValue>=2000 && timerValue<3000){
                pointValue = 5;
            }
            else if(timerValue>=3000){
                pointValue = 9;
            }
			var dataIntervalTime = 2000/timerValue;
			var point = 0;
			var timerId = setInterval(function(){
                point += pointValue;
                if(point>=timerValue){
                    point = timerValue;
                }
                timer.text(point);
				if(point==timerValue){
					clearInterval(timerId);
				}
			}, dataIntervalTime);
		}
	});
}

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
	$('.footer_placeholder').height($('.footer').outerHeight());

	oneHeightItems();

    scrollUp('.scroll-top','body');

});



$(window).load(function(){

	animationBlock($('.animate-section'));
	valueShow();

});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});

$(window).scroll(function(){

	valueShow();

});






