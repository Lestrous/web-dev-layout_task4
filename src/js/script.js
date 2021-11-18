// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

$(function() {
    let viewportWidth = innerWidth;	// ширина страницы

    // события на изменения ширины страницы
    $(window).resize(function() {
        viewportWidth = innerWidth;
    });

	$('.card__button').hover(function() {
        if (viewportWidth >= 432) {
            $(this).prev().show();
        }
	}, function() {
        if (viewportWidth >= 432) {
            $(this).prev().hide();
        }
    });
});
