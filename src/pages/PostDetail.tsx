import React, { useEffect } from 'react';
import { initialPosts, type PostCardProps } from '../data/initialPosts';
import { useTranslation } from 'react-i18next';

const PostDetail: React.FC<{ id: string }> = ({ id }) => {
  const [post, setPost] = React.useState<PostCardProps | null>(null);
  const { t } = useTranslation('post_detail');
  useEffect(() => {
    try {
      const storedPosts = localStorage.getItem('posts');
      let posts: PostCardProps[] = [];

      if (!storedPosts) {
        posts = initialPosts;
      } else {
        const parsed = JSON.parse(storedPosts) as PostCardProps[];
        posts = parsed.map((p) => ({ ...p, date: new Date(p.date) }));
      }
      const foundPost = posts.find((p) => p.id === id);
      setPost(foundPost || null);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {t('notFound.title')}
        </h1>
        <p className="text-gray-700">{t('notFound.message')}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {post.title ?? t('noTitle')}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="font-medium text-gray-700">
          {post.author ?? t('unknownAuthor')}
        </span>
        <span className="mx-2">•</span>
        <span>
          {post.date ? post.date.toLocaleDateString('vi-VN') : t('noDate')}
        </span>
      </div>
      <p className="text-gray-700 text-lg mb-6">
        {post.excerpt ?? t('noExcerpt')}
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="prose max-w-none text-gray-800">
          {post.content ?? t('noContent')}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
