import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.tsx'),
  route('about', 'routes/about.tsx'),
  route('postcard/:id', 'routes/postcard/$id.tsx'),
] satisfies RouteConfig;
