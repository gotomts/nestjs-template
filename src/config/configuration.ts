export default () => ({
  // TypeORM設定
  database: {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE)
  }
});
