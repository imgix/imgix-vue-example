<img src="https://assets.imgix.net/imgix-logo-web-2014.pdf?page=2&fm=png&w=120" srcset="https://assets.imgix.net/imgix-logo-web-2014.pdf?page=2&fm=png&w=120 1x,
 https://assets.imgix.net/imgix-logo-web-2014.pdf?page=2&fm=png&w=120&dpr=2 2x, https://assets.imgix.net/imgix-logo-web-2014.pdf?page=2&fm=png&w=120&dpr=3 3x" alt="imgix logo">

# imgix-vue-example

An example web app demonstrating the [vue-imgix](https://github.com/imgix/vue-imgix) library and configurations.

[![Edit imgix-vue-example-fork](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/imgix/imgix-vue-example/tree/main)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Configuration

In order to add your source, you'll need to dfine your imgix configuration in your `./main.js` or in an environment-specific configuration file. In case of the `./main.js`, add the following to your Vue configuration:

```js
Vue.use(VueImgix, {
  domain: "your.domain.net",
  defaultIxParams: {
    /* 
     * This enables the auto format imgix parameter by default
     * for all images, which we recommend to reduce image size, 
     * but you might choose to turn this off.
     */
    auto: "format"
  }
});
```

### Customize imgix configuration
See our [Configure](https://github.com/imgix/vue-imgix#configure) section for more details.
### Customize vue-cli configuration
See [Vue-ClI Configuration Reference](https://cli.vuejs.org/config/).

## Creating images

The `<ix-img>` and `<ix-picture>` tags make it easy to generate custom img and picture tags. The [`<ImgixExamples> component`](/src/components/ImgixExamples.vue) has some examples. To see more, please see the [vue-imgix](https://github.com/imgix/vue-imgix#usage) usage section
