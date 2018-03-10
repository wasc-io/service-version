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

This configuration will produce the following HTTP Response for all routes, if the `package.json` file has this version field:
```json
{
    "version": "1.0.0"
}
```
```
HTTP/1.1 200 OK
X-Powered-By: Express
x-version: 1.0.0
Content-Type: application/json; charset=utf-8
Content-Length: 13
ETag: W/"d-jYIVkMttA3gZvYs6yuMWCdh78+w"
Date: Sat, 10 Mar 2018 17:53:25 GMT
Connection: keep-alive
```
(You can use curl to reproduce this log: `curl http://localhost/ -I`