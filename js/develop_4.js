function headerTub(){
    $('.header-tab-top-item').not(':first').hide();
    $('.header-tab-bottom-item').click(function(){
        $('.header-tab-bottom-item').removeClass('active').eq($(this).index()).addClass('active');
        $('.header-tab-top-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
}



$(document).ready(function(){
     headerTub();
});