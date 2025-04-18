// ==UserScript==
// @name         spankbang.js
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Set cookie values on SpankBang
// @author       Klarus
// @match        *://*.spankbang.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const setCookie = (name, value, days, domain = "") => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }

        const domainPart = domain ? `; domain=${domain}` : "";
        document.cookie = `${name}=${value}${expires}; path=/${domainPart}`;
    };

    setCookie("coc", "US", 365, ".spankbang.com");
    setCookie("coe", "en", 365, ".spankbang.com");

    setCookie("age_pass", "1", 365);
    setCookie("age_pass", "1", 365, ".spankbang.com");
})();
