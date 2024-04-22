import { Pool } from 'pg';

export const db = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'angular_express_postgres',
});

export const query = (text: string, params?: any) => {
  return db.query(text, params);
};
