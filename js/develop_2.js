$(document).ready(function(){

    $('.more-vacancy').click(function(){
        var parent = $('.vacancy-box');
        console.log(parent);
        var ruber = parent.offset().top;

        var offSetHeight =  ruber + parent.height();

                    $.ajax({
                url : 'partials/addVacancy.php',

                success : function(data){
                    $(scroller).animate({scrollTop: offSetHeight},800);
                    $('.vacancy-box').append(data);
                    }
            });
    });

});