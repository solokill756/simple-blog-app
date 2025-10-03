import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { initialPosts, type PostCardProps } from '../data/initialPosts';
import PostCard from '../components/postcard/Postcard';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      try {
        const parsed = JSON.parse(storedPosts) as PostCardProps[];
        const restored = parsed.map((p) => ({ ...p, date: new Date(p.date) }));
        setPosts(restored);
      } catch (error) {
        console.error('Lỗi parse posts:', error);
        setPosts(initialPosts);
      }
    } else {
      setPosts(initialPosts);
    }
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    try {
      localStorage.setItem('posts', JSON.stringify(posts));
    } catch (error) {
      console.error('Lỗi lưu posts:', error);
      alert(t('storageError'));
    }
  }, [posts]);

  const addPost = () => {
    const newPost: PostCardProps = {
      id: String(Date.now()),
      title: 'Bài viết mới',
      author: 'Tác giả mới',
      date: new Date(),
      excerpt: 'Đây là nội dung tóm tắt của bài viết mới...',
      content: 'Đây là nội dung chi tiết của bài viết mới...',
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t('welcome')}
        </h2>
        <p className="mt-4 text-xl text-gray-600">{t('description')}</p>
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={addPost}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          {t('addPost')}
        </button>
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
