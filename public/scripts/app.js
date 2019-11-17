'use strict';

console.log('ok');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
