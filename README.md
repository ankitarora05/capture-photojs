# Capture Photo Plugin  

A simple JavaScript plugin that allows users to capture a photo using their device's camera and download it as a PNG file. Built with pure JavaScript (no dependencies).  

## Installation  

You can install the plugin via **NPM** or use it directly via **CDN**.  

### Install via NPM  

```sh
npm install capture-photojs

```

### Install via CDN 

Or, you can use this package via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/capture-photojs@latest"></script>
```

### Usage via npm package

```javascript
import installCapturePhoto, { CapturePhoto } from "capture-photojs";

const photoCapture = new CapturePhoto('photo-container');
```

### Usage via CDN 

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Capture</title>
</head>
<body>
    <div id="photo-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/capture-photojs@latest" async></script>
    <script>
        const photoCapture = new CapturePhoto('photo-container');
    </script>
</body>
</html>

```


## Features
✅ Uses the device's camera to capture a photo.
✅ Provides a "Capture Photo" button to take the snapshot.
✅ Allows downloading the captured photo as a PNG file.
✅ No external dependencies, pure JavaScript.
✅ Works with both NPM and CDN.
✅ Simple and lightweight.

## License

MIT License  

Copyright (c) 2025 Ankit Arora  

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING  
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER  
DEALINGS IN THE SOFTWARE. 