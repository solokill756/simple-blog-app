import { useNavigate, useParams } from 'react-router';
import PostDetail from '../../pages/PostDetail';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import { initialPosts, type PostCardProps } from '~/data/initialPosts';
import { useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '~/components/common/Loading';

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts, postsLoading] = useLocalStorage<PostCardProps[]>(
    'posts',
    initialPosts
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { t } = useTranslation('postDetail');
  const navigator = useNavigate();

  const handleDeletePostCard = useCallback(
    async (id: string) => {
      setDeleteLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
        toast.success(t('postDeleted'));
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error(t('postDeleteFailed'));
      } finally {
        setDeleteLoading(false);
        navigator('/');
      }
    },
    [posts, setPosts, t, navigator]
  );

  const postCard = useMemo(
    () => posts.find((post) => post.id === id),
    [posts, id]
  );

  if (!id) {
    throw new Error('Missing post ID');
  }

  if (postsLoading) {
    return <Loading size="lg" text={t('loadingPost') || 'Loading post...'} />;
  }

  if (!postCard) {
    throw new Error('Post not found');
  }

  return (
    <>
      {deleteLoading && (
        <Loading
          size="md"
          text={t('deletingPost') || 'Deleting post...'}
          overlay={true}
        />
      )}
      <PostDetail
        id={id}
        postCard={postCard}
        handleDeletePostCard={handleDeletePostCard}
      />
    </>
  );
}

export function ErrorBoundary() {
  const { t } = useTranslation('postDetail');
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        {t('errorTitle')}
      </h1>
      <p className="text-gray-700">{t('errorDescription')}</p>
    </div>
  );
}
