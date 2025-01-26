const menuButton = document.getElementById('menuButton');
const sidePanel = document.getElementById('sidePanel');
const closePanel = document.getElementById('closePanel');

menuButton.addEventListener('click', e => {
    sidePanel.style.transform = 'translateX(0)';
    e.preventDefault();
    e.stopPropagation();
});

closePanel.addEventListener('click', () => {
    sidePanel.style.transform = 'translateX(-100%)';
});


document.addEventListener('click', e => {
    if (!sidePanel.contains(e.target) && e.target !== menuButton) {
        sidePanel.style.transform = 'translateX(-100%)';
    }
});


const ocat = document.getElementById('ocat');
const ote = document.getElementById('otherCatalogs');

ocat.addEventListener('click', () => {

    if (ote.style.display === 'block') {
        ote.style.display = 'none';  

    } else {
        ote.style.display = 'block';  
    }
});