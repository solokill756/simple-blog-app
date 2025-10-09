import { type PostCardProps } from '../data/initialPosts';
import { useTranslation } from 'react-i18next';
import { Form, useNavigate } from 'react-router';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface PostDetailProps {
  postCard?: PostCardProps | null;
  id: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ id, postCard }) => {
  const { t } = useTranslation('postDetail');
  const navigate = useNavigate();

  const formatDate = (date: any): string => {
    try {
      if (!date) return t('noDate');
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return t('noDate');
      return dateObj.toLocaleDateString('vi-VN');
    } catch (error) {
      return t('noDate');
    }
  };

  const handleEdit = () => {
    navigate(`/edit-post/${id}`);
  };

  if (!postCard) {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">
        {postCard.title ?? t('noTitle')}
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <FiEdit className="w-4 h-4" />
          {t('edit')}
        </button>
        <Form method="DELETE">
          <button
            type="submit"
            onClick={(e) => {
              if (!window.confirm(t('confirmDelete'))) {
                e.preventDefault();
              }
            }}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2"
          >
            <FiTrash2 className="w-4 h-4" />
            {t('delete')}
          </button>
        </Form>
      </div>

      <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
        <div className="prose max-w-none text-gray-800 dark:text-gray-300">
          {postCard.body ?? t('noContent')}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
