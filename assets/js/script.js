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

    // ==================== Time line slider ===============
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "33.33%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "66.66%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "100%");
        $(".production").addClass("active").siblings().removeClass("active");
    });

    // ====================== Quantity Js Code Here ====================

    //setting default attribute to disabled of minus button
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

    //taking value to increment decrement input value
    var valueCount

    //taking price value in variable
    var price = document.getElementById("price").innerText;

    //price calculation function
    
    // function priceTotal() {
    //     var total = valueCount * price;
    //     document.getElementById("price").innerText = total
    // }

    //plus button
    document.querySelector(".plus-btn").addEventListener("click", function() {
        //getting value of input
        valueCount = document.getElementById("quantity").value;

        //input value increment by 1
        valueCount++;

        //setting increment input value
        document.getElementById("quantity").value = valueCount;

        if (valueCount > 3) {
            document.querySelector(".minus-btn").removeAttribute("disabled");
            document.querySelector(".minus-btn").classList.remove("disabled")
        }

        //calling price function
        priceTotal()
    })

    //plus button
    document.querySelector(".minus-btn").addEventListener("click", function() {
        //getting value of input
        valueCount = document.getElementById("quantity").value;

        //input value increment by 1
        valueCount--;

        //setting increment input value
        document.getElementById("quantity").value = valueCount

        if (valueCount == 3) {
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
        }

        //calling price function
        priceTotal()
    })
    

    

})(jQuery);
