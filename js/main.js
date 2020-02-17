//JS

window.addEventListener("load", run, false);

function run() {
  var themeIs = "off";
  var switchControl = document.querySelector(".theme-switch .slider");
  
  switchControl.addEventListener("click", toggleClass, false);
  switchControl.addEventListener("click", themeChange, false);
  
  function themeChange() {
    themeIs = themeIs == "off" ? "on" : "off";
    themeIs == "on" ? addCSS() : removeCSS();
  }
  
  function addCSS() {
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "css/dark-theme.css";
    css.type = "text/css";
    
    document.getElementsByTagName("head")[0].appendChild(css);
  }
  
  function removeCSS() {
    var head = document.getElementsByTagName("head")[0];
    head.removeChild(head.lastChild);
  }

  function toggleClass(evt) {    
    var elem = evt.currentTarget;
    var myClass = elem.getAttribute("data-toggle");
    
    if (elem.classList) {
      elem.classList.toggle(myClass);
    }
    else {
      var arr = elem.className.split(" ");
      var i = arr.indexOf(myClass);
      
      if (i >= 0) {
        arr.splice(i, 1);
      }
      else {
        arr.push(myClass);
        elem.className = arr.join(" ");
      }
    }
  }
}
