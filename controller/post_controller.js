const db = require("../db");

class PostController {
  async getAllPosts(req, res) {
    const posts = await db.query(`SELECT * FROM posts`);
    res.json(posts.rows);
  }
  async createPost(req, res) {
    const { title, content, label_id, img } = req.body;
    const newPost = await db.query(
      `INSERT INTO posts (title, content, label_id, img) values ($1, $2, $3, $4) RETURNING *`,
      [title, content, label_id, img]
    );
    res.json(newPost.rows[0]);
  }
  async getPostsByLabel(req, res) {
    const id = req.query.id;
    const posts = await db.query(`SELECT * FROM posts WHERE label_id = $1`, [
      id,
    ]);
    res.json(posts.rows);
  }

  async getOnePost(req, res) {
    const id = req.params.id;
    const post = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
    res.json(post.rows[0]);
  }
  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query(`DELETE FROM posts WHERE id = $1`, [id]);
    res.json(post.rows[0]);
  }
  
}

module.exports = new PostController();
