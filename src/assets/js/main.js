
$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop();
  

  $('#phone_img').css({
    transform: 'translateY(' + (0 + (-0.09 * scrollTop)) + 'px)',
  });
  $('#phone_img1').css({
    transform: 'translateY(' + (0 + (-0.1 * scrollTop)) + 'px)',
  });

  $('#phone_img2').css({
    transform: 'translateY(' + (0 + (-0.1 * scrollTop)) + 'px)',
  });
  

});

