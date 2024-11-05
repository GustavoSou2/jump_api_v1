import { createNewPost, findAllPosts } from '../service/post.service';
import { Response, Request } from 'express';

// export async function createPost(req: Request, res: Response) {
//     const { title, text, links, image_id, key_words } = req.body;
//     const post = new Post({ title, text, links, image_id, key_words });
//     await post.save();
//     res.send(post);
// }

export async function findAll(req: Request, res: Response) {
  const posts = await findAllPosts();
  res.send(posts);
}

export async function findOne(req: Request, res: Response) {
  const posts = await findAllPosts();
  res.send(posts);
}

export async function create(req: Request, res: Response) {
  const post = req.body;
  const newPost = await createNewPost(post);
  res.send(newPost);
}
