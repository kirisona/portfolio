; (function ($) {
    "use strict";
    //add masonry

    $('.choise__examp').masonry({
        itemSelector: '.choise__item'
    });

    // add isotope

    $('.choise__examp').isotope({
    });

    var filtres = [];

    $('.choise__navi').on('click', 'a', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');

        var isChecked = $(this).hasClass('active');
        var filter = $(this).attr('data-filter');

        if (isChecked) {
            addFilter(filter);
        } else {
            removeFilter(filter);
        }

        $('.choise__examp').isotope({
            filter: filtres.join(',')
        });
    });

    function addFilter(filter) {
        if (filtres.indexOf(filter) == -1) {
            filtres.push(filter);
        }
    }

    function removeFilter(filter) {
        var index = filtres.indexOf(filter);
        if (index != -1) {
            filtres.splice(index, 1);
        }
    }
})(jQuery);