/**
 * Lazy Load Background Images
 */

document.addEventListener("DOMContentLoaded", function() {
    let lazyloadImages;  

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy-background");
    
        let imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let image = entry.target;
                image.classList.remove("lazy-background");
                image.style.backgroundImage = "url('"+  image.dataset.background + "')";
                imageObserver.unobserve(image);
            }
            });
        });
    
        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } 
})