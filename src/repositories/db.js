async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://admin:password@localhost:5432/XasUp'
    });
    const client = await pool.connect();
    client.release();
    global.connection = pool;
    return pool.connect();
}

async function selectUser(id) {
    const client = await connect();
    const res = await client.query(`SELECT * FROM users WHERE id=${id}`);
    console.log(res.rows[0].name);
    return res.rows[0].name;
}

async function insertUser(name){
    const client = await connect();
    const sql = 'INSERT INTO users(name) VALUES ($1);';
    const values = [name];
    return await client.query(sql, values);
}

async function findFriends(id){
    const client = await connect();
    
    const sql = `SELECT u.id,u."name" FROM users u inner join friend f on u.id = f.id2 where f.id1 = ${id}`;
    const res = await client.query(sql);
 console.log(res.rows);
    return res.rows;
}

module.exports = { selectUser, insertUser, findFriends }