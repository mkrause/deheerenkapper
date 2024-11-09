var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var gallery_current = 0;
var gallery_amount = 5;

$(function()
{
    //$('#prijslijst').hide();
    //$('#openingstijden').hide();
    
    // On iOS/Android, add a tel: link
    if (isMobile.Android() || isMobile.iOS()) {
        $('#contact-data').append('<a id="ios-tel-link" href="tel:050-5271888"></a>');
    }
    
    setInterval(switchGallery, 3000);
    $('#prijslijst-link').bind('click', showPrijslijst);
    $('#openingstijden-link').bind('click', showOpeningstijden);
});

function switchGallery()
{
    var cur = gallery_current;
    var next = (cur + 1) % gallery_amount;
    
    $('#gallery' + cur).fadeOut(1000);
    $('#gallery' + next).fadeIn(1000);
    
    gallery_current = next;
}

function showPrijslijst()
{
    $('#prijslijst').css('visibility', 'visible');
    $('#prijslijst').animate(
        {
            opacity: 1,
            top: '-50px',
            left: '250px',
            width: '500px',
            height: '707px'
        },
        400,
        'swing',
        function()
        {
            $(this).css('cursor', 'pointer');
            $(this).click(hidePrijslijst);
        }
    );
    
    return false;
}

function hidePrijslijst()
{
    $(this).animate({
        opacity: 0
    },
    500,
    function()
    {
        $(this).css('cursor', 'default');
        $(this).css('top', '100px');
        $(this).css('left', '400px');
        $(this).css('width', '50px');
        $(this).css('height', '71px');
    });
}

function showOpeningstijden()
{
    $('#openingstijden').css('visibility', 'visible');
    $('#openingstijden').animate(
        {
            opacity: 1,
            top: '40px',
            left: '240px',
            width: '532px',
            height: '388px'
        },
        400,
        'swing',
        function()
        {
            $(this).css('cursor', 'pointer');
            $(this).click(hidePrijslijst);
        }
    );
    
    return false;
}

function hideOpeningstijden()
{
    $(this).animate({
        opacity: 0
    },
    500,
    function()
    {
        $(this).css('cursor', 'default');
        $(this).css('top', '100px');
        $(this).css('left', '400px');
        $(this).css('width', '50px');
        $(this).css('height', '71px');
    });
}