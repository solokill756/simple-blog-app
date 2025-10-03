import { useParams } from 'react-router';
import PostDetail from '../../pages/PostDetail';
import { useTranslation } from 'react-i18next';

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error('Missing post ID');
  }

  return <PostDetail id={id} />;
}

export function ErrorBoundary() {
  const { t } = useTranslation('post_detail');
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        {t('errorTitle')}
      </h1>
      <p className="text-gray-700">{t('errorDescription')}</p>
    </div>
  );
}
