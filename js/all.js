$(document).ready(function () {
    $('.moible-menu').click(function (e) { 
        e.preventDefault();
        $('.layout-header .menu').toggleClass('add');
    });
});