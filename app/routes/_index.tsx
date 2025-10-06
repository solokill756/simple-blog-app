import Home from '../pages/Home';
import { useTranslation } from 'react-i18next';

export function ErrorBoundary() {
  const { t } = useTranslation('home');
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        {t('errorTitle')}
      </h1>
      <p className="text-gray-700">{t('errorDescription')}</p>
    </div>
  );
}

export default function IndexPage() {
  return <Home />;
}
