const db = require("../db");
class LabelController {
  async createLabel(req, res) {
    const {id, name} = req.body;
    const newLabel = await db.query(
      `INSERT INTO labels (name,id) values ($1,$2) RETURNING *`,
      [name,id]
    );
    res.json(newLabel.rows[0]);
  }
  async getLabels(req, res) {
    const label = await db.query(`SELECT * FROM labels`);
    res.json(label.rows);
  }
  async getOneLabel(req, res) {
    const id = req.params.id;
    const label = await db.query(`SELECT * FROM labels WHERE id = $1`, [id]);
    res.json(label.rows[0]);
  }
  async updateLabel(req, res) {
    const { id, name } = req.body;
    const label = await db.query(
      `UPDATE labels set name = $1 WHERE id = $2 RETURNING *`,
      [name, id]
    );
    res.json(label.rows[0]);
  }
  async deleteLabel(req, res) {
    const id = req.params.id;
    const label = await db.query(`DELETE FROM labels WHERE id = $1`, [id]);
    res.json(label.rows[0]);
  }
}
module.exports = new LabelController();
