document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').innerText = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Optionally, you can send the time to the server and store it in MongoDB
    function sendTimeToServer() {
        const now = new Date();
        const timeString = now.toISOString();
        
        // Use fetch API to send data to the server
        fetch('/api/storeTime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ time: timeString }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    // Call the function to send time to the server
    sendTimeToServer();
});
