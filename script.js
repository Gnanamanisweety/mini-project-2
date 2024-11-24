$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// pie-chart 

document.addEventListener("DOMContentLoaded", function () {
    const charts = document.querySelectorAll(".chart");

    charts.forEach((chart) => {
        const percentage = chart.getAttribute("data-percentage");
        const circle = chart.querySelector("circle:last-child");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set the stroke-dasharray to match the percentage
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    });
});


//pop-up message

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    // Show the popup message
    alert("Thank you! Your message has been sent successfully.");
    
    // Optional: Clear the form after showing the popup
    this.reset();
});