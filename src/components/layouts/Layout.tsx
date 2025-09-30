import { useTranslation } from 'react-i18next';
import Header from './Header';
import { Outlet } from 'react-router';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation('header');
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={t('title')} />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;
