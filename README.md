<h1 align="center">Ⓜ️🤡 Medium popup blocker</h1>
<p align="center">
  <img src="./browser/logo.png" />
</p>
<p align="center">
  Hide that annoying Medium popup
</p>

- [About](#about)
- [Installation](#installation)
  - [Chrome](#chrome)
  - [Firefox](#firefox)
- [Changelog](#changelog)


## About

- Works in Chrome
- Works in Firefox


## Installation

### Chrome

Install the `./browser` folder as an unpacked extension. See the following documentation if you don't know how to do that: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked


### Firefox

Zip the `./browser` folder, ensuring the `manifest.json` stays at the root. You can do this manually or with the following command that works on macOS and Linux:

```sh
cd browser && zip -r ../firefox.zip * && cd ..
```

Disable signature verification in Firefox by going into `about:config` and then ensuring the key `xpinstall.signatures.required` is set to **false** by double clicking it (if it's set to *true*). Or [sign it using web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) so you don't have to disable this option.

In Firefox, install the created zip file as an add-on from file. See advanced settings here: https://support.mozilla.org/en-US/kb/find-and-install-add-ons-add-features-to-firefox#w_how-do-i-find-and-install-add-ons


## Changelog

- 17 Oct 2026: Initial release
