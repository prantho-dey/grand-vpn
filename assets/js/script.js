(function ($) {

    'use strict';
    
   // jQuery CountDown
   if( $(".countdown-clock").length ){
    $('.countdown-clock').countdown('2021/12/20', function(event) {
        $('.clock-days').html(event.strftime('%D:'));
        $('.clock-hours').html(event.strftime('%H: '));
        $('.clock-minutes').html(event.strftime('%M:'));
        $('.clock-seconds').html(event.strftime('%S'));
    });
}

    

})(jQuery);
