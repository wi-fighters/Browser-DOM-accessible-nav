(() => {
    // 1. Target the elements that we need to listen to
    const openButton = document.querySelector('#open-button');

   
    // 2. Write the callback
    const openMenu = function() {
        const mainMenu = document.querySelector('#main-menu');
        mainMenu.classList.toggle('expanded');
    };

    // 3. Attach the event listener
    openButton.addEventListener('click', openMenu, false);

})();