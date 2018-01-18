# NodeJS + ExpressJS + Webpack Starter

Please find a detailled explaination of why I chose to use which component and all the tweaks I had to do on my blog:

[http://hack.Muckibu.de](http://muckibu.de/?p=355&preview=true)


## Components

### Node JS
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is mainly used for backend and build chain tasks. For more information, visit (https://nodejs.org/en/)

### ExpressJS
Express is a project of the Node.js Foundation, it is a robust web framework for NodeJS. The Express framework allows building backend services with REST-APIs.
For more detailed information, look here : (https://expressjs.com/)

### WebPack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 
In this project, we use webpack to transpile and bundle the NodeJS code written in typescript.
For more detailed information, look here : (https://webpack.js.org/)

### Typescript
TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. (from [Wikipedia](https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=22&cad=rja&uact=8&ved=0ahUKEwjQ4LKl2rfYAhUF1hQKHanCDWAQmhMIvwEwFQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTypeScript&usg=AOvVaw0POHuGGBSA531WKDolJ7xx))
For more detailed information, look here : (https://www.typescriptlang.org/)

## Development

### build
In order, to build the software (once per call), use

```bash
$ npm run build:prod
```

or

```bash
$ npm run build:dev
```

The webpack packager will do the work for you and you will find `dist/index.js` afterwards.

### run
```bash
$ node dist/index.js
```

will run the software for you

### (live) reload / watch

To watch the source files, build on demand and run software,

```bash 
$ npm run watch
```

is made available.

