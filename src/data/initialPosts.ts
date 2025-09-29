export type PostCardProps = {
  id: string;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
};

export const initialPosts: PostCardProps[] = [
  {
    id: '1',
    title: 'Giới thiệu về React',
    author: 'Nguyễn Văn A',
    date: new Date('2025-09-29'),
    excerpt:
      'React là một thư viện JavaScript để xây dựng giao diện người dùng...',
  },
  {
    id: '2',
    title: 'Hướng dẫn sử dụng TypeScript',
    author: 'Trần Văn B',
    date: new Date('2025-09-28'),
    excerpt:
      'TypeScript là một siêu ngôn ngữ của JavaScript giúp phát hiện lỗi sớm...',
  },
  {
    id: '3',
    title: 'Tối ưu hiệu suất ứng dụng web',
    author: 'Lê Văn C',
    date: new Date('2025-09-27'),
    excerpt:
      'Tối ưu hiệu suất ứng dụng web là một trong những yếu tố quan trọng để cải thiện trải nghiệm người dùng...',
  },
];
