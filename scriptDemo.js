let events = JSON.parse(localStorage.getItem('events')) || [];

// Function to render events
function renderEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.textContent = event;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deleteEvent(index);
        };
        li.appendChild(deleteButton);
        eventList.appendChild(li);
    });
}

// Function to add event
function addEvent() {
    const eventInput = document.getElementById('eventInput');
    const eventText = eventInput.value.trim();
    if (eventText !== '') {
        events.push(eventText);
        localStorage.setItem('events', JSON.stringify(events));
        eventInput.value = ' ';
        renderEvents();
    }
}

// Function to delete event
function deleteEvent(index) {
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    renderEvents();
}

// Initial render
renderEvents();