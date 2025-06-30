// Add this at the top of chart-utils.js
import { supplyChainData } from './firebase-config.js';
function createPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: supplyChainData.performance.labels,
            datasets: [
                {
                    label: 'Efficiency %',
                    data: supplyChainData.performance.efficiency,
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Cost (RM)',
                    data: supplyChainData.performance.cost,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Satisfaction %',
                    data: supplyChainData.performance.satisfaction,
                    borderColor: '#00ff7f',
                    backgroundColor: 'rgba(0, 255, 127, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#ffffff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    ticks: { color: '#ffffff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}