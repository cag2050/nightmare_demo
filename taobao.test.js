/**
 * Created by cag on 2016/12/19.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

nightmare
    .goto('https://www.taobao.com')
    .type('#q', '电视机')
    .click('form[action*="/search"] [type=submit]')
    .wait('#spulist-grid')
    .evaluate(function () {
        return document.querySelector('#spulist-grid .grid-item .info-cont').textContent.trim();
    })
    .end()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error('search failed:', error);
    });