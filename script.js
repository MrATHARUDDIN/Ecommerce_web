document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.pro');
    const itemsPerPage = 9;
    const pageButtons = document.querySelectorAll('.page-btn:not(.arrow-btn)');
    const nextButton = document.getElementById('next');
    
    products.forEach(product => {
        product.style.display = 'none';
    });
    
    // Show first page
    showPage(1);
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const pageNumber = parseInt(this.textContent);
            showPage(pageNumber);
            setActiveButton(this);
        });
    });
    
    // Next button functionality
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        const activeButton = document.querySelector('.page-btn.active');
        const currentPage = parseInt(activeButton.textContent);
        const nextPage = currentPage + 1;
        
        if (nextPage <= pageButtons.length) {
            showPage(nextPage);
            setActiveButton(pageButtons[nextPage - 1]);
        }
    });
    
    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        products.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    function setActiveButton(activeButton) {
        document.querySelectorAll('.page-btn').forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});