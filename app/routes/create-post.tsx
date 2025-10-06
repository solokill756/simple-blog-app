import PostForm from '../pages/PostForm';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import { initialPosts, type PostCardProps } from '../data/initialPosts';

export default function CreatePostPage() {
  const [posts, setPosts] = useLocalStorage<PostCardProps[]>(
    'posts',
    initialPosts
  );

  const handleAddPost = (newPost: PostCardProps) => {
    setPosts([newPost, ...posts]);
  };

  return <PostForm onAddPost={handleAddPost} />;
}
