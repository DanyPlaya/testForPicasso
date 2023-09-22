export type AppRoutes = 'main' | 'postDetail'| 'notFound' 
export const getRouteMain = () => '/';
export const getRoutePostDetails = (id: string) => `/posts/${id}`;
