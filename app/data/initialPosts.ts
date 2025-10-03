export interface PostCardProps {
  id: string;
  title: string;
  author: string;
  date?: Date;
  excerpt: string;
  content: string;
}

export const initialPosts: PostCardProps[] = [
  {
    id: '1',
    title: 'Một ngày của tôi',
    author: 'Hồ Sỹ Thảo',
    date: new Date('2025-10-03'),
    excerpt:
      'Chia sẻ về một ngày bình thường nhưng đầy ý nghĩa trong cuộc sống của tôi...',
    content:
      'Hôm nay là một ngày đặc biệt đối với tôi. Tôi thức dậy từ sớm với tinh thần thoải mái và tràn đầy năng lượng. Buổi sáng, tôi dành thời gian để uống cà phê và đọc báo, cảm nhận không khí trong lành của một ngày mới. Sau đó, tôi bắt đầu công việc lập trình với nhiều nhiệm vụ thú vị. Buổi trưa, tôi có bữa ăn ngon cùng gia đình và chia sẻ những câu chuyện vui vẻ. Buổi chiều, tôi tiếp tục làm việc và học hỏi những công nghệ mới. Tối đến, tôi dành thời gian cho sở thích cá nhân và chuẩn bị cho ngày mai. Đây thực sự là một ngày tuyệt vời và ý nghĩa.',
  },
  {
    id: '2',
    title: 'Giới thiệu về React',
    author: 'Nguyễn Văn A',
    date: new Date('2025-09-29'),
    excerpt:
      'React là một thư viện JavaScript để xây dựng giao diện người dùng...',
    content:
      'React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được phát triển bởi Facebook và được sử dụng rộng rãi trong cộng đồng phát triển web. React cho phép bạn tạo các thành phần giao diện người dùng có thể tái sử dụng và quản lý trạng thái một cách hiệu quả. Với kiến trúc component-based, React giúp phát triển ứng dụng web một cách dễ dàng và maintainable.',
  },
  {
    id: '3',
    title: 'Hướng dẫn sử dụng TypeScript',
    author: 'Trần Văn B',
    date: new Date('2025-09-28'),
    excerpt:
      'TypeScript là một siêu ngôn ngữ của JavaScript giúp phát hiện lỗi sớm...',
    content:
      'TypeScript là một siêu ngôn ngữ của JavaScript giúp phát hiện lỗi sớm và cải thiện trải nghiệm phát triển. Nó cung cấp các tính năng như kiểu tĩnh, lớp, giao diện và nhiều hơn nữa. TypeScript được biên dịch thành JavaScript, vì vậy bạn có thể sử dụng nó trong bất kỳ môi trường nào hỗ trợ JavaScript. Điều này giúp code trở nên robust và dễ maintain hơn.',
  },

  {
    id: '4',
    title: 'Trải nghiệm học lập trình online',
    author: 'Phạm Thị D',
    date: new Date('2025-09-26'),
    excerpt:
      'Chia sẻ kinh nghiệm học lập trình qua các khóa học online và tự học...',
    content:
      'Học lập trình online đã trở thành xu hướng phổ biến trong thời đại công nghệ 4.0. Tôi đã trải qua nhiều khóa học khác nhau từ cơ bản đến nâng cao. Điều quan trọng nhất là phải thực hành thường xuyên và xây dựng các project thực tế. Các platform như freeCodeCamp, Coursera, Udemy đều cung cấp nội dung chất lượng cao. Tuy nhiên, cần có kỷ luật và động lực để duy trì việc học.',
  },
];
