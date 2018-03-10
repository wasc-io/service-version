## Service-version
This package appends the current version to any request as a `x-version` header.

### Quick start
First, run `yarn add service-version` for your app. Then in an Express (or Connect) app:
```javascript
const express = require('express');
const serviceVersion = require('service-version');

const app = express();
app.use(serviceVersion());

// ...
```