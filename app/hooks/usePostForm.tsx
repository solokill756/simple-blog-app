import { useState, useEffect } from 'react';
import type { PostCardProps } from '../data/initialPosts';

interface PostFormData {
  title: string;
  author: string;
  excerpt: string;
  content: string;
}

export const usePostForm = (initialPost?: PostCardProps | null) => {
  const [formData, setFormData] = useState<PostFormData>({
    title: initialPost?.title || '',
    author: initialPost?.author || '',
    excerpt: initialPost?.excerpt || '',
    content: initialPost?.content || '',
  });

  useEffect(() => {
    if (initialPost) {
      setFormData({
        title: initialPost.title || '',
        author: initialPost.author || '',
        excerpt: initialPost.excerpt || '',
        content: initialPost.content || '',
      });
    }
  }, [initialPost]);

  const updateField = (field: keyof PostFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      excerpt: '',
      content: '',
    });
  };

  return {
    formData,
    updateField,
    resetForm,
    setTitle: (value: string) => updateField('title', value),
    setAuthor: (value: string) => updateField('author', value),
    setExcerpt: (value: string) => updateField('excerpt', value),
    setContent: (value: string) => updateField('content', value),
  };
}; 
