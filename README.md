# js-dark-theme-switch
A Dark Theme Switch implementation with JS

Let's say you are using in your site a branding palette like the below:

![Screenshot](/screenshots/screenshot-01.PNG)

and you want to add to your site a "dark theme" switch as a visual aid to users visiting your website.

Then you can get this done with the help of a JavaScript script.

## First create your switch

Start adding the code and styling for your switch button. Above the first heading title would be the best place for it.

```html
<div class="theme-switch">
  <div class="slider round" data-toggle="active"></div>
</div>
```

Then add the proper styling with CSS.

```css
.theme-switch {
  position: fixed;
  z-index: 1;
  max-width: 1170px;  
  margin: auto;
  top: 50px;
  left: 0;
  right: 0;
}

.slider {
  background-color: #555;
  width: 60px;
  height: 35px;
  cursor: pointer;
  padding: 2px;
  float: right;
  margin-right: 15px;
}

.slider::before {
  content: "";
  background-color: #fff;
  width: 30px;
  height: 30px;
  transition: all 0.2s;
  display: block;
}

.slider.round {
  border-radius: 35px;
}

.slider.round::before {  
  border-radius: 50%;
}

.slider.active {
  background-color: #66bb6a;
}

.slider.active::before{
  transform: translateX(25px);
}
```

You should get something like the below:

![Screenshot](/screenshots/screenshot-02.PNG)

## Add the action with JavaScript

We'll have to code a script to listen to the "click" events fired when the user clicks on the switch.

```javascript
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
```

## The Trick

If you read the JS script you may notice what it does, is just to add an extra CSS stylesheet called "dark-theme.css", then you will need to add extra styling in a separate CSS file to change the site branding. 

The script also toggle between an "active" / "non-active" state, just adding the "active" class to the switch control, and the CSS just applies the changes.

In this example, with just changing a few properties we got a result like the below once the "action" is triggered by the switch control.

See my "dark-theme.css" sample:

```css
/* CSS */

body {
  color: #e7e7e7;
  background-color: #333;
}

h1 {  
  color: #90AFC5;
}

h1::after {  
  background-color: #cb735c;  
}
```

![Screenshot](/screenshots/screenshot-03.PNG)

See the live working demo at:

https://accedo-gps.000webhostapp.com/demo/js-dark-theme-switch/index.html
