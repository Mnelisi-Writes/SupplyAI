import { db } from './firebase-config.js';
// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
   
    setTimeout(simulateRealTimeUpdates, 5000);
    
    // Navigation functionality
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});