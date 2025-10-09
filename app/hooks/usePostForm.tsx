import { useState, useEffect } from 'react';
import type { PostCardProps } from '../data/initialPosts';

interface PostFormData {
  title: string;
  body: string;
}

export const usePostForm = (initialPost?: PostCardProps | null) => {
  const [formData, setFormData] = useState<PostFormData>({
    title: initialPost?.title || '',
    body: initialPost?.body || '',
  });

  useEffect(() => {
    if (initialPost) {
      setFormData({
        title: initialPost.title || '',
        body: initialPost.body || '',
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
      body: '',
    });
  };

  return {
    formData,
    updateField,
    resetForm,
    setTitle: (value: string) => updateField('title', value),
    setBody: (value: string) => updateField('body', value),
  };
};
