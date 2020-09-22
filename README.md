<img src="https://img.shields.io/codecov/c/github/anandadwiprayoga/dummy-name-faker" >
<img src="https://img.shields.io/github/repo-size/anandadwiprayoga/dummy-name-faker" >
<img src="https://img.shields.io/github/workflow/status/anandadwiprayoga/dummy-name-faker/Javascript%20CI" >


# Dummy Name Faker

small library that help you to get random name for your project

## Installation

### With CDN 
```html
<script src="https://unpkg.com/dummy-name-faker@1.0.0/dist/bundle.js" type="module"></script>
```

### With Node js
```
npm i dummy-name-faker
```

## How to use

### Node.js 
```javascript
    const {random} = require('dummy-name-faker');
    const name = random();

    console.log(name);
```

### Example 
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testing With CDN</title>
    </head>
    <body>  
        <script src="https://unpkg.com/dummy-name-faker@1.0.0/dist/bundle.js" type="module"></script>
        <script type="module">
            import { random, all } from "./bundle.js";
            console.log(random);
            console.log(all);
        </script>
    </body>
    </html>
```

## How to contribute

## Todo
- [ ] Complete Readme
- [x] Add license
