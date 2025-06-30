function runOptimization() {
    const button = document.querySelector('.optimization-btn');
    const spinner = document.getElementById('loadingSpinner');
    
    button.disabled = true;
    spinner.style.display = 'inline-block';
    button.innerHTML = '<span class="loading-spinner" style="display: inline-block;"></span> Optimizing...';
    
    setTimeout(() => {
        button.disabled = false;
        spinner.style.display = 'none';
        button.innerHTML = 'Run AI Optimization';
        
        const recommendations = document.getElementById('recommendations');
        const newRec = document.createElement('div');
        newRec.className = 'recommendation-item';
        newRec.innerHTML = '<strong>New Optimization:</strong> AI suggests consolidating 3 shipments to reduce costs by $47K';
        newRec.style.opacity = '0';
        newRec.style.transform = 'translateY(20px)';
        recommendations.insertBefore(newRec, recommendations.firstChild);
        
        setTimeout(() => {
            newRec.style.transition = 'all 0.5s ease';
            newRec.style.opacity = '1';
            newRec.style.transform = 'translateY(0)';
        }, 100);
        
        animateMetrics();
    }, 3000);
}