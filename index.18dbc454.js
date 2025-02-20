// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1SICI":[function(require,module,exports,__globalThis) {
"use strict";
//Hämta menyknapparna.
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
//Addera händelselyssnare till båda knapparna.
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
//Funktion för klick på menyknapparna. 
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu"); //Hämtar in menyn när den är utfälld.
    let style = window.getComputedStyle(navMenuEl); //Hämtar css för menyn. 
    //Kollar om navigering är synlig eller inte med display och ändrar därefter. 
    if (style.display === "none") navMenuEl.style.display = "block";
    else navMenuEl.style.display = "none";
}
//Händelselyssnare som ser till att desktopnivå syns direkt när fönstret är större än 655px.
window.addEventListener("resize", function() {
    let navMenuEl = document.getElementById("nav-menu");
    if (window.innerWidth > 655) navMenuEl.style.display = "block"; // Visa menyn för desktop.
    else navMenuEl.style.display = "none"; // Dölj menyn för mobil.
});
//Händelselyssnare för alla länkar i menyn för att se till att den försvinner vid klick.
document.querySelectorAll('#nav-menu a').forEach((link)=>{
    link.addEventListener('click', ()=>{
        // Kontrollera om skärmbredden är mindre än eller lika med 655px
        if (window.innerWidth <= 655) document.getElementById('nav-menu').style.display = 'none';
    });
});

},{}]},["1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
