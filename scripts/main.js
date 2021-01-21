function toggleDropdown (e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function(){
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0);
  }
  AOS.init();

  $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          console.log($nav);
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

      $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     });

    $('.team-member-img').hover(function () {
        // over
        $(this.previousElementSibling).css('display','block')
        $(this.previousElementSibling).css('z-index','3')
        $(this.previousElementSibling.previousElementSibling).css('display','block')
        $(this.previousElementSibling.previousElementSibling).css('z-index','3')
      }, function () {
        $(this.previousElementSibling.previousElementSibling).css('display','none')
        $(this.previousElementSibling).css('display','none');
      }
    );
    
     $('.card').hover(function () {
      // over
      
      $(this.children[0]).css('display' , 'block')  
    }, function () {
      $(this.children[0]).css('display' , 'none')
    })
     
     