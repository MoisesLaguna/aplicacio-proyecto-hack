import connection from "../database/database.js"

export const getUsers = async (res, req) =>{
    const [response] = await connection.query("SELECT * FROM users");
     response;
     res.status(200).json(response);
}

export const createUser = async () => {};
    