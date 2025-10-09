import { postService } from '~/services/postService';
import PostForm from '../pages/PostForm';
import { redirect, useNavigation } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTranslation } from 'react-i18next';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  if (!title || !body) {
    throw new Error('Title and body are required');
  }

  try {
    await postService.create({ title, body });

    return redirect('/', {
      headers: {
        'Set-Cookie':
          'flash_message=postCreated; Path=/; Max-Age=10; SameSite=Lax',
      },
    });
  } catch (error) {
    return redirect('/', {
      headers: {
        'Set-Cookie':
          'flash_message=errorOccurred; Path=/; Max-Age=10; SameSite=Lax',
      },
    });
  }
}

export default function CreatePostPage() {
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

  return <PostForm />;
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
