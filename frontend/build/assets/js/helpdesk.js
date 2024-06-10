document.querySelector("#ticket-btn").addEventListener("click",function(){
    document.querySelector(".wrapper").classList.add("active");
});
document.querySelector(".wrapper .close-btn").addEventListener("click",function(){
    document.querySelector(".wrapper").classList.remove("active");
});

// Reset the form
document.getElementById('wrapper').reset();

function showMessage() {
    alert("Ticket Successfully Activated!");
}