(() => {
    // 1. Target the elements that we need to listen to
    const openButton = document.querySelector('#open-button');

   
    // 2. Write the callback
    const openMenu = function() {

        // if ul is expanded
        console.log(this.getAttribute('aria-expanded'));
        console.log(typeof this.getAttribute('aria-expanded'));
        
        // TODO: Maybe this condition could be easier to read
        // we're testing three possible states of aria-expanded
        if (this.getAttribute('aria-expanded') && this.getAttribute('aria-expanded') !== 'false') {
            console.log("The program thinks the UL is expanded!");
            //  expand it:

            // change it visually by changing the aria-expanded attribute
            this.setAttribute('aria-expanded', 'false');
        } else {
            console.log("The program thinks the UL is collapsed!");
            // collapse it:

            // change it visually by changing the aria-expanded attribute
            this.setAttribute('aria-expanded', 'true');
        }
    };

    // 3. Attach the event listener
    openButton.addEventListener('click', openMenu, false);


})();