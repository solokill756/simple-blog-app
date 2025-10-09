import axios from 'axios';
import type { PostCardProps } from '~/data/initialPosts';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postService = {
  async getAll(): Promise<PostCardProps[]> {
    try {
      const res = await instance.get('/posts');
      return res.data?.slice(0, 10) || [];
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  async getById(id: string): Promise<PostCardProps | null> {
    try {
      const res = await instance.get(`/posts/${id}`);
      return res.data || null;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  async create(data: { title: string; body: string }): Promise<any> {
    try {
      const res = await instance.post('/posts', data);
      return res.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  async update(data: PostCardProps): Promise<any> {
    try {
      const res = await instance.put(`/posts/${data.id}`, data);
      return res.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await instance.delete(`/posts/${id}`);
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },
};
