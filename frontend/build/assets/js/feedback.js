document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-feedback-btn');
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close');
    const starRating = document.getElementById('star-rating');
    const selectedRatingInput = document.getElementById('selected-rating');
    
    // Function to handle star rating selection
    function handleStarRating(rating) {
        const stars = starRating.querySelectorAll('.star');
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-rating')) <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
        selectedRatingInput.value = rating;
    }

    openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    starRating.addEventListener('click', function(event) {
        if (event.target.classList.contains('star')) {
            const rating = parseInt(event.target.getAttribute('data-rating'));
            handleStarRating(rating);
        }
    });

    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const rating = document.getElementById('selected-rating').value;
        const comment = document.getElementById('comment').value;
        
        console.log("Name: " + name);
        console.log("Rating: " + rating);
        console.log("Comment: " + comment);
        
        alert('Thank you for your feedback!');
        
        // Reset the form
        document.getElementById('feedback-form').reset();

        // Close the modal
        modal.style.display = 'none';
    });
});
