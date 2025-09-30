import { useTranslation } from 'react-i18next';
import Header from './components/header';
import PostCard from './components/postcard';
import { initialPosts } from './data/initialPosts';
import { useState } from 'react';
function App() {
  const { t } = useTranslation('app');
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={t('title')} />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('welcome')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{t('description')}</p>
        </div>

        <article className="mt-12 grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {posts.map((post) => {
            return <PostCard key={post.id} {...post} />;
          })}
        </article>
      </main>
    </div>
  );
}

export default App;
