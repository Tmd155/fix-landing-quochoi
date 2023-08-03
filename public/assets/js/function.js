AOS.init();
$("img.lazy").lazyload({ 
    effect: "fadeIn",
    threshold: 100,
    failure_limit: 20
}).removeClass("lazy");
$(document).ajaxStop(function(){
    $("img.lazy").lazyload({ 
        effect: "fadeIn",
        threshold: 100,
        failure_limit: 20 
    }).removeClass("lazy");
});
function loadLazyLoad(){
    $("img.lazy").lazyload({ 
        effect: "fadeIn",
        threshold: 100,
        failure_limit: 20
    }).removeClass("lazy");
};
$('body').on('click','*[data-info]', function(e){
    var icon = $(this).attr('data-info');
    $(this).closest('.item-personnel').find('.info-personnel').slideToggle();
    html = '<i class="fa fa-arrow-'+icon+'" '+'aria-hidden="true"></i>'
    $(this).find('.icon-drop__img').html(html);
    if(icon == 'up') {
        $(this).attr('data-info','down');
    }else if(icon == 'down') {
        $(this).attr('data-info','up');
    }
});
//ẩn hiện luât, dự thảo, nghị định
$('body').on('click','*[data-tab]', function(e){
    var id_tab = $(this).attr('data-tab');
    // var content = $(this).find('.text-value').html();
    // $('.content-center .title-content-center').html(content)
    $('#'+id_tab).slideToggle();
});
$('.slide-video-question').owlCarousel({
    items:1,
    merge:true,
    loop:false,
    margin:150,
    video:true,
    lazyLoad:true,
    center:false,
    dots:false,
    nav:true,
    navText: ['<img src="./public/assets/img/icon/prev.png">','<img src="./public/assets/img/icon/next.png">'],
    responsive:{
        0: {
            margin:0,
            items:1,
        },
        480:{
            margin:0,
            items:1,
        },
        768:{
            margin:50,
            items:1,
        }
    },
})
$('.slide-impression-said').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    navText: ['<img src="./public/assets/img/icon/prev.png">','<img src="./public/assets/img/icon/next.png">'],
});
function loadSpincrement(element,to,duration) {
    // alert(element)
    $('.'+element).spincrement({
        from: 0,
        to: to,
        decimalPlaces: 0,
        decimalPoint:'.',
        thousandSeparator:'.',
        duration: duration,// ms; TOTAL length animation
        leeway: 50,// percent of duraion
        easing:'spincrementEasing',
        fade:true
    });
}