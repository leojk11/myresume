$(document).ready(function(){
    $('#about-icon').css({ 'fill':'#10c398' });

    $('#nav-about').click(function(event){
        $('#about-icon').css({ 'fill':'#10c398' });

        $('#contact-icon').css({ 'fill':'white' });
        $('#projects-icon').css({ 'fill':'white' });
        $('#skills-icon').css({ 'fill':'white' });

        $('#contact-wrapper').css({ 'display':'none' });
        $('#works-wrapper').css({ 'display':'none' });
        $('#skills-wrapper').css({ 'display':'none' });

        $('#basic-info').fadeIn('slow');
    })
    $('#nav-contact').click(function(event){
        $('#contact-icon').css({ 'fill':'#10c398' });

        $('#about-icon').css({ 'fill':'white' });
        $('#projects-icon').css({ 'fill':'white' });
        $('#skills-icon').css({ 'fill':'white' });

        $('#basic-info').css({ 'display':'none' });
        $('#works-wrapper').css({ 'display':'none' });
        $('#skills-wrapper').css({ 'display':'none' });

        $('#contact-wrapper').fadeIn('slow');
    })
    $('#nav-projects').click(function(event){
        $('#projects-icon').css({ 'fill':'#10c398' });

        $('#about-icon').css({ 'fill':'white' });
        $('#contact-icon').css({ 'fill':'white' });
        $('#skills-icon').css({ 'fill':'white' });

        $('#basic-info').css({ 'display':'none' });
        $('#contact-wrapper').css({ 'display':'none' });
        $('#skills-wrapper').css({ 'display':'none' });

        $('#works-wrapper').fadeIn('slow');
    })
    $('#nav-skills').click(function(event){
        $('#skills-icon').css({ 'fill':'#10c398' });

        $('#about-icon').css({ 'fill':'white' });
        $('#contact-icon').css({ 'fill':'white' });
        $('#projects-icon').css({ 'fill':'white' });
    })
})