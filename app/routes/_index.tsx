import Home from '../pages/Home';
import { useTranslation } from 'react-i18next';
import { useLoaderData, useNavigation } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';
import type { PostCardProps } from '~/data/initialPosts';
import { postService } from '~/services/postService';

export async function loader() {
  try {
    const postsResponse = await postService.getAll();
    const postsData = postsResponse.map((post: PostCardProps) => ({
      id: post.id.toString(),
      userId: post.userId ?? undefined,
      title: post.title,
      body: post.body,
    }));

    const posts = Array.isArray(postsData) ? postsData : [];

    return { posts: posts };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to load posts');
  }
}

export function ErrorBoundary() {
  const { t } = useTranslation('home');
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4 dark:text-red-400">
        {t('errorTitle')}
      </h1>
      <p className="text-gray-700 dark:text-gray-400">
        {t('errorDescription')}
      </p>
    </div>
  );
}

export default function IndexPage() {
  const posts = useLoaderData<typeof loader>().posts;
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

  return <Home posts={posts} />;
}
