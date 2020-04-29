(function (window, document) {

    var layout     = document.getElementById('layout'),
        menu       = document.getElementById('menu'),
        menuLink   = document.getElementById('menuLink'),
        content    = document.getElementById('main');
        menu_items = document.getElementsByClassName('pure-menu-item');

    function removeClass(element, className) {
        var classes = element.className.split(/\s+/);
        for (let i = 0; i < classes.length; i++) {
            if (classes[i] === className) { classes.splice(i, 1); break; }
        }
        element.className = classes.join(' ');
    }

    function addClass(element, className) {
        var classes = element.className.split(/\s+/);
        var found = false;
        for (let i = 0; i < classes.length && !found; i++) { found = classes[i] === className; }
        if (!found) { classes.push(className); element.className = classes.join(' '); }
    }
    
    function toggleClass(element, className) {
        if (element.className != null) {
            var classes = element.className.split(/\s+/);
            var n = classes.length;
            for (let i = 0; i < n; i++) {
                if (classes[i] === className) { classes.splice(i, 1); break; }
            }
            if (classes.length === n) { classes.push(className); } // className was not found
            element.className = classes.join(' ');
        }
    }

    function toggleAll(e) {
        var active = 'active';
        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
        toggleClass(this, "selected");
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    for (i = 0; i < menu_items.length; i++) {
        menu_items[i].onclick = function(e) {
            for (i = 0; i < menu_items.length; i++) { removeClass(menu_items[i], "pure-menu-selected"); }    
            toggleClass(this, "pure-menu-selected");
            removeClass(layout, "active");
        };
    }
    
}(this, this.document));
