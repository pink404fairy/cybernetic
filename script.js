// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: Unobserve the element after revealing if animation should only happen once
            // observer.unobserve(entry.target);
        }
        // Optional: Remove 'revealed' class if element goes out of view
        // else {
        //     entry.target.classList.remove('revealed');
        // }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all elements with the class 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
    // Set a staggered delay for grid items
    if (element.classList.contains('solution-item') || element.classList.contains('feature-item') || element.classList.contains('step-item') || element.classList.contains('testimonial-item')) {
        element.style.setProperty('--animation-delay', `${index * 0.1}s`); // Adjust delay as needed for these items
    } else if (element.classList.contains('audience-item')) {
         element.style.setProperty('--animation-delay', `${index * 0.05}s`); // Shorter delay for audience items
    }
     else {
         element.style.setProperty('--animation-delay', `0s`); // No delay for other animated elements
     }
    observer.observe(element);
}); 