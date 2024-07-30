document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const hideBtn = document.getElementById('hideBtn');
    const sidePanel = document.getElementById('sidePanel');
    const runBtn = document.getElementById('runBtn');

    searchBtn.addEventListener('click', function () {
        sidePanel.classList.add('open');
    });
    hideBtn.addEventListener('click', function () {
        sidePanel.classList.remove('open');
    });
    
    runBtn.addEventListener('click' , function () {
        sidePanel2.classList.add('open');

    });
    hideBtn2.addEventListener('click', function () {
        sidePanel2.classList.remove('open');
    });
    

});
