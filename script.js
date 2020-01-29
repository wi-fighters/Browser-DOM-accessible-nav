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

            console.log('UL is expanded!');
            console.log('Before:');
            console.log(this.getAttribute('aria-expanded'));
            console.log(typeof this.getAttribute('aria-expanded'));

            this.setAttribute('aria-expanded', 'false');

            console.log("...and now it's not!");
            console.log('After:');
            console.log(this.getAttribute('aria-expanded'));
            console.log(typeof this.getAttribute('aria-expanded'));


        } else {


            // collapse it:
            // change it visually by changing the aria-expanded attribute

            console.log('UL is not expanded!');
            console.log('Before:');
            console.log(this.getAttribute('aria-expanded'));
            console.log(typeof this.getAttribute('aria-expanded'));

            this.setAttribute('aria-expanded', 'true');

            console.log('...and now it is!');
            console.log('After:');
            console.log(this.getAttribute('aria-expanded'));
            console.log(typeof this.getAttribute('aria-expanded'));

        }
    };

    // 3. Attach the event listener
    openButton.addEventListener('click', openMenu, false);


})();