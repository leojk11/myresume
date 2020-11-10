$(document).ready(function(){
    $("#home-btn").click(function () {
        $('#home-btn').toggleClass('active');
        $('#home-btn-img').css({ 'filter':'none' });

        if($('#contact-btn').hasClass('active')){
            $('#contact-btn').toggleClass('active');
            $('#contact-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#works-btn').hasClass('active')){
            $('#works-btn').toggleClass('active');
            $('#works-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#skills-btn').hasClass('active')){
            $('#skills-btn').toggleClass('active');
            $('#skills-btn-img').css({ 'filter':'invert(100%)' });
        }

        $('.info').toggleClass('show');
        setTimeout(function(){ 
            $('.info').toggleClass('show');
            $('#basic-info').fadeIn('slow');
        }, 750)
        $('#contact-wrapper').fadeOut('slow');
        $('#works-wrapper').fadeOut('slow');
        $('#skills-wrapper').fadeOut('slow');
    });

    $("#contact-btn").click(function () {
        $('#contact-btn').toggleClass('active');
        $('#contact-btn-img').css({ 'filter':'none' });

        if($('#home-btn').hasClass('active')){
            $('#home-btn').toggleClass('active');
            $('#home-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#works-btn').hasClass('active')){
            $('#works-btn').toggleClass('active');
            $('#works-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#skills-btn').hasClass('active')){
            $('#skills-btn').toggleClass('active');
            $('#skills-btn-img').css({ 'filter':'invert(100%)' });
        }

        $('.info').toggleClass('show');
        setTimeout(function(){ 
            $('.info').toggleClass('show');
            $('#contact-wrapper').fadeIn('slow');
        }, 750)
        $('#basic-info').fadeOut('slow');
        $('#works-wrapper').fadeOut('slow');
        $('#skills-wrapper').fadeOut('slow');
    });

    $("#works-btn").click(function () {
        $('#works-btn').toggleClass('active');
        $('#works-btn-img').css({ 'filter':'none' });
        
        if($('#home-btn').hasClass('active')){
            $('#home-btn').toggleClass('active');
            $('#home-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#contact-btn').hasClass('active')){
            $('#contact-btn').toggleClass('active');
            $('#contact-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#skills-btn').hasClass('active')){
            $('#skills-btn').toggleClass('active');
            $('#skills-btn-img').css({ 'filter':'invert(100%)' });
        }
        
        $('.info').toggleClass('show');
        setTimeout(function(){ 
            $('.info').toggleClass('show');
            $('#works-wrapper').fadeIn('slow');
        }, 750)
        $('#basic-info').fadeOut('slow');
        $('#contact-wrapper').fadeOut('slow');
        $('#skills-wrapper').fadeOut('slow');
    });

    $("#skills-btn").click(function () {
        $('#skills-btn').toggleClass('active');
        $('#skills-btn-img').css({ 'filter':'none' });
        
        if($('#home-btn').hasClass('active')){
            $('#home-btn').toggleClass('active');
            $('#home-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#contact-btn').hasClass('active')){
            $('#contact-btn').toggleClass('active');
            $('#contact-btn-img').css({ 'filter':'invert(100%)' });
        }
        if($('#works-btn').hasClass('active')){
            $('#works-btn').toggleClass('active');
            $('#works-btn-img').css({ 'filter':'invert(100%)' });
        }
        
        $('.info').toggleClass('show');
        setTimeout(function(){ 
            $('.info').toggleClass('show');
            $('#skills-wrapper').fadeIn('slow');
        }, 750)
        $('#basic-info').fadeOut('slow');
        $('#contact-wrapper').fadeOut('slow');
        $('#works-wrapper').fadeOut('slow');
    });

    $('#github-btn').click(function(event){
        window.open('https://github.com/leojk11', '_blank')
    })
    $('#linked-btn').click(function(event){
        window.open('https://www.linkedin.com/in/leonid-jakimovski-78a83719a/', '_blank')
    })
})