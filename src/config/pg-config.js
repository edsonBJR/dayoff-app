import Pool from 'pg-pool';
import url from 'url';

const params = url.parse(process.env.DATABASE_CONNECTION_POOL_URL || process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    schema: "public",
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 5000,
    ssl: {
        rejectUnauthorized: false
    }
};

const pool = new Pool(config);

export default pool;