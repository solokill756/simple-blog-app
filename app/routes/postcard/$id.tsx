import {
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router';
import PostDetail from '../../pages/PostDetail';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import { useCallback, useMemo } from 'react';
import { postService } from '~/services/postService';
import type { PostCardProps } from '~/data/initialPosts';
import ClipLoader from 'react-spinners/ClipLoader';

export async function loader({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    throw new Error('Missing postcard ID');
  }
  const data = await postService.getById(id);

  if (!data) {
    throw new Error('Post not found');
  }

  const post: PostCardProps = {
    id: data?.id?.toString() || '',
    title: data?.title || '',
    body: data?.body || '',
  };
  return { id, post };
}

export async function action({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) {
  try {
    const { id } = params;
    if (!id) {
      throw new Error('Missing postcard ID');
    }

    if (request.method === 'DELETE') {
      await postService.delete(id);
      return redirect('/', {
        headers: {
          'Set-Cookie':
            'flash_message=postDeleted; Path=/; Max-Age=10; SameSite=Lax',
        },
      });
    }

    return { success: false };
  } catch (error) {
    console.error('Error deleting post:', error);
    return redirect('/', {
      headers: {
        'Set-Cookie':
          'flash_message=postDeleteError; Path=/; Max-Age=10; SameSite=Lax',
      },
    });
  }
}

export default function PostDetailPage() {
  const { post, id } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading =
    navigation.state === 'loading' || navigation.state === 'submitting';

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
        <ClipLoader color="#2563eb" size={60} />
      </div>
    );
  }

  return <PostDetail id={id} postCard={post} />;
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
