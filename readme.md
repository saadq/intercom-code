# intercom-code
> A chrome extension for integrating a code editor into Intercom.

## Project Status
GitHub recently changed Gists to require authentication in order to create a gist. This extension no longer works, and needs to be updated to accommodate these changes by GitHub.

![](https://i.imgur.com/XIXF8QW.gif)

You can install the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/intercom-code/idkppmfdnbebeikaplhpckbmbfbeedon/), or you can build it from source.

## Installation

```
npm install
```

## Building the extension

```
npm run build
```

After running this command, a `dist` folder should be generated that you can use by going to `chrome://extensions/` in your browser and then clicking `Load Unpacked` and selecting the generated `dist` folder.
