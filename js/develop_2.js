$(document).ready(function(){

    $('.more-vacancy').click(function(){

            $.ajax({
                url : 'partials/addVacancy.php',

                success : function(data){

                    $('.vacancy-box').append(data);
                    }
            });
    });

});