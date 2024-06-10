// Function to show the result when the search button is clicked
function showResult() {
    var searchBar = document.getElementById("search-bar");
    var searchText = searchBar.value.trim();

    if (searchText.startsWith("@")) {
        var username = searchText.substring(1); // Remove the "@" symbol
        var usernameElements = document.querySelectorAll(".username p");

        // Update the username in all post elements
        usernameElements.forEach(function(element) {
            element.textContent = username;
        });
    } else {
        // Your existing logic for other search cases
    }

    var blankContainer = document.getElementById("blankContainer");

    if(searchText === ""){
        alert("Search field cannot be empty");
        blankContainer.style.display = "none";    
    } else if((searchText !== "")&&(!searchText.startsWith("@") && !searchText.startsWith("#"))) {
        alert("Search query must start with '@' or '#'!");
        blankContainer.style.display = "none";
    } else if ((blankContainer.style.display === "none")&&(searchText !== "")) {
        blankContainer.style.display = "grid";
    } else {
        blankContainer.style.display = "grid";
    }
}


// Function to toggle the visibility of the sort filter every time the sort button is clicked
function toggleSortFilter() {
    var x = document.getElementById("sortFilter");
    var button = document.querySelector(".sort-button img"); // Select the image inside the button
    if (x.style.display === "none") {
        x.style.display = "block";
        button.src = "images/up.svg"; // Change the image source to the up arrow
    } else {
        x.style.display = "none";
        button.src = "images/down.svg"; // Change the image source to the down arrow
    }
}


function resetFilter() {
    document.getElementById("sortby").selectedIndex = 0; // Set the selected index to the default option ("likes")
    document.getElementById("onlyshows").selectedIndex = 0; // Set the selected index to the default option ("all")
    document.getElementById("dateposted").selectedIndex = 0; // Set the selected index to the default option ("all")
}

// Function to handle the click event of the "view" button
function handleViewButtonClick() {
    console.log("Button clicked!"); 
    if (selectedRadio) {
        console.log(selectedRadio.value);
        // Continue with your logic here...
    } else {
        console.log("No radio button is checked!");
        // Handle the case where no radio button is checked
    }
    // Get the selected radio button
    var selectedRadio = document.querySelector('input[name="radio"]:checked');
    
    // Check if Instagram radio button is selected
    if (selectedRadio.value === "Instagram") {
        // Display a confirmation message for Instagram
        var confirmMsg = confirm("Open on Instagram?");
        if (confirmMsg) {
            // If user confirms, open Instagram (replace with actual logic)
            window.open("https://instagram.com", "_blank");
        }
    } else if (selectedRadio.value === "Tiktok") {
        // Display a confirmation message for Tiktok
        var confirmMsg = confirm("Open on Tiktok?");
        if (confirmMsg) {
            // If user confirms, open Tiktok (replace with actual logic)
            window.open("https://tiktok.com", "_blank");
        }
    } else if (selectedRadio.value === "Facebook") {
        // Display a confirmation message for Facebook
        var confirmMsg = confirm("Open on Facebook?");
        if (confirmMsg) {
            // If user confirms, open Facebook (replace with actual logic)
            window.open("https://facebook.com", "_blank");
        }
    }
}

// Function to format numbers with abbreviations for billions, millions, and thousands
function nFormatter(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num;
}

// Get all the span elements containing numbers
var numberSpans = document.querySelectorAll('.post-details .likes span, .post-details .views span, .post-details .comments span');

// Loop through each span element and format the number using nFormatter
numberSpans.forEach(function(span) {
    // Get the number from the span's text content
    var num = parseInt(span.textContent);
    
    // Format the number using nFormatter
    var formattedNum = nFormatter(num);
    
    // Update the text content of the span with the formatted number
    span.textContent = formattedNum;
});



// Get all the view button elements
var viewButtons = document.querySelectorAll(".view-button");

// Loop through each view button element and add event listener
viewButtons.forEach(function(button) {
    button.addEventListener("click", handleViewButtonClick);
});

// Get the reset button element
var resetButton = document.getElementById("reset-button");

// Add event listener to the reset button
resetButton.addEventListener("click", resetFilter);


// Get the search button element
var searchButton = document.getElementById("searchbtn");

// Get the sort button element
var sortButton = document.getElementById("sortbtn");

var submitButton = document.getElementById("submit-button");

// Add event listener to the search button
searchButton.addEventListener("click", showResult);

// Add event listener to the sort button
sortButton.addEventListener("click", toggleSortFilter);


// Function to extract numerical value from formatted strings like "2.5M", "400K", etc.
function extractNumericValue(str) {
    console.log("Input string:", str); // Log the input string

    // Extract digits and decimals
    var numericPart = str.replace(/[^\d.]/g, '');
    console.log("Numeric part:", numericPart); // Log the extracted numeric part

    var magnitude = 1;
    if (str.endsWith('M')) {
        magnitude = 1000000;
    } else if (str.endsWith('k')) {
        magnitude = 1000;
    }
    console.log("Magnitude:", magnitude); // Log the magnitude

    var result = parseFloat(numericPart) * magnitude;
    console.log("Result:", result); // Log the final result

    return result;
}


// Function to sort posts by views from high to low
function sortByViews() {
    var container = document.getElementById("blankContainer");
    var posts = container.querySelectorAll(".post");

    var sortedPosts = Array.from(posts).sort(function(a, b) {
        var viewsA = extractNumericValue(a.querySelector(".views span").textContent);
        var viewsB = extractNumericValue(b.querySelector(".views span").textContent);
        return viewsB - viewsA; // Sort in descending order
    });

    // Remove existing posts from the container
    container.innerHTML = "";

    // Append sorted posts to the container
    sortedPosts.forEach(function(post) {
        container.appendChild(post);
    });
}

// Function to sort posts by likes from high to low
function sortByLikes() {
    var container = document.getElementById("blankContainer");
    var posts = container.querySelectorAll(".post");

    var sortedPosts = Array.from(posts).sort(function(a, b) {
        var likesA = extractNumericValue(a.querySelector(".likes span").textContent);
        var likesB = extractNumericValue(b.querySelector(".likes span").textContent);
        return likesB - likesA; // Sort in descending order
    });

    // Remove existing posts from the container
    container.innerHTML = "";

    // Append sorted posts to the container
    sortedPosts.forEach(function(post) {
        container.appendChild(post);
    });
}

// Function to sort posts by comments from high to low
function sortByComments() {
    var container = document.getElementById("blankContainer");
    var posts = container.querySelectorAll(".post");

    var sortedPosts = Array.from(posts).sort(function(a, b) {
        var commentsA = parseInt(a.querySelector(".comments span").textContent);
        var commentsB = parseInt(b.querySelector(".comments span").textContent);
        return commentsB - commentsA; // Sort in descending order
    });

    // Remove existing posts from the container
    container.innerHTML = "";

    // Append sorted posts to the container
    sortedPosts.forEach(function(post) {
        container.appendChild(post);
    });
}

// Function to handle the click event of the "submit filter" button
function showSubmitResult() {
    alert("filter applied!");
    // Hide the sort filter
    var x = document.getElementById("sortFilter");
    x.style.display = "block";

    // Add a delay of 500 milliseconds (adjust as needed)
    setTimeout(function() {
        var sortSelection = document.getElementById("sortby").value;
        if (sortSelection === "views") {
            sortByViews(); // Sort posts by views if selected
        } else if (sortSelection === "likes") {
            sortByLikes(); // Sort posts by likes if selected
        } else if (sortSelection === "comments") {
            sortByComments(); // Sort posts by comments if selected
        }

        var minDate, maxDate;
        // Get the minimum and maximum dates from the input fields
        if (document.getElementById("mindate").value !== "") {
            minDate = document.getElementById("mindate").value;
        } else {
            minDate = "2000-01-01";
        }
        if (document.getElementById("maxdate").value !== "") {
            maxDate = document.getElementById("maxdate").value;
        } else {
            maxDate = "2024-12-31";
        }

        console.log("min value:" + minDate);
        console.log("max value:" + maxDate);


        // Get all the posts
        var posts = document.querySelectorAll(".post");

        // Loop through each post and check if its date is within the specified range
        posts.forEach(function(post) {
            var dateElement = post.querySelector(".date span");
            var postDate = new Date(dateElement.textContent);

            // Parse the minimum and maximum dates from the input fields
            var minDateObj = new Date(minDate);
            var maxDateObj = new Date(maxDate);

            // Check if the post date is within the specified range
            if (postDate >= minDateObj && postDate <= maxDateObj) {
                // Show the post if it's within the range
                post.style.display = "block";
            } else {
                // Hide the post if it's outside the range
                post.style.display = "none";
            }
        });
    }, 500); // Delay of 500 milliseconds
}

// Add event listener to the submit button
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", showSubmitResult);