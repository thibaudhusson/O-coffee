import client from "./database.js";

export const dataMapper = {
    coffeeFind3ByRandom : async () => {
        const query = 'SELECT * FROM coffee ORDER BY random() LIMIT 3;'
        const result = await client.query(query);
        return result.rows;
    },
    coffeeFind3F: async () => {
        const query = 'SELECT * FROM coffee LIMIT 3;'
        const result = await client.query(query);
        return result.rows;
    },

    coffeeFindOffset3: async () => {
        const query = 'SELECT * FROM coffee OFFSET 3;'
        const result = await client.query(query);
        return result.rows;
    },

    coffeeFindById: async (id) => {
        const query ={
            text : `SELECT * FROM coffee WHERE id = $1;`,
            values: [id]
        }
        const result = await client.query(query);
        return result.rows[0];
    }

}