# node-config.ini


ini parser is a node module that you can use it on your express app and your node apps.
### [so you can learn more about iniparser here](https://www.npmjs.com/package/iniparser)

but now please concider my example:
first of all you have to install iniparser through npm install iniparser@latest -g for globaly install or you can install
it with --save for your project in dependencies or you can install it with --save-dev command for your project and
in dev-dependencies in your package.json file. the second thing you have to do, you should create a file and named : config.ini and content of this file is :

<pre class="w3-black w3-text-white">
        title = MehdiFilban
        port  = 5000
        message = anything you want
</pre>

and then create file index.pug because jade is deprecated content of this file :
   <pre class="w3-black w3-text-white"> 
    doctype
      html(lang="en")
        head
            meta(charset="UTF-8")
            meta(name="viewport", content="width=device-width, initial-scale=1.0")
            meta(http-equiv="X-UA-Compatible", content="ie=edge")
            link(rel="stylesheet", href="/stylesheets/style.css")
            script(src="/javascripts/main.js")
            script(src="/views/error.ejs")
        body
           #center
            p  Hello Guys my name is mehdi prg and im really appreciate that you come to my website.
              #content
                img(src="/images/logo.png", alt="logo") 
                p welcome
                p #{message}
    </pre>

and then you have to create a file and named it app.js content of this file is :
 <pre class="w3-black w3-text-white">
    var express = require('express');
    var app = express();
    var port = 3521;
    var http = require('http');
    // var logger = require('logger');
    var iniparser = require('iniparser');
    var responseTime = require('response-time');
    var config = iniparser.parseSync("./config.ini");
    var title = config.title;
    app.set('view engine', 'pug'); //jade is deprecated
    app.set('views', "./views");
    
    app.use(express.static('./public'));
    app.use(responseTime());
    app.get('/', function(req,res){
        res.render('hello',{title, message:config.message});
    });
    
    http.createServer(app).listen(config.port,function(){
        console.log("app is started");
    });
</pre>
 and then go to the terminal and write this command :
<pre class="w3-black w3-text-white"> 
    ~$ node-dev app.js
    </pre>
that was so easy.

Contact me : <br/>
* [send an email for me](https://mail.google.com/mail/u/0/#inbox?compose=new)
* [twitter](https://twitter.com/Mehdi_PRG)
