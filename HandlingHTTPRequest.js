const http = require('http')
const https = require('https')
const colors = require('colors')
http.createServer(function (request, respond) { // res is respond, req is request
  respond.writeHead(200 ,{'Content-Type': 'text/html'}) // let's break it! I FEELS FUNNY
  respond.write(`
  <head>
    <title>TModeration Bot 2021 Server</title>
    <meta content="TModeration Bot 2021 Request Handler and Endpoint" property="og:title" />
    <meta content="TModeration Bot 2021 is a bot for moderation, fun, developing, and even economy! Also check out our war: https://twitter.com/TModDiscord2021/status/1515618992626421762" property="og:description" />
    <meta content="https://TModeration-Server.henry133.repl.co" property="og:url" />
    <meta content="#AAAAFF" data-react-helmet="true" name="theme-color" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="https://cdn.discordapp.com/avatars/937190474299633734/8590f67a81573dff234be8168904f025.webp?size=80" />
   


  <body>
  <p>Hello World!<p>\n<iframe src="__logs"></iframe>\n<script>console.log("Good request 601 xD")</script>
  </body>
`);
  respond.end();
}).listen(443)
