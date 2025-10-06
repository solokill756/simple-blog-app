import React from 'react';

import { useTranslation } from 'react-i18next';
import HeaderNav from '../common/HeaderNav';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation('common');
  const displayTitle =
    typeof title === 'string' && title.trim().length > 0 ? title : t('title');

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              {displayTitle}
            </h1>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
