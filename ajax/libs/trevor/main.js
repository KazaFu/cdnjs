(function($) {
    function setBoxHeight() {
        var max = 0;
        $('.price-box-body').each(function(index, item) {
            max = $(item).height() > max ? $(item).height() : max;
        });
        $('.price-box-body').height(max);
    }
    $(document).ready(function() {
        $(window).resize(function(event) {
            setBoxHeight();
        });
        setBoxHeight();
    });
})(jQuery);
