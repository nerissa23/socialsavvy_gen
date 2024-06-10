
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
    post.style.display = 'none';
});
posts[7].style.display = 'flex';

var count = 7;
const btnElList = document.querySelectorAll('.cal-btn');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {    
            // Get a random index based on the number of posts
            
           // const randomIndex = Math.floor(Math.random() * posts.length);
            // Show the randomly selected post
            //if(posts[randomIndex].style.display == 'none')
            posts[--count].style.display = 'flex';
           // else{
            //    posts[randomIndex].style.display = 'none';
                
           // }
    });
});
