document.addEventListener('DOMContentLoaded', function() {
    const toggleTitles = document.querySelectorAll('.toggle-title');

    toggleTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('visible');
        });
    });
});
