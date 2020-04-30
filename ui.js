function ui_init(window, document) {

    var layout     = document.getElementById('layout'),
        menu       = document.getElementById('menu'),
        menuLink   = document.getElementById('menuLink'),
        content    = document.getElementById('content');
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
        if (element.className !== null) {
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
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    function hljs_force_cpp() {
        let code_items = document.getElementsByTagName("code");
        for (let i = 0; i < code_items.length; i++) {
            // showdown allows ~~~python
            if (code_items[i].className.indexOf('lang-') === -1 && 
                code_items[i].className.indexOf('language-') === -1) {
                addClass(code_items[i], "lang-cpp"); // default language is C
            } else {
 //             console.log("code[" + i + "]=" + code_items[i].className);
            }
        }
    }
 
    menuLink.onclick = function (e) {
        e.stopPropagation(); // stop dispatching to parents
        e.preventDefault();  // do not do default action
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            e.stopPropagation(); // stop dispatching to parents
            e.preventDefault();  // do not do default action
            toggleAll(e);
        }
    };


    for (i = 0; i < menu_items.length; i++) {
        menu_items[i].onclick = function(e) {
            for (i = 0; i < menu_items.length; i++) { 
                removeClass(menu_items[i], "pure-menu-selected"); 
            }    
            toggleClass(this, "pure-menu-selected");
            toggleAll(e);
            document.scrollIntoView(this);
        };
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 1);
    }
    
    window.scrollTo(0,1);
    layout.scrollIntoView(true);
    hljs_force_cpp();
    hljs.initHighlighting();

    var opacity = 100;
    var x = 60;
    var click_here = document.getElementById("click_here");

    var move_click = function() {
        x -= 1;
        opacity -= 4;
        if (click_here !== null) {
            click_here.style.position = "absolute";
            click_here.style.top  = 0 + "px";
            click_here.style.left = x + "px";
//          console.log("click_here.style.opacity=" + click_here.style.opacity);
            click_here.style.opacity = opacity + "%";
            if (x > 40) { 
//              console.log("x=" + x);
                window.setTimeout(move_click, 50) 
            } else { 
                click_here.parentNode.removeChild(click_here); 
            }
        }    
    };

    window.setTimeout(move_click, 50);

};

(function (window, document) {

    let converter = new showdown.Converter();

    function add_md(i, text) {
        document.getElementById("page" + i + ".content").insertAdjacentHTML('beforeend', converter.makeHtml(text));
    }

    function add_label(i, text) {
        let label = text;
        let strings = text.split("|");
        if (strings.length === 2) {
            label = strings[0];
            text = strings[1];
        }
        let mi = '<li class="pure-menu-item"><a href="#page' + i + 
                 '" class="pure-menu-link">' + label + '</a></li>';
        let contact = document.getElementById("contact");
        contact.insertAdjacentHTML('beforebegin', mi);
        let page = '<div id="page' + i + '"><div id="page' + i + 
                    '.header" class="header"></div><div id="page' + i + 
                    '.content" class="content"></div></div>';
        let content = document.getElementById("content");
        content.insertAdjacentHTML('beforeend', page);
        let header = document.getElementById("page" + i + ".header");
        header.insertAdjacentHTML('beforeend', "<h1>" + text + "</h1>");
    }

    function loaded(req, i, ext, text) {
        if (req.readyState === XMLHttpRequest.DONE && 
           (req.status === 0 || (req.status >= 200 && req.status < 400))) {
            if (text === "") {
                // nothing - done
            } else if (ext === "txt") {
                add_label(i, text);
                load_page(i, "md");
                return;
            } else if (ext === "md") {
                add_md(i, text);
                load_page(i + 1, "txt");
                return;
            } else {
                console.log("invalid ext " + ext);
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

