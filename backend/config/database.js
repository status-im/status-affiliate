module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres-db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'status-affliate'),
        username: env('DATABASE_USERNAME', 'status'),
        password: env('DATABASE_PASSWORD', 'status1!'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
