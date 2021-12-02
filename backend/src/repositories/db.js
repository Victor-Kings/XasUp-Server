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
    let sql = 'INSERT INTO users(name) VALUES ($1) returning id;';
    const values = [name];
    return (await client.query(sql, values)).rows[0];
}

async function createFriend(param){
    const client = await connect();

    const sql = 'INSERT INTO friend(id1,id2) VALUES ($1,$2);';
    let values = [param.id1,param.id2];
    await client.query(sql, values);

    values = [param.id2,param.id1];
    await client.query(sql, values);

    return (await client.query(`select name from users where id=${param.id2}`)).rows[0]
}

async function findFriends(id){
    const client = await connect();
    const sql = `SELECT u.id,u."name" FROM users u inner join friend f on u.id = f.id2 where f.id1 = ${id}`;
    const res = await client.query(sql);
    console.log(res.rows);
    return res.rows;
}

async function insertUserInGroup(param){
    const client = await connect();
    console.log(param.groupname);
    const res = await client.query(`SELECT groupnameid FROM "group" WHERE groupname='${param.groupname}' order by groupnameid desc limit 1`);
    sql = 'INSERT INTO users_in_group(id_user, id_group) VALUES ($1,$2);';
    let values
    param.id_users.map(async (element) => {
        values = [element,  res.rows[0].groupnameid];
        await client.query(sql, values);
    })
    return res.rows[0].groupnameid
}

async function createGroup(param){
    const client = await connect();
    console.log(param);
    const sql = 'INSERT INTO "group"(groupname) VALUES ($1);';
    const values = [param.groupname];
    await client.query(sql, values);
    const idGroup = await insertUserInGroup(param);
    return idGroup
}

async function findGroup(id){
    const client = await connect();
    const sql = `SELECT g.groupname, g.groupnameid FROM "group" g inner join users_in_group uig on uig.id_group = g.groupnameid where uig.id_user = ${id}`;
    const res = await client.query(sql);
    return res.rows;
}

async function findUserInGroup(id){
    const client = await connect();
    const sql = `SELECT u.id,u."name" FROM users u inner join users_in_group uig on uig.id_user = u.id where uig.id_group = ${id}`;
    const res = await client.query(sql);
    return res.rows;
}

async function deleteUserfriendship(id, id2){
    const client = await connect();
    const sql = `DELETE from friend where (id1=${id} and id2=${id2}) or (id1=${id2} and id2=${id})`
    const res = await client.query(sql);
    return res.rows;
}

async function deleteUserofGroup(id, group){
    const client = await connect();
    const sql = `delete from "group" where groupnameid=${id} and groupname='${group}';`
    const res = await client.query(sql);
    return res.rows;
}

module.exports = { selectUser, insertUser, findFriends, createGroup , findGroup, findUserInGroup, createFriend, deleteUserfriendship, deleteUserofGroup}