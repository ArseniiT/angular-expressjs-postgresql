import { Request, Response } from 'express';
import { db } from '../database/db';

class Controller {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;

    const newPerson = await db.query(
      'INSERT INTO person (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]);
    console.log(newPerson);
    res.send(newPerson.rows[0]);
  }

  async getUsers(req: Request, res: Response) {
    const allUsers = await db.query('SELECT * FROM person');
    res.send(allUsers.rows);
  }

  async getOneUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await db.query('SELECT * FROM person WHERE id = $1', [id]);
    res.send(user.rows[0]);
  }

  async updateUser(req: Request, res: Response) {
    const {id, name, email} = req.body;
    const updatedUser = await db.query(
      'UPDATE person SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]);
    res.send(updatedUser.rows[0]);
  }

  async deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await db.query('DELETE FROM person WHERE id = $1', [id]);
    res.json('User deleted successfully');
  }
}

export default new Controller();
