$(document).ready(function(){var e=document.getElementById("sound-theme"),t=document.getElementById("sound-jedi"),n=document.getElementById("sound-dart"),a=10;setTimeout(()=>{document.getElementsByClassName("name")[0].classList.add("show-element"),setTimeout(()=>{document.getElementById("email-form").classList.add("show-element")},700)},19e3);var l=setInterval(()=>{a<420?(document.getElementsByTagName("body")[0].style.backgroundPositionY=a+"px",e.volume=1-.0017*a):clearInterval(l),a++},50);$("#email-form").on("submit",function(e){e.preventDefault(),function(){var e=$(".mail-input").val();if(!e||!e.match(/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/))$(".mail-input").addClass("mail-input-error"),$(".input-error-text").text("Enter mail your here example like: example@gmail.com")}()}),$(".mail-input").focus(function(){$(".mail-input").removeClass("mail-input-error"),$(".input-error-text").text("")}),$(".coins-label-1").click(function(){t.play()}),$(".coins-label-2").click(function(){n.play()})});