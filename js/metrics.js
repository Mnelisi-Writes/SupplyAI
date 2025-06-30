function animateMetrics() {
    const metrics = [
        { element: 'costSavings', target: 2.4, suffix: 'M', prefix: 'R' },
        { element: 'efficiency', target: 94.7, suffix: '%' },
        { element: 'inventory', target: 87.3, suffix: '%' }
    ];

    metrics.forEach(metric => {
        const element = document.getElementById(metric.element);
        let current = 0;
        const increment = metric.target / 50;
        
        const animation = setInterval(() => {
            current += increment;
            if (current >= metric.target) {
                current = metric.target;
                clearInterval(animation);
            }
            
            const displayValue = metric.element === 'costSavings' 
                ? `${metric.prefix}${current.toFixed(1)}${metric.suffix}`
                : `${current.toFixed(1)}${metric.suffix}`;
            
            element.textContent = displayValue;
        }, 50);
    });
}