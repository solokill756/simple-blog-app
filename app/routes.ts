import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.tsx'),
  route('about', 'routes/about.tsx'),
  route('create-post', 'routes/create-post.tsx'),
  route('postcard/:id', 'routes/postcard/$id.tsx'),
] satisfies RouteConfig;
