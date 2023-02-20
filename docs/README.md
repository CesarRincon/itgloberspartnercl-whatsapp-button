# Whatsapp Button


[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]


The WhatsApp Button is a component that allows the user to access the WhatsApp chat of the store and receive personalized attention.

<img width="1918" alt="image" src="https://user-images.githubusercontent.com/90701896/217021153-6af5b3c5-cfe0-4fd3-8717-c1aba4cfde1f.png">

## Configuration 

1. Import the whatsapp-button's app to your theme's dependencies in the manifest.json, for example:

```json
  dependencies: {
    "{vendor}.whatsapp-button": "0.x"
  }
```
2. Add the whatsapp-button block to the store-theme. For example:

```json
"responsive-layout.desktop#home__section-1": {
    "title": "Home-desktop",
    "children": [
      "flex-layout.row#home__section-1",
      "whatsapp-button"
    ]
  },
  "whatsapp-button": {
    "props": {
      "logo": "assets/img/whatsapp-logo.png",
      "phone": "333333333",
      "message": "Quiero comprar algo:",
      "width":"50px",
      "height":"50px"
    }
  }
  ```
  
  ### The whatsapp-button props

| Prop name    | Type            | Description                                                                               | Default value    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------- | ---------------- | 
| `logo`       | `String`        | Define the url of the image that will be used for the whatsapp button                     | `undefined` |
| `phone`      | `String`        | Defines the WhatsApp number that the store uses to provide customer  service              | `+1234578` |
| `message`    | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat       | `Hello we help you?` |
| `width`      | `Number`        | Define the width of the button                                                            | `50` |
| `height`     | `Number`        | Define the height of the button                                                           | `50` |
| `font`       | `String`        | Define the font type  of the letter     | `t-body`
## Customization

`No CSS Handles are available yet for the app customization.`
                                                                                                                       |

## Contributors 

Thanks goes to these wonderful people:

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)