(() => {
    // 1. Target the elements that we need to listen to
    const openButton = document.querySelector('#open-button');

   
    // 2. Write the callback
    const openMenu = function() {

        // if ul is expanded
        // I know it looks weird, but we need to test for a string that's equal to true
        // aria-expanded will either have 'true' or 'false' as string values
        if (this.getAttribute('aria-expanded') === 'true') {

            //  expand it:
            // change it visually by changing the aria-expanded attribute
            this.setAttribute('aria-expanded', 'false');

        } else {
            // collapse it:
            // change it visually by changing the aria-expanded attribute
            this.setAttribute('aria-expanded', 'true');
        }
    };

    // 3. Attach the event listener
    openButton.addEventListener('click', openMenu, false);


})();