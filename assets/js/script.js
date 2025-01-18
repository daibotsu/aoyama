jQuery(function() {

	$('.header-btn').on('click', function() {
		$('.header-btn').toggleClass('is-fixed');
		$('.drawer').toggleClass('slidein');
		$('.header-btn span').toggleClass('close');
		$('body').toggleClass('is-noscroll');
		$('.header').toggleClass('is-in');
	});

	$(window).on('resize', function() {
     if(window.matchMedia("(min-width:769px)").matches) {
	   	$('.header-btn').removeClass('is-fixed');
      	$('.drawer').removeClass('slidein');
      	$('.js-header-btn span').removeClass('close');
      	$('body').removeClass('is-noscroll');
     }
	});

	// swiper
	const swiper = new Swiper(".swiper", {
	  loop: false,
	  // 自動再生
	  // autoplay: {
	  //   delay: 3000, // 4秒後に次のスライドへ
	  //   disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
	  // },
	  slidesPerView: "auto",
	  centeredSlides: false,
	  // ページネーション
	  pagination: {
	    el: ".swiper-pagination",
	    clickable: true,
	  },
	  navigation: {
	    nextEl: ".swiper-button-next",
	    prevEl: ".swiper-button-prev",
	  },
	  spaceBetween: 0,
	  breakpoints: {
	    // スライドの表示枚数：769px以上の場合
	    769: {
	      // centeredSlides: false,
	    }
	  },
	  on: {
            init: function () {
                var slideCount = this.slides.length;
                if (slideCount >= 3) {
                    this.params.loop = true;
                    this.loopDestroy();
                    this.loopCreate();
                }
            },
            slideChange: function () {
                var slideCount = this.slides.length;
                if (slideCount >= 3 && !this.params.loop) {
                    this.params.loop = true;
                    this.loopDestroy();
                    this.loopCreate();
                } else if (slideCount < 3 && this.params.loop) {
                    this.params.loop = false;
                    this.loopDestroy();
                }
            }
        }
	});

	const mySwiperWrapper01 = document.getElementById('swiper-wrapper01');
	const mySwiperWrapper02 = document.getElementById('swiper-wrapper02');
	
	const swiper_vertical01 = new Swiper('.swiper-vertical01', {
        // direction: 'vertical',
        loop: true,
        slidesPerView: "auto",
        speed: 15000,
        allowTouchMove: false,
        spaceBetween: 8,
        autoplay: {
          delay: 0,
          reverseDirection: true,//上下の向き
        },
        breakpoints: {
	    // スライドの表示枚数：769px以上の場合
	    	1040: {
		      direction: 'vertical',
		      loop: true,
		      slidesPerView: "auto",
		      speed: 15000,
		      allowTouchMove: false,
	          spaceBetween: 15,
	    	}
	  	},
		on: {
		    slideChangeTransitionStart: function() {
		      mySwiperWrapper01.style.transitionTimingFunction = 'linear';
		    },
		    resize: function() {
		      swiper_vertical01.autoplay.start();
		   	}
		}
    });

    const swiper_vertical02 = new Swiper('.swiper-vertical02', {
        // direction: 'vertical',
        loop: true,
        slidesPerView: "auto",
        speed: 15000,
        allowTouchMove: false,
        spaceBetween: 8,
        autoplay: {
          delay: 0,
          reverseDirection: false,//上下の向き
        },
        breakpoints: {
	    // スライドの表示枚数：769px以上の場合
	    1040: {
	      direction: 'vertical',
	      loop: true,
	      slidesPerView: "auto",
	      speed: 15000,
	      allowTouchMove: false,
          spaceBetween: 15,
	      autoplay: {
	      delay: 0,
	        reverseDirection: false,//上下の向き
	      },
	    }
	  },
	  on: {
		    slideChangeTransitionStart: function() {
		      mySwiperWrapper02.style.transitionTimingFunction = 'linear';
		    },
		    resize: function() {
		      swiper_vertical02.autoplay.start();
		   	}
		}
    });

    const $js_link = $('.js-link');
	const $js_link_target = $('.js-link-target');
	const cls = 'is-active';

	$js_link.on('mouseenter', function () {
	  const this_link = $(this).data('link');

	  $js_link.removeClass(cls);

	  $(this).addClass(cls);

	  
	  $js_link_target.removeClass(cls);

	  $js_link_target.each(function () {
	    const target_data = $(this).data('target');
	    if (this_link === target_data) {
	      $(this).addClass(cls);
	    }
	  });


	});

	// const targetArea = jQuery(".target-area");
	// if (targetArea.length) {
	// 	jQuery(window).on('scroll load', function() {
	// 		let headerHeight = jQuery(".header").innerHeight();
	// 		let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
	// 		let areaTop = targetArea.offset().top - headerHeight; // 対象エリアの上部の位置
	// 		let areaBottom = areaTop + jQuery(".target-area").innerHeight() + headerHeight; // 対象エリアの下部の位置

	// 		if (scrollTop > areaTop && scrollTop < areaBottom) {
	// 			jQuery(".header").addClass("is-in"); // スクロールが対象エリアに入った場合
	// 		} else {
	// 			jQuery(".header").removeClass("is-in"); // スクロールが対象エリアから出ている場合
	// 		}
	// 	});
	// }

	const targetAreas = jQuery(".target-area");
	if (targetAreas.length) {
	    jQuery(window).on('scroll load', function() {
	        let headerHeight = jQuery(".header").innerHeight();
	        let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
	        let isInTargetArea = false;

	        targetAreas.each(function() {
	            let targetArea = jQuery(this);
	            let areaTop = targetArea.offset().top - headerHeight; // 対象エリアの上部の位置
	            let areaBottom = areaTop + targetArea.innerHeight() + headerHeight; // 対象エリアの下部の位置

	            if (scrollTop > areaTop && scrollTop < areaBottom) {
	                isInTargetArea = true;
	                return false; // ループを終了
	            }
	        });

	        if (isInTargetArea) {
	            jQuery(".header").addClass("is-in"); // スクロールが任意の対象エリアに入った場合
	        } else {
	            jQuery(".header").removeClass("is-in"); // スクロールが全ての対象エリアから出ている場合
	        }
	    });
	}



	// $(window).scroll(function() {
	//   let scroll = $(window).scrollTop();
	//   $('.top-kv-image').css({
	// 	 'width': ( 80 + scroll / 30 )  + "%",
	//   });
	//   let $window = $(window).width() - 40; 
	//   let $kv_image_width = $('.top-kv-image').width(); 

	//   if( $kv_image_width > $window) {
	//   	$('.top-kv-image').css({
	// 	  'width': 100  + "%",
	// 	});
	//   }
	// });
	/* ==============================================================

	fadein

	================================================================*/
	$(function(){
	  $(".inview").on("inview", function (event, isInView) {
	    if (isInView) {
	      $(this).stop().addClass("is-active");
	    }
	  });
	});

});


// ホバーで回転アニメーション
/* spanタグに分割 */
let splitTarget = document.querySelectorAll('.js-splitText');//ターゲットとなる要素を全取得
splitTarget.forEach((target) => {// target = ターゲット
    if(!target.classList.contains('is-active')){//ターゲットが'is-active'クラスを持っていない場合
        newText = '';//生成する要素を格納するための変数
        spanText = target.innerHTML;//ターゲットの中身を取得
        spanText.split('').forEach((char) => {// char = character 文字
            newText += '<span>' + char + '</span>';//一文字ずつspanタグで囲む
        });
        newTextBefore = "<div class='before'>"+newText+"</div>";//beforeクラスをつけた要素を生成
        newTextAfter = "<div class='after'>"+newText+"</div>";//afterクラスをつけた要素を生成
        newText = "<span class='text-wrap'>"+newTextBefore + newTextAfter+"</span>";//before after両要素を囲む要素生成
        target.innerHTML = newText;//ターゲットに生成した要素を挿入
    }
});

/* ターゲットにホバーした時の動き */
splitTarget.forEach((target)=>{
    if(!target.classList.contains('is-active')){//ターゲットが'is-active'クラスを持っていない場合
        let beforeSpan = target.querySelector('.before').querySelectorAll('span');//beforeの中にあるspanタグを全取得
        let afterSpan = target.querySelector('.after').querySelectorAll('span');//afterの中にあるspanタグを全取得
        target.addEventListener('mouseenter',()=>{//ホバーしたとき
            gsap.to(beforeSpan,{y:'-100%',stagger:.03,ease:"power2.out"})//0.03秒おきに各spanタグをy軸上に移動
            gsap.to(afterSpan,{y:'0%',stagger:.03,ease:"power2.out"})
        })
        target.addEventListener('mouseleave',()=>{//ホバーが外れたとき
            gsap.to(beforeSpan,{y:'0%',stagger:.03,ease:"power2.out"})
            gsap.to(afterSpan,{y:'100%',stagger:.03,ease:"power2.out"})
        })
    }
});


