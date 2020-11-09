## Status affiliate

Status affilate T&C agreement landing page.

Development
```
yarn install
yarn start
```

Production
```
yarn install
yarn run build
yarn run deploy
```

## REST API URL

```
# src/utils/api.js

axios.defaults.baseURL = 'http://localhost:1337';
```

Replace `'http://localhost:1337'` with the backend HOST or DNS. It's gonna be used for `http://{HOSTorDNS}/responses`(POST).