(() => {
    // 1. Target the elements that we need to listen to
    const openButton = document.querySelector('#open-button');

   
    // 2. Write the callback
    const openMenu = function() {
        // grab the ul
        const mainMenu = document.querySelector('#main-menu');

        
        if () { // ul is collapsed
            //  expand it:

            // change it visually
            // change the aria-expanded attribute
        } else {
            // collapse it:

            // change it visually
            // change the aria-expanded attribute
        }


        // update its aria-expanded attribute
        mainMenu.setAttribute('aria-expanded', 'true');
    };

    // 3. Attach the event listener
    openButton.addEventListener('click', openMenu, false);

})();