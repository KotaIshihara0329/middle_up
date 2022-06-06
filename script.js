let nav = document.querySelector('#navArea');
let btn = document.querySelector('.button');
let mask = document.querySelector('#mask');
let btn2 = document.querySelector('#button-2');
let btn3 = document.querySelector('#button-3');
let btn4 = document.querySelector('#button-4');
let btn5 = document.querySelector('#button-5');


btn.onclick = () => {
    nav.classList.toggle('open');

}



btn2.onclick = () => {
    nav.classList.toggle('open');
}

btn3.onclick = () => {
    nav.classList.toggle('open');
}

btn4.onclick = () => {
    nav.classList.toggle('open');
}

btn5.onclick = () => {
    nav.classList.toggle('open');
}


$(function(){

    $('.news__tab-child p').click(function(){

        var index = $('.news__tab-child p').index(this);

        $('.news__tab-child p').removeClass('active');

        $(this).addClass('active');

        $('.news__biglist').removeClass('show').eq(index).addClass('show');




    });


    $('.header__booking').click(function(){

        $('.modal').addClass('ouvrent');

    });
    $('.headersub__booking').click(function(){

        $('.modal').addClass('ouvrent');

    });
    $('.menu__a--book').click(function(){

        $('.modal').addClass('ouvrent');

    });
    $('.menu__a--book').click(function(){

        $('.modal').addClass('ouvrent');

    });

    $('.modal__batu').click(function(){

        $('.modal').removeClass('ouvrent');



    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $('.header').addClass('ouvre');
            $('.header__transparent').removeClass('ouvre');
        } else {
            $('.header__transparent').addClass('ouvre');
            $('.header').removeClass('ouvre');
        }


    });

    

});


flatpickr.localize(flatpickr.l10ns.ja);

flatpickr('#js-datepicker', {
    
    dateFormat : 'Y.m.d（D）', // 2021.05.24（月）の形式で表示
    minDate: "today",
    mode: "range",
    rangeSeparator: " から "
   

    
});


disableMobile: true;
