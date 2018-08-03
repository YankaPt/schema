'use strict';

const fs = require('fs');
const md = require('./md.js');

const content = fs.readFileSync('./generate.json');
const data = JSON.parse(content);

data.forEach((elem) => {
    if (elem.md !== undefined) {
        console.log('MD:', elem.schema);
        fs.writeFileSync(elem.md, md.generate(elem.schema));
    }
});