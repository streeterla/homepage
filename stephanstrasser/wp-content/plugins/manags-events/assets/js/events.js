var setdate = new Date();
jQuery(document).ready(function($){

    jQuery('#datepicker').datepicker({
                     dateFormat: 'mm/dd/yy',
                     beforeShowDay: highlightDays,
                     defaultDate: setdate
                 });
});
function highlightDays(date) {
    for (var i = 0; i < disabledDays.length; i++) {
        if (new Date(disabledDays[i]).toString() == date.toString()) {
            return [true, 'highlight'];
        }
    }
    return [true, ''];

}

function disableAllTheseDays(date) {
    return $.inArray(date, disabledDays) == -1;
}
