import { useState } from 'react';
import type { PostCardProps } from '../data/initialPosts';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
interface PostFormProps {
  onAddPost: (post: PostCardProps) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [excerpt, setExcerpt] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();
  const { t } = useTranslation('postForm');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newPost: PostCardProps = {
        id: String(Date.now()),
        title,
        author,
        excerpt,
        content,
        date: new Date(),
      };
      onAddPost(newPost);
      setTitle('');
      setAuthor('');
      setExcerpt('');
      setContent('');
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
      alert(t('error'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('addNewPost')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t('formDescription')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
              {t('title')}
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
              {t('author')}
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
              {t('excerpt')}
            </label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
              {t('content')}
            </label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-200"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-200 shadow-lg"
            >
              {t('addPost')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
