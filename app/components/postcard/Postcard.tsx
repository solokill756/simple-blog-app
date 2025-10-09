import { useTranslation } from 'react-i18next';
import type { PostCardProps } from '../../data/initialPosts';
import { Link } from 'react-router';

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  date,
  excerpt,
}) => {
  const { t } = useTranslation('postcard');
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {typeof title === 'string' && title.trim() ? title : t('noTitle')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {typeof excerpt === 'string' && excerpt.trim()
            ? excerpt
            : t('noExcerpt')}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-xs text-gray-500 dark:text-gray-400">
            <span>
              {date instanceof Date && !isNaN(date.getTime())
                ? date.toLocaleDateString('vi-VN')
                : t('noDate')}
            </span>
            <span className="mt-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {typeof author === 'string' && author.trim()
                  ? author
                  : t('unknownAuthor')}
              </span>
            </span>
          </div>
          <Link
            to={`/postcard/${id}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm"
          >
            {t('readMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
