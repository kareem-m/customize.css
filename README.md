<div align="center" style="margin: -90px 0 -150px;">
  <img src="https://raw.githubusercontent.com/kareem-m/customize.css/main/public/images/icon.png">
</div>

# About customize.css

#### Customize.css is a small css file that improves user agent stylesheet values

#### so that browsers display all elements more consistently & in compliance with modern standards.

### For example:

<br>


```css
h1 {
    font-size: 2em;
}

a {
    text-decoration: none;
    user-select: none;
}

p {
    color: #666;
}

ul, ol {
    margin: 0;
    padding: 0;
}
```

<br>


# Features customize.css

#### The advantages of customize.css are very many, and this is evident from the following:

- Small file size and not a lot of comments.
- Corrected some errors in browsers.
- Improve usability with subtle improvements.

#### One of the most important features that are not present in the frameworks and that many developers and programmers do not know is the ability to change the shape of the scroll bar, which gives an attractive appearance to customers.

<br>


```css
::-webkit-scrollbar {
    width: 10px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: var(--main-background, #fff);
}

::-webkit-scrollbar-thumb {
    background: var(--main-color, #07f);
}

::-webkit-scrollbar-thumb:hover {
    border: 1px solid #fff;
}
```

#### Another advantage is the addition of features to some elements that must be placed each time you create a site, which reduces the time required to create the site, and these features include:

<br>


```css
form input:not([type="submit"]) {
    padding: 10px 50px 10px 10px;
    caret-color: var(--main-color, #07f);
}

[type="submit"] {
    padding: 10px;
    cursor: pointer;
    text-transform: capitalize;
}

form input:not([type="submit"]):focus,
[type="submit"]:focus {
    outline: 0;
}

textarea {
    resize: none;
}
```

<br>


# Customize vs Normalize vs Reset

#### customize.css, of course, overcomes normalize and reset, because customize has all the properties of normalize and reset, in addition to other properties, and it does not have a lot of annoying commints that increase the file space.

<br>

# Browser support

### customize.css supports this browsers.

<br>

- Chrome
- Edge
- Firefox ESR+
- Safari 8+
- Opera

<br>


# Quick start

#### Looking to quickly add customize.css to your project?

#### Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

<br>

```html
<link rel="stylesheet" href="https://kareem-m.github.io/customize.css/customize.min.css">
```
