import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Link } from 'react-router';

const HeaderNav: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <nav className="md:block">
      <div className="ml-10 flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        >
          {t('home.link')}
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        >
          {t('about.link')}
        </Link>
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
