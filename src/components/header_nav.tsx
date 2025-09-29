import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const HeaderNav: React.FC = () => {
  const { t } = useTranslation('header');
  return (
    <nav className="md:block">
      <div className="ml-10 flex items-center space-x-6">
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        >
          {t('home.link')}
        </a>
        <a
          href="/about"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        >
          {t('about.link')}
        </a>
        <button
          className="ml-4 px-3 py-2 text-sm font-medium rounded border border-gray-300 bg-gray-100 hover:bg-blue-100 text-gray-700"
          onClick={() => i18n.changeLanguage('vi')}
        >
          {t('language.vietnamese')}
        </button>
        <button
          className="px-3 py-2 text-sm font-medium rounded border border-gray-300 bg-gray-100 hover:bg-blue-100 text-gray-700"
          onClick={() => i18n.changeLanguage('en')}
        >
          {t('language.english')}
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
