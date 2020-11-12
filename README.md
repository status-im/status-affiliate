## Status affiliate

Status affilate T&C agreement landing page.

Consists of a React frontend and a [StrAPI](https://github.com/strapi/strapi) backend.

The Strapi backend is for form submssion REST API and uses PostgresSQL database.

## Configuration

You can see an example `.env` file in [`.env.example`](./env.example). Copy it to `.env` and edit.

Make sure to set `BASE_URL` as it will be used to post the form data to the backend.

## Development

### Frontend

```
yarn install
yarn start
```

### Backend

```
docker-compose up --build
```
This command will create a `db` folder in the root directory.
