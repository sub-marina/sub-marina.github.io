document.addEventListener('DOMContentLoaded', function () {

// OUR SERVICES SECTION - tab switching

    const tabsTitles = $('.tab-title-link');
    const tabsContent = $('.tab-content');
    const tabsContainer = $('.services-tabs');
    tabsContainer.click(event => {
        event.preventDefault();
        if ($(event.target).attr('class') === 'tab-title-link') {
            tabsTitles.removeClass('active');
            tabsContent.removeClass('active');
            $(event.target).addClass('active');

            const index = $(event.target).parent().index();
            tabsContent.filter(function () {
                return $(this).attr('data-index') == index;
            }).addClass('active');
        }
    });

// OUR WORK SECTION - loading more pictures

    function createAnimation(btn, timer) {
        const loader = $("<div/>").attr('class','loader');
        btn.before(loader);
        setTimeout(function(){
            $(loader).remove();
        }, timer);
    }

    const imgAll = $('.gallery-block');
    let from = 0;
    let to = 12;
    imgAll.slice(from, to).show();      // for dynamic displaying first images
    const loadImgBtn = $('#work-section-btn');

    loadImgBtn.click(function() {
        createAnimation($(this), 2000);

        setTimeout(function () {
            let currentFrom, currentTo;
            currentFrom = from + 12;
            currentTo = to + 12;
            $('.gallery-block').slice(currentFrom, currentTo).show(); // select next 12 hidden blocks with img and show them
            const isHidden = $('.gallery-block').filter(function () {
                return $(this).css("display") === "none";
            });

            if (isHidden.length === 0) loadImgBtn.fadeOut(200);
            from = currentFrom;
            to = currentTo;

            if (from >= 24) {
                from = 0;
                to = 12;
            }
        }, 2000);
    });

// OUR WORK SECTION - filter pictures

    let gallery = $('.work-section-gallery');

    $('.work-tabs li').click(function (event) {
        $('.work-tab-title.selected').removeClass('selected');
        $(this).addClass('selected');

        const selector = $(this).attr('data-filter');
        $('.gallery-block').hide();
        if (gallery.find(selector).length > 12) {
            gallery.find(selector).slice(0, 12).show();
            loadImgBtn.show();
        } else {
            gallery.find(selector).show();
            loadImgBtn.fadeOut(200);
        }
    });

    // FEEDBACKS SECTION ---- slider

    const width = $('.carousel-item').outerWidth(true);
    const prev = $('.prev');
    const next = $('.next');
    let list = $('.carousel-gallery');
    let carouselItems = $('.carousel-item');
    const sliderItems = $('.slider-item');
    let position = 0; // scroll position
    let key = 0;
    const carouseLength = carouselItems.length;

    function changeSliderState() {
        sliderItems.removeClass('active');
        sliderItems.eq(key).addClass('active');
        carouselItems.removeClass('active');
        carouselItems.eq(key).addClass('active');
    }
    function changeArrowState() {
        key === 0
            ? prev.removeClass('active')
            : prev.addClass('active');
        key === carouseLength - 1
            ? next.removeClass('active')
            : next.addClass('active');
    }
    function changePosition(arg) {
        position += arg ? -width : width;
        list.css('margin-left', `${position}px`);
    }

    prev.click( () => {
        if (position/key === -width) changePosition();
        key && changeSliderState(--key);
        changeArrowState();
    });

    next.click(function() {
        if (((key === 3 && position === 0) || position/(key-3) === -width) && carouseLength - 1 !== key) {
            changePosition(true);
        }

        if (key < carouseLength - 1) changeSliderState(++key);
        changeArrowState();
    });

    carouselItems.click(event => {
        key = $(event.target).index();
        changeSliderState();
        changeArrowState();
    });

// GALLERY SECTION

    const galleryBlock = $('.gallery-section-images').masonry({
        itemSelector: '.big',
        columnWidth: 370,
        gutter: 15
    });
    const subgridMedium = $('.subgrid2').masonry({
        itemSelector: '.medium',
        columnWidth: 182.5,
        gutter: 5
    });
    const subgridSmall = $('.subgrid9').masonry({
        itemSelector: '.small',
        columnWidth: 120,
        gutter: 5
    });

    galleryBlock.imagesLoaded().done(function () {
        galleryBlock.masonry();
        subgridMedium.masonry();
        subgridSmall.masonry();
    });

    const loadMoreBtn = $('#gallery-section-btn');
    loadMoreBtn.click(function() {
        createAnimation($(this), 2000);
        setTimeout(function () {
            $('.image-block:hidden').removeAttr('hidden');
            galleryBlock.masonry();
            loadMoreBtn.fadeOut(200);
        }, 2000);
    });
});