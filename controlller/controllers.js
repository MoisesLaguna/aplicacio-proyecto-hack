import connection from "../database/database.js";

export const getUsers = async (req, res) => {
  try {
    const [response] = await connection.query(
      "SELECT id, username, email, CAST(AES_DECRYPT(password, username) AS CHAR) AS password FROM users"
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const [response] = await connection.query(
      "SELECT id, username, email, CAST(AES_DECRYPT(password, username) AS CHAR) AS password FROM users WHERE id = ?",
      [id]
    );
    if (response.length === 0) {
      res.status(404).json({ message: "Usuario no encontrado!" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await connection.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, AES_ENCRYPT(?, ?))",
      [username, email, password, username]
    );
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const [response] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    if (response.length === 0) {
      res.status(404).json({ message: "User not found!" });
      return;
    }
    const { username, email, password } = req.body;
    await connection.query(
      "UPDATE users SET username = ?, email = ?, password = AES_ENCRYPT(?, ?) WHERE id = ?",
      [username, email, password, username, id]
    );
    res.status(200).json({ message: "User updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await connection.query("DELETE FROM users WHERE id = ?", [id]);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
