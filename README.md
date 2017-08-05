# Webpack & Webpack-dev-server

### libpng issues

Installing on some versions of OSX may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313):
```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```
This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

```sh
brew install libpng
```

### Development server

`npm start`

### Build for production

`npm run build`
