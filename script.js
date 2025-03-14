$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});


  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let loader = document.querySelector(".loader-wrapper");
        let content = document.querySelector(".content");

        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease-out";

        window.isMobile = function(){
            if(window.matchMedia("(any-hover:none)").matches) {
              return true;
            } else {
              return false;
            }
        };
        
        if (isMobile()) {
            window.location.href = "mobile/index.html"; 
        }

        setTimeout(() => {
            loader.style.display = "none";
            content.style.opacity = "1"; 
            content.style.transform = "scale(1)"; 

            document.body.style.overflowY = "auto"; 
            document.documentElement.style.overflowY = "auto";
            document.documentElement.style.overflowX = "hidden"; 
        }, 500); 
    }, 1000); 
});



document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.height = "40vh"; 
        const info = card.querySelector(".project-info");
        info.style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
        card.style.height = "10vh"; 
        const info = card.querySelector(".project-info");
        info.style.display = "none"; 
    });
});
