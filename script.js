const scooterData = {}; // Object to store scooter information

function trackScooter() {
    const scooterId = document.getElementById('scooter-id').value.trim();
    if (scooterId && scooterData[scooterId]) {
        document.getElementById('current-scooter-id').textContent = scooterId;
        document.getElementById('current-stage').textContent = scooterData[scooterId];
    } else {
        document.getElementById('current-scooter-id').textContent = scooterId;
        document.getElementById('current-stage').textContent = 'Scooter ID not found';
    }
}

function updateStage(stage) {
    const scooterId = document.getElementById('scooter-id').value.trim();
    if (scooterId) {
        if (!scooterData[scooterId]) {
            scooterData[scooterId] = 'Manufacturer'; // Default to Manufacturer if new scooter
        }
        scooterData[scooterId] = stage;
        trackScooter(); // Update status display
    } else {
        alert('Please enter a valid scooter ID');
    }
}

// Example: Adding some initial scooter data for testing
scooterData['SCOO123'] = 'Manufacturer';
scooterData['SCOO124'] = 'BIKESETU Yard';