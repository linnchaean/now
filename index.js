$('.sound').on('click',function(){
    $('#muted_video').attr('muted',false);
    $('.sound span').toggleClass('active');
});


var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        // mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on:{
            slideChange:function(e){
                
                if(e.activeIndex == 7 && e.swipeDirection == 'next'){
                    $('.blank').show();
                    // this.allowTouchMove = false;                
                }

            }
        }
});

$(window).on('scroll',function(){
    if( $(window).scrollTop() == 0 ){
        $('.blank').hide();
    }
})