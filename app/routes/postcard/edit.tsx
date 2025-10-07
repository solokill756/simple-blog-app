import { useNavigate, useParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { initialPosts, type PostCardProps } from '~/data/initialPosts';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import PostForm from '~/pages/PostForm';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Loading from '~/components/common/Loading';

const validatePost = (
  post: PostCardProps
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!post.title?.trim()) {
    errors.push('Title is required');
  }
  if (!post.content?.trim()) {
    errors.push('Content is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default function EditPostcardPage() {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState<PostCardProps | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('postForm');

  try {
    const { id } = useParams<{ id: string }>();

    if (!id) {
      throw new Error('Missing postcard ID');
    }

    const [posts, setPosts, postsLoading] = useLocalStorage<PostCardProps[]>(
      'posts',
      initialPosts
    );

    const handleEditPost = async (updatedPost: PostCardProps) => {
      setSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const validation = validatePost(updatedPost);

        if (!validation.isValid) {
          throw new Error(validation.errors.join(', '));
        }

        const updatedPosts = posts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);
        toast.success(t('postUpdated'));
        navigate(`/postcard/${updatedPost.id}`);
      } catch (error) {
        console.error('Error updating post:', error);
        toast.error(t('postUpdateFailed'));
      } finally {
        setSubmitting(false);
      }
    };

    useEffect(() => {
      if (!postsLoading) {
        const currentPost = posts.find((post) => post.id === id);

        if (!currentPost) throw new Error('Postcard not found');

        setCurrentPost(currentPost);
        setLoading(false);
      }
    }, [id, posts, postsLoading]);

    if (loading || postsLoading) {
      return <Loading size="lg" text={t('loadingPost') || 'Loading post...'} />;
    }

    return (
      <>
        {submitting && (
          <Loading
            size="md"
            text={t('updatingPost') || 'Updating post...'}
            overlay={true}
          />
        )}
        <PostForm
          handlePost={handleEditPost}
          postCard={currentPost}
          postId={id}
        />
      </>
    );
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while loading the postcard.');
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const { t } = useTranslation('common');
  return (
    <div className="error-container">
      <h2>{t('error.title')}</h2>
      <p>{error.message}</p>
      <a href="/postcards">{t('error.backToPostcards')}</a>
    </div>
  );
}
