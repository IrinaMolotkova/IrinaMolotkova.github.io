$(document).ready(function(){
$('.header').height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
})

function randomInt(min,max){
return Math.floor(Math.random() * (max - min) + min);
}

alert(randomInt(10,20));

let max = document.querySelector('input[name="max"]');