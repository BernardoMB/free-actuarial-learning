# PDF Generation

## Data extraction

Inspect learning page and make necessary adjustments to `browser.js` or `browser-playground.js`.

Copy and paste the contents of `browser.js` in the browser's JavaScript console.

Wait until the script is done and download the generated `data.json` file. Save the finle in the root of the repository.

## Images generation

 Once the `data.json` file has been downloaded from the browser, execute the `generate-images.js` script (this script required no modification):

 ```bash
 $ node generate-images.js
 ```

Images should be generated inside `images/`.

## PDF generation

 Once the images have been generated modify and execute `generate-pdf.js` script:

 ```bash
 $ node generate-pdf.js
 ```

An `output.pdf` should be generated in the root of this repository.
