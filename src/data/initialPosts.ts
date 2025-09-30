export type PostCardProps = {
  id: string;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
  content: string;
};

export const initialPosts: PostCardProps[] = [
  {
    id: '1',
    title: 'Giới thiệu về React',
    author: 'Nguyễn Văn A',
    date: new Date('2025-09-29'),
    excerpt:
      'React là một thư viện JavaScript để xây dựng giao diện người dùng...',
    content:
      'React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được phát triển bởi Facebook và được sử dụng rộng rãi trong cộng đồng phát triển web. React cho phép bạn tạo các thành phần giao diện người dùng có thể tái sử dụng và quản lý trạng thái một cách hiệu quả...',
  },
  {
    id: '2',
    title: 'Hướng dẫn sử dụng TypeScript',
    author: 'Trần Văn B',
    date: new Date('2025-09-28'),
    excerpt:
      'TypeScript là một siêu ngôn ngữ của JavaScript giúp phát hiện lỗi sớm...',
    content:
      'TypeScript là một siêu ngôn ngữ của JavaScript giúp phát hiện lỗi sớm và cải thiện trải nghiệm phát triển. Nó cung cấp các tính năng như kiểu tĩnh, lớp, giao diện và nhiều hơn nữa. TypeScript được biên dịch thành JavaScript, vì vậy bạn có thể sử dụng nó trong bất kỳ môi trường nào hỗ trợ JavaScript...',
  },
  {
    id: '3',
    title: 'Tối ưu hiệu suất ứng dụng web',
    author: 'Lê Văn C',
    date: new Date('2025-09-27'),
    excerpt:
      'Tối ưu hiệu suất ứng dụng web là một trong những yếu tố quan trọng để cải thiện trải nghiệm người dùng...',
    content:
      'Tối ưu hiệu suất ứng dụng web là một trong những yếu tố quan trọng để cải thiện trải nghiệm người dùng. Các kỹ thuật tối ưu bao gồm giảm kích thước tệp, sử dụng bộ nhớ đệm, tải lười và tối ưu hóa hình ảnh. Bằng cách áp dụng các kỹ thuật này, bạn có thể giảm thời gian tải trang và cải thiện hiệu suất tổng thể của ứng dụng web...',
  },
];
