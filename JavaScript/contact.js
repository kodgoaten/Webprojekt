const thanks = document.getElementById('contactBox')

thanks.addEventListener('submit', function(event) {
    event.preventDefault();
    const paragraph = document.getElementById('animatedParagraph');
    paragraph.classList.add('show');
    
    const form = event.target;
    form.reset();

    setTimeout(() => {
        paragraph.classList.remove('show');
    }, 5000);  
}); //Den här funktionen används för att visa det gömd p med id animatedParagraph genom att även ge den klassen 