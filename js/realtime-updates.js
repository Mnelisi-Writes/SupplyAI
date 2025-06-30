import { populateDataTable } from './data-table.js';
import { supplyChainData } from './firebase-config.js';

function simulateRealTimeUpdates() {
    setInterval(() => {
        const efficiencyElement = document.getElementById('efficiency');
        const currentEfficiency = parseFloat(efficiencyElement.textContent);
        const newEfficiency = currentEfficiency + (Math.random() - 0.5) * 0.5;
        efficiencyElement.textContent = `${Math.max(85, Math.min(99, newEfficiency)).toFixed(1)}%`;
        
        supplyChainData.locations.forEach((location, index) => {
            location.inventory += (Math.random() - 0.5) * 5;
            location.inventory = Math.max(50, Math.min(100, location.inventory));
        });
        
        populateDataTable();
    }, 10000);
}

export { simulateRealTimeUpdates };