


### libpng issues

Installing on some versions of OSX may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313):
```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```
This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

```sh
brew install libpng
```


### Starting

`npm start`
`npm run build`



"babel-preset-react-hmre": "^1.1.1",
"react-hot-loader": "^1.3.1"
