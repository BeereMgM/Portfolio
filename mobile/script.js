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
    card.addEventListener("click", () => {
        const isExpanded = card.classList.contains("expanded");

        document.querySelectorAll(".project-card").forEach(c => {
            c.style.height = "10vh"; 
            c.classList.remove("expanded");
            c.querySelector(".project-info").style.display = "none";
        });

        if (!isExpanded) {
            card.style.height = "40vh"; 
            card.classList.add("expanded");
            card.querySelector(".project-info").style.display = "block";
        }
    });
});

document.querySelectorAll(".tooltip-container").forEach(container => {
    container.addEventListener("click", () => {
        const tooltip = container.querySelector(".tooltip-content");
        const isVisible = tooltip.classList.contains("visible");

        document.querySelectorAll(".tooltip-content").forEach(t => {
            t.classList.remove("visible");
        });

        if (!isVisible) {
            tooltip.classList.add("visible");
        }
    });

    document.addEventListener("click", (event) => {
        if (!container.contains(event.target)) {
            container.querySelector(".tooltip-content").classList.remove("visible");
        }
    }, true);
});
