$(document).ready(function(){


	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})

    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tabs-nav a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })


    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })
    $('input[type=file]').on('change', function () {
        var fileName = ('' + $(this).val()).replace(/^.*[\ \/]/, '');
        //if (fileName.length > 15) {
        //fileName = fileName.substring(0, 15) + '...';
        //}
        if (fileName == "") {
            fileName = $(this).parent().find('.js-file-button').attr('data-title');
        }
        $(this).parent().find('.js-file-button').html(fileName);
    });


    //animate anchor scroll
    $('.js-anchor-button').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });


    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow-main ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow-main ico-arrow-next"></span>',
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }


    //about-box
    if (!!$('.about-box').offset()) {
        $('.about-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.about-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.about-box .slider-counter .sl-dot').removeClass('active');
            $('.about-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //target-box
    if (!!$('.target-box').offset()) {
        $('.target-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.target-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.target-box .slider-counter .sl-dot').removeClass('active');
            $('.target-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //archievements-box
    if (!!$('.archievements-box').offset()) {
        $('.archievements-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.archievements-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.archievements-box .slider-counter .sl-dot').removeClass('active');
            $('.archievements-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //petitions-box
    if (!!$('.petitions-box').offset()) {
        $('.petitions-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.petitions-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.petitions-box .slider-counter .sl-dot').removeClass('active');
            $('.petitions-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }
    


    //slider actions
    $('.slider-actions .slider-actions-box .ico-arrow-prev').on('click', function () {
        $(this).parents('.slider-actions').find('.slider').find('.ico-arrow-prev').click();
        return false;
    })
    $('.slider-actions .slider-actions-box .ico-arrow-next').on('click', function () {
        $(this).parents('.slider-actions').find('.slider').find('.ico-arrow-next').click();
        return false;
    })
    $('.slider-actions .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if ($(this).parents('.slider-actions').find('.slider').find('.ico-arrow-prev').hasClass('slick-disabled')) {
            $(this).parents('.slider-actions').find('.slider-actions-box').find('.ico-arrow-prev').addClass('slick-disabled');
        } else {
            $(this).parents('.slider-actions').find('.slider-actions-box').find('.ico-arrow-prev').removeClass('slick-disabled');
        }
        if ($(this).parents('.slider-actions').find('.slider').find('.ico-arrow-next').hasClass('slick-disabled')) {
            $(this).parents('.slider-actions').find('.slider-actions-box').find('.ico-arrow-next').addClass('slick-disabled');
        } else {
            $(this).parents('.slider-actions').find('.slider-actions-box').find('.ico-arrow-next').removeClass('slick-disabled');
        }
    })


    
});


