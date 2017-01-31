$(function(){


/* ------- OPEN-CLOSE MENU ------- */
  var isMenuOpen = false;


  function openMenu(){

    $('#nav-menu').animate({
      right: '0'
      }, 300);

    $('.global-Container').animate({
      right: '320px',
      opacity: '0.4',
    }, 300);

    $('#right-menu').html("<i class=\"fa fa-times\">&nbsp;</i>")
    isMenuOpen = true;
  }

  function closeMenu () {

    $('#nav-menu').animate({
      right: '-1000px'
          }, 300);

    $('.global-Container').animate({
      right: '0',
      opacity: '1',
    }, 300);

    $('#right-menu').html("<i class=\"fa fa-bars\">&nbsp;</i>");

    isMenuOpen = false;
  }

  function openCloseMenu () {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  $('#mobile-header').click(function() {
    openCloseMenu();
  });

/* ------- /OPEN-CLOSE MENU ------- */

  //fermeture du menu au resize de la fenetre
  $(window).resize(function() {
    if (isMenuOpen) {
      closeMenu ();
    };
  });

  function scrollToTop() {
    $('body, html').animate({
      scrollTop: $('header').offset().top -60
    }, 'slow');
  }

  //bouton pour aller en haut de page
  $(window).scroll(function() {
    if ($(window).scrollTop() > 920) {
      $('.fa-caret-square-o-up').fadeIn();
    } else {
        $('.fa-caret-square-o-up').fadeOut();
      };
  });

  $('.fa-caret-square-o-up').click(function() {
    scrollToTop()
  });

$(window).resize(function(){
  if ( ($(this).height() < 300 ) && ($(window).scrollTop() > 600) ){
      $('.fa-caret-square-o-up').fadeIn();
    } else {
        $('.fa-caret-square-o-up').fadeOut();
      };
  });




  function gotoSection(article) {
    console.log("got to : ", article);
    $('body, html').animate({
      scrollTop: $('#' + article).offset().top - 60
    }, 'slow');
  }

$('nav li').click(function() {
    var article = $(this).attr('data-article');
    gotoSection(article);
    closeMenu ()
  })


  

});
















