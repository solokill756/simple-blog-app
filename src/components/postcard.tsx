import { useTranslation } from 'react-i18next';
import type { PostCardProps } from '../data/initialPosts';

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  date,
  excerpt,
}) => {
  const { t } = useTranslation('postcard');
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {typeof title === 'string' && title.trim() ? title : t('noTitle')}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {typeof excerpt === 'string' && excerpt.trim()
            ? excerpt
            : t('noExcerpt')}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-xs text-gray-500">
            <span>
              {date instanceof Date && !isNaN(date.getTime())
                ? date.toLocaleDateString('vi-VN')
                : t('noDate')}
            </span>
            <span className="mt-1">
              <span className="font-medium text-gray-700">
                {typeof author === 'string' && author.trim()
                  ? author
                  : t('unknownAuthor')}
              </span>
            </span>
          </div>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            {t('readMore')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
