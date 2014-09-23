(function(){

    function linkClicked(e) {
        console.log("something clicked: " + e);
        e = window.e || e;

        if (e.target.tagName !== 'A')
            return;

        console.log("link clicked: " + e);
        e.preventDefault();
        e.stopPropagation();
    }

    document.addEventListener('click', linkClicked, true);
})();
