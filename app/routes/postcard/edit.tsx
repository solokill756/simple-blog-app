import {
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from 'react-router';
import PostForm from '~/pages/PostForm';
import { postService } from '~/services/postService';
import type { PostCardProps } from '~/data/initialPosts';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTranslation } from 'react-i18next';

export async function loader({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) {
      throw new Error('Missing postcard ID');
    }

    const data = await postService.getById(id);
    if (!data) {
      throw new Error('Post not found');
    }

    const currentPost: PostCardProps = {
      id: data.id?.toString() || '',
      title: data.title || '',
      body: data.body || '',
    };

    return { currentPost };
  } catch (error) {
    console.error('Error loading postcard:', error);
    throw new Error('Failed to load postcard');
  }
}

export async function action({
  request,
  params,
}: {
  request: Request;
  params: { id: string };
}) {
  try {
    const { id } = params;
    if (!id) {
      throw new Error('Missing postcard ID');
    }

    if (request.method === 'POST') {
      const formData = await request.formData();

      const title = formData.get('title') as string;
      const body = formData.get('body') as string;

      if (!title || !body) {
        throw new Error('Title and body are required');
      }

      await postService.update({ id, title, body });

      return redirect('/', {
        headers: {
          'Set-Cookie':
            'flash_message=postUpdated; Path=/; Max-Age=10; SameSite=Lax',
        },
      });
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return redirect('/', {
      headers: {
        'Set-Cookie':
          'flash_message=errorOccurred; Path=/; Max-Age=10; SameSite=Lax',
      },
    });
  }
}

export default function EditPostcardPage() {
  const { currentPost } = useLoaderData<typeof loader>();
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

  return <PostForm postCard={currentPost} postId={currentPost.id} />;
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
