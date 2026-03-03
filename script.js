// script.js

// Function to render the tracking timeline
function renderTrackingTimeline(events) {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = '';

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        eventElement.innerText = `${event.timestamp}: ${event.description}`;
        timelineContainer.appendChild(eventElement);
    });
}

// Function to display shipment events
function displayShipmentEvents() {
    const shipmentEvents = [
        {timestamp: '2026-03-01 10:00:00', description: 'Shipped from warehouse.'},
        {timestamp: '2026-03-02 15:00:00', description: 'In transit to destination.'},
        {timestamp: '2026-03-03 08:00:00', description: 'Out for delivery.'},
    ];
    renderTrackingTimeline(shipmentEvents);
}

// Function to initialize interactive features
function initInteractiveFeatures() {
    const refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', () => { 
        displayShipmentEvents();
    });
}

// Initialize the application
window.onload = function() {
    displayShipmentEvents();
    initInteractiveFeatures();
};