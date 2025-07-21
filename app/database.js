import pg from 'pg';

const client = new pg.Client({
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false // Autorise les certificats auto-signés (OK pour Render)
  }
});

await client.connect();

export default client;
