import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { initialPosts, type PostCardProps } from '../data/initialPosts';
import PostCard from '../components/postcard/Postcard';
import { useLocalStorage } from '~/hooks/useLocalStorage';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const [posts, setPosts] = useLocalStorage<PostCardProps[]>(
    'posts',
    initialPosts
  );

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t('welcome')}
        </h2>
        <p className="mt-4 text-xl text-gray-600">{t('description')}</p>
      </div>

      <div className="flex justify-end mb-6">
        <Link
          to="/create-post"
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          {t('addPost')}
        </Link>
      </div>

      <article className="mt-12 grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </article>
    </div>
  );
};

export default Home;
