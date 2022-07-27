import $ from 'jquery';
$(document).ready(function () {

    /* filter sidebar THEO SỐ THỨ TỰ*/
    var checked = 0;

    $('.sidebar-sort_blockone .filter_sort-mb input[type="checkbox"]').click(function () {
        var $b = $('.sidebar-sort_blockone .filter_sort-mb input[type=checkbox]');
        checked = $b.filter(':checked').length;
        console.log($b.filter(':checked').val());
        //alert('There are [' + checked + '] checked checkboxes');

        if (checked > 0) {
            $(".sidebar-sort_blockone .filter_sort-mb input:checkbox:not(:checked)").prop('disabled', true);
        } else {
            $('.sidebar-sort_blockone .filter_sort-mb input[type=checkbox]').prop('disabled', false);
        }
    });
});