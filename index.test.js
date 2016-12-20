/**
 * Created by chenanguo on 16/12/20.
 */
var Nightmare = require('nightmare');
var expect = require('chai').expect;
var fork = require('child_process').fork;

describe('test index.html', function () {
    // 用server.js运行子进程,启动http服务器
    var child;
    before(function (done) {
        child = fork('./server.js');
        done(); // done是 Mocha 提供的一个函数，用来表示异步操作完成。如果不调用done，Mocha 就会认为异步操作没有结束，一直停在这一步，不往下执行，从而导致超时错误。
    });
    after(function () {
        child.kill();
    });

    it('点击后标题改变', function (done) {
        var nightmare = Nightmare({show: true});
        nightmare
            .goto('http://127.0.0.1:8080/index.html')
            .click('h1')
            .wait(1000)
            .evaluate(function () {
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function (text) {
                expect(text).to.equal('Hello Clicked');
                done();
            })
    });
});

