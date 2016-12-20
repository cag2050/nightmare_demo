# nightmare_demo
nightmare（功能测试）例子

1.nightmare是一个基于electron的自动化库（意思是说它自带浏览器），用于实现爬虫或自动化测试。  
2.运行命令：node baidu.index.test.js(此js只使用了nightmare，所以使用这种命令)，实现从百度搜索结果,并返回从搜索结果页面选取的dom元素。    
3.运行命令：npm run test（是mocha的命令，用于index.test.js,此js结合了mocha和nightmare，判断选取的dom元素值是否和给定的值相等。
