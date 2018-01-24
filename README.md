#Code Splitting Demo

Using create-react-app and ejecting after.
Created two modules (A and B) to be loaded on demand after clicking on buttons. Using the function "import" which returns a promise.
In the generated bundle, you will see: "Hello Module C". Because, Module C is being imported in the normal way. 

    File sizes after gzip:
    36.11 KB (+41 B)  build/static/js/main.0e1aaca1.js
    299 B             build/static/css/main.c17080f1.css
    192 B             build/static/js/0.05f5f697.chunk.js
    192 B             build/static/js/1.7672bc99.chunk.js

[Webpack code splitting](https://webpack.js.org/guides/code-splitting/)