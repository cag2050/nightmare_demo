/**
 * Created by cag on 2016/12/19.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

nightmare
    .goto('https://www.baidu.com')
    .type('#kw', '电影')
    .click('form[action*="/s"] [type=submit]')
    .wait('.result.c-container')
    .evaluate(function () {
        return document.querySelector('.result.c-container h3 a').textContent;
    })
    .end()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error('search failed:', error);
    });