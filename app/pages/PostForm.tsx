import { Form, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import PostFormInput from '~/components/PostForm/PostFormInput';
import type { PostCardProps } from '~/data/initialPosts';
interface PostFormProps {
  postId?: string | undefined;
  postCard?: PostCardProps | null;
}

const PostForm: React.FC<PostFormProps> = ({ postId, postCard }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('postForm');

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            {postId ? t('editPost') : t('addNewPost')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('formDescription')}
          </p>
        </div>

        <Form
          method="post"
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6 dark:bg-gray-800"
        >
          <PostFormInput
            label={t('title')}
            defaultValue={postCard?.title || ''}
            name="title"
            required
          />

          <PostFormInput
            label={t('content')}
            defaultValue={postCard?.body || ''}
            name="body"
            rows={6}
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
        </Form>
      </div>
    </div>
  );
};

export default PostForm;
