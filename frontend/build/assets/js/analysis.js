function startCounter(elementId, targetValue, duration) {
    const counterElement = document.getElementById(elementId);
    const increment = targetValue / (duration / 1000); // Calculate the increment per millisecond

    let currentValue = 0;

    const updateCounter = () => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue; // Ensure the final value is exactly the target value
            clearInterval(intervalId); // Stop the counter
        }
        counterElement.textContent = Math.round(currentValue).toLocaleString(); // Update the displayed value
    };

    // Update the counter at regular intervals to achieve the animation effect
    const intervalId = setInterval(updateCounter, 1);
}

function createChart(canvasId, chartType, dataValues, colors) {
    const xValues = Array.from({ length: dataValues[0].length }, (_, i) => i + 1);
    
    new Chart(canvasId, {
        type: chartType,
        data: {
            labels: xValues,
            datasets: dataValues.map((data, index) => ({
                label: ['Instagram', 'Facebook', 'TikTok'][index],
                data: data,
                borderColor: colors[index],
                backgroundColor: colors[index],
                fill: false
            }))
        },
        options: {
            legend: { display: true }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {

    // Set target values for each counter
    const likesTarget = 1200202000;
    const sharesTarget = 200202000;
    const commentsTarget = 450202000;
    const ctrTarget = 60202000;

    // Define the animation duration (in milliseconds)
    const animationDuration = 150000; // 150 seconds

    // Start counters
    startCounter("likesCounter", likesTarget, animationDuration);
    startCounter("sharesCounter", sharesTarget, animationDuration);
    startCounter("commentsCounter", commentsTarget, animationDuration);
    startCounter("ctrCounter", ctrTarget, animationDuration);

    createChart("Chart1", "bar", [
        [320, 280, 180, 290, 460, 490, 310, 410, 140, 300, 150], // Instagram
        [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // Facebook
        [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478] // TikTok
    ], ["#B98DC7", "lightgreen", "#A68AE6"]);

    createChart("Chart2", "line", [
        [320, 280, 180, 290, 460, 490, 310, 410, 140, 300, 150], // Instagram
        [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // Facebook
        [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478] // TikTok
    ], ["#B98DC7", "lightgreen", "#A68AE6"]);
});

document.getElementById("sync").addEventListener("click", function() {
    alert("Social media data synced!");
});

document.getElementById("report").addEventListener("click", function() {
    // Confirm download with the user
    const confirmed = confirm("Do you want to generate and download the full report?");
    if (confirmed) {
        // Here you would trigger the download process
        // For demonstration purposes, let's assume the report is downloaded instantly
        // Replace this with actual download logic
        alert("Report downloaded successfully!");
    }
});