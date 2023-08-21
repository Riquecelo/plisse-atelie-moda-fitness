
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    });

    $('.faixa_exibe-modelos').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    })
