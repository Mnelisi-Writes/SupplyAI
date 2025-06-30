function createSupplyMapVisualization() {
    const container = document.getElementById('supplyMapViz');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '300px';
    container.style.background = 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)';
    
    const locations = [
        { x: 20, y: 30, name: 'New York', size: 'large' },
        { x: 80, y: 40, name: 'Los Angeles', size: 'medium' },
        { x: 50, y: 25, name: 'Chicago', size: 'large' },
        { x: 65, y: 60, name: 'Atlanta', size: 'small' },
        { x: 15, y: 15, name: 'Seattle', size: 'medium' }
    ];

    locations.forEach((loc, index) => {
        const node = document.createElement('div');
        node.style.position = 'absolute';
        node.style.left = `${loc.x}%`;
        node.style.top = `${loc.y}%`;
        node.style.width = loc.size === 'large' ? '20px' : loc.size === 'medium' ? '15px' : '10px';
        node.style.height = node.style.width;
        node.style.background = '#00d4ff';
        node.style.borderRadius = '50%';
        node.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.6)';
        node.style.animation = `pulse 2s infinite ${index * 0.5}s`;
        node.title = loc.name;
        
        container.appendChild(node);
    });
}