import { type PostCardProps } from '../data/initialPosts';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface PostDetailProps {
  postCard?: PostCardProps | null;
  id: string;
  handleDeletePostCard: (id: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({
  id,
  postCard,
  handleDeletePostCard,
}) => {
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

  const handleDelete = () => {
    if (window.confirm(t('confirmDelete'))) {
      try {
        handleDeletePostCard(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert(t('deleteError'));
      }
    }
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {postCard.title ?? t('noTitle')}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="font-medium text-gray-700">
          {postCard.author ?? t('unknownAuthor')}
        </span>
        <span className="mx-2">•</span>
        <span>{formatDate(postCard.date)}</span>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2"
        >
          <FiEdit className="w-4 h-4" />
          {t('edit')}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2"
        >
          <FiTrash2 className="w-4 h-4" />
          {t('delete')}
        </button>
      </div>
      <p className="text-gray-700 text-lg mb-6">
        {postCard.excerpt ?? t('noExcerpt')}
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="prose max-w-none text-gray-800">
          {postCard.content ?? t('noContent')}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
