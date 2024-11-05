import { Post } from '@/modules/post/model/post.model';
import {
  createNewDocument,
  findAllDocuments,
  findOneDocument,
} from '../../../shared/utils/firebase.utils';

export async function findAllPosts() {
  return await findAllDocuments('posts');
}

export async function findPostById(id: string) {
  return await findOneDocument('posts', id);
}

export async function createNewPost(post: Post) {
  return await createNewDocument<Post>('posts', post);
}