// Preview Selected Image
const inputImg = document.getElementById('add-media');
const img = document.getElementById('imagePreview');
let url;

function getImg(event) {
    const file = event.target.files[0]; // Get the first file
    url = window.URL.createObjectURL(file);
    img.src = url;
}

if (inputImg) {
    inputImg.addEventListener('change', getImg);
}

// Button interactions
const btnElList = document.querySelectorAll('.btn');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        // Remove 'special' class from any button that has it
        document.querySelector('.special')?.classList.remove('special');
        // Add 'special' class to the clicked button
        btnEl.classList.add('special');
    });
});

// Display Caption and Update Media Source
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const caption = document.getElementById('input-caption').value;
            document.querySelector('#dynamic-caption').textContent = caption;
            if(url.length > 0)
            document.getElementById('media').src = url; // Update media source
        });
    });
});



// Post Content
document.getElementById('post-button').addEventListener('click', () => {
    const postType = document.getElementById('post-type').value;
    const scheduledTime = document.getElementById('schedule-time').value;

    if (postType === 'now') {
        alert('Content successfully posted');
        window.location='post.html';
    } else {
        if (scheduledTime === "") {
            alert('Please select the desired date and time');
        } else {
            alert('Post is scheduled for: ' + scheduledTime);
        }
    }
});
