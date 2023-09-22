import { MainPage } from "@/pages/main";
import { NotFound } from "@/pages/notFound";
import { PostDetails } from "@/pages/postDetails";
import { type AppRoutes, getRouteMain, getRoutePostDetails } from "@/shared/consts/router";
import { RouteProps } from "react-router-dom";

export const routeConfig:Record<AppRoutes,RouteProps> ={
    main:{
        path: getRouteMain(),
        element: <MainPage/>
    },
    notFound:{
        path: '*',
        element: <NotFound/>
    },
    postDetail:{
        path:getRoutePostDetails('/id'),
        element: <PostDetails/>
    }
}
