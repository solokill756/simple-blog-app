import { useCallback } from 'react';
import type { PostCardProps } from '../data/initialPosts';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import PostFormInput from '~/components/PostForm/PostFormInput';
import { usePostForm } from '~/hooks/usePostForm';
interface PostFormProps {
  handlePost: (post: PostCardProps) => void;
  postCard?: PostCardProps | null;
  postId?: string;
}

const PostForm: React.FC<PostFormProps> = ({
  handlePost,
  postCard,
  postId,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('postForm');

  const { formData, setTitle, setAuthor, setExcerpt, setContent, resetForm } =
    usePostForm(postCard);

  const createPostData = useCallback(
    (isEdit: boolean): PostCardProps => ({
      id: isEdit ? postId! : Date.now().toString(),
      title: formData.title,
      author: formData.author,
      excerpt: formData.excerpt,
      content: formData.content,
      date: isEdit ? postCard?.date || new Date() : new Date(),
    }),
    [postId, formData, postCard]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isEdit = !!(postId && postCard);
      const postData = createPostData(isEdit);

      handlePost(postData);
      resetForm();
    } catch (error) {
      console.error('Error processing post:', error);
      alert(t('error'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {postId ? t('editPost') : t('addNewPost')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t('formDescription')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6"
        >
          <PostFormInput
            label={t('title')}
            value={formData.title}
            onChange={setTitle}
            required
          />
          <PostFormInput
            label={t('author')}
            value={formData.author}
            onChange={setAuthor}
            required
          />

          <PostFormInput
            label={t('excerpt')}
            value={formData.excerpt}
            onChange={setExcerpt}
            required
          />

          <PostFormInput
            label={t('content')}
            value={formData.content}
            onChange={setContent}
            required
          />

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
              {postId ? t('editPost') : t('addPost')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
