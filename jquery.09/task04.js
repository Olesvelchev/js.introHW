const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
        if (checkedCheckboxes.length >= 3) {
            checkboxes.forEach(cb => {
                cb.disabled = true;
            });
        }
    });
});
