document.addEventListener("DOMContentLoaded", () => {
    // Slider
    const slider = tns({
        container: '.testimonial__slider',
        items: 1,
        slideBy: 'page',
        controls: true,
        nav: false
    });
    
    // Smooth scroll
    const links = document.querySelectorAll(".nav ul a"),
          linksFooter = document.querySelectorAll(".footer__nav ul a");

    function clickAdd(item) {
        for (const link of item) {
            link.addEventListener("click", clickHandler);
        }
    }

    clickAdd(links);
    clickAdd(linksFooter);
    
 
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("data-scroll");
        const offsetTop = document.querySelector(href).offsetTop;
    
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    };

    // Nav Toggle
    const toggleNav = document.querySelector(".nav-toggle"),
          nav = document.querySelector(".menu"),
          header = document.querySelector("header");

    toggleNav.addEventListener("click", function(e) {
        e.preventDefault();

        toggleNav.classList.toggle("nav-toggle-active");
        nav.classList.toggle("active");
        header.classList.toggle("active");
    });

    // Header Fixed
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");

        if (window.scrollY > 700) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });

    // Tabs
    const tabsBtn = document.querySelectorAll(".frequently__icon"),
          tabsItem = document.querySelectorAll(".frequently__tabs-item");

    tabsBtn.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentTab.classList.contains("active")) {
                tabsBtn.forEach(item => {
                    item.classList.remove("active");
                });
    
                tabsItem.forEach(item => {
                    item.classList.remove("active");
                });
    
                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            }
        });
    });

    document.querySelector(".frequently__icon").click();

    // Prices
    const pricesBtn = document.querySelectorAll(".prices__bottom-head__name"),
          pricesCards = document.querySelectorAll(".prices__bottom-card");

    pricesBtn.forEach(item => {
        item.addEventListener("click", () => {
            let currentPricesBtn = item;
            let cardId = currentPricesBtn.getAttribute("data-card");
            let currentCard = document.querySelector(cardId);

            pricesBtn.forEach(item => {
                item.classList.remove("active");
            });
            pricesCards.forEach(item => {
                item.classList.remove("active");
            });

            currentPricesBtn.classList.add("active");
            currentCard.classList.add("active");
        });
    });

    document.querySelector(".prices__bottom-head__name").click();
});