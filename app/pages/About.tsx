import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('about');
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
        {t('title')}
      </h1>
      <p className="text-gray-700 text-lg mb-6 dark:text-gray-300">
        {t('description')}
      </p>
      <p className="text-gray-700 text-lg mb-6 dark:text-gray-300">
        {t('additionalInfo')}
      </p>
      <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
          {t('authorTitle')}
        </h2>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          {t('authorDescription')}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{t('authorNote')}</p>
      </div>
    </div>
  );
};

export default About;
