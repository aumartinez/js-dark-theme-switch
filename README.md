# js-dark-theme-switch
A Dark Theme Switch implementation with JS

Let's say you are using in your site a branding palette like the below:

![Screenshot](/screenshots/screenshot-01.PNG)

and you want to add to your site a "dark theme" switch as a visual aid to users visiting your website.

Then you can achieve this by using JavaScript.

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
