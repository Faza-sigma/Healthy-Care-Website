document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const formData = new FormData(event.target);
    let completedActivities = [];

    for (let [key, value] of formData.entries()) {
        if (value === 'on') {
            completedActivities.push(key);
        }
    }

    if (completedActivities.length > 0) {
        alert('Completed activities: ' + completedActivities.join(', '));
    } else {
        alert('No activities completed yet.');
    }
});
