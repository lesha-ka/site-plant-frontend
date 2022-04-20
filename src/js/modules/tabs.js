export const getTabs = () => {
    if(document.querySelector('.js-tabMenu')) {
        let tabs = document.querySelectorAll('.js-tabItem');
        tabs.forEach(function(elem) {
            let tabItem = elem;
            function showContent() {
                let tabId = tabItem.id;
                let tabCollections = document.querySelectorAll(`[data-tab`);
                let tabContent = document.querySelector(`[data-tab="${tabId}"]`);
                tabCollections.forEach(function(elem) {
                    elem.classList.remove('is-show');
                })
                tabContent.classList.toggle('is-show');
            }
            elem.addEventListener("click", showContent);
        })
    }
}