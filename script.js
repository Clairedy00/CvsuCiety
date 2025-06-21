// time effect
function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const seconds = Math.floor((now - past) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
    }
    return Math.floor(seconds) + " second" + (seconds === 1 ? "" : "s") + " ago";
}


function updateAllTimestamps() {
    const timestamps = document.querySelectorAll('.timestamp');
    
    timestamps.forEach(span => {
        const timestamp = span.getAttribute('data-timestamp');
        if (timestamp) {
            span.textContent = timeAgo(timestamp);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    updateAllTimestamps();
    
  
    setInterval(updateAllTimestamps, 60000);
});


// Hover effect sa button
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(button => {
    button.style.backgroundColor = '#f0f0f0';
    button.style.border = 'none';
    button.style.padding = '10px';
    button.style.cursor = 'pointer';
    button.style.width = '100%';
    button.style.marginBottom = '10px';

    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#007bff';
      button.style.color = '#fff';
      button.style.transform = 'scale(1.03)';
      button.style.transition = 'all 0.2s ease';
    });

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#f0f0f0';
      button.style.color = '#000';
      button.style.transform = 'scale(1)';
    });
  });
});
