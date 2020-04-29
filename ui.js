function ui_init(window, document) {

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

    window.scrollTo(0,1);
    layout.scrollIntoView(true);
    
};

(function (window, document) {

    function loaded(req, i, ext, text) {
        if (req.readyState === XMLHttpRequest.DONE && 
           (req.status == 0 || (req.status >= 200 && req.status < 400))) {
            if (text == "") {
                // nothing - done
            } else if (ext == "md") {
                let converter = new showdown.Converter({optionKey: 'value'});
                let html = converter.makeHtml(text);
                let div  = document.getElementById("page" + i + ".content");
                if (div != null) {
                    console.log("page" + i + ".content");
                    /*
                    'beforebegin': Before the element itself.
                    'afterbegin': Just inside the element, before its first child.
                    'beforeend': Just inside the element, after its last child.
                    'afterend': After the element itself.
                    */
                    div.insertAdjacentHTML('beforeend', html);
                    load_page(i + 1, "txt");
                    return;
                }
            } else {
                let mi = '<li class="pure-menu-item"><a href="#page' + i + 
                         '" class="pure-menu-link">' + text + '</a></li>';
                let contact = document.getElementById("contact");
                contact.insertAdjacentHTML('beforebegin', mi);
                let page = '<div id="page' + i + '"><div id="page' + i + 
                            '.header" class="header"></div><div id="page' + i + 
                            '.content" class="content"></div></div>';
                let content = document.getElementById("content");
                content.insertAdjacentHTML('beforeend', page);
                let header = document.getElementById("page" + i + ".header");
                if (header != null) {
                    console.log("page" + i + ".header");
                    header.insertAdjacentHTML('beforeend', "<h1>" + text + "</h1>");
                    load_page(i, "md");
                    return;
                }
            }
        }
        ui_init(this, this.document);
    }

    function load_page(i, ext) {
        let req = new XMLHttpRequest();
        req.onerror = function() { };
        req.onloadend = function() { 
            loaded(req, i, ext, req.responseText);
        };
        try { 
            req.open("GET", "page" + i + "." + ext);
            req.send();
        } catch (e) { /* ignore 404 */ }
    }

    load_page(1, "txt");
    
}(this, this.document));
