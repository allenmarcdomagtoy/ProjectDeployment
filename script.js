$(document).ready(function() {
    // Adding a message when the page is loaded
    console.log("Welcome to Speedy Wheels!");

    // Example functionality with jQuery
    $('nav a').on('click', function() {
        $('nav a').removeClass('active'); // Removing active class from all links
        $(this).addClass('active'); // Adding active class to clicked link
    });
});