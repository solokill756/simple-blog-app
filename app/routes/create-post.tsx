import PostForm from '../pages/PostForm';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import { initialPosts, type PostCardProps } from '../data/initialPosts';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Loading from '~/components/common/Loading';

export default function CreatePostPage() {
  const [posts, setPosts, postsLoading] = useLocalStorage<PostCardProps[]>(
    'posts',
    initialPosts
  );
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('postForm');

  const handleAddPost = async (newPost: PostCardProps) => {
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPosts([newPost, ...posts]);
      toast.success(t('postAdded'));
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
      toast.error(t('postAddFailed'));
    } finally {
      setSubmitting(false);
    }
  };

  if (postsLoading) {
    return <Loading size="lg" text={t('loadingForm') || 'Loading form...'} />;
  }

  return (
    <>
      {submitting && (
        <Loading
          size="md"
          text={t('creatingPost') || 'Creating post...'}
          overlay={true}
        />
      )}
      <PostForm handlePost={handleAddPost} />
    </>
  );
}
