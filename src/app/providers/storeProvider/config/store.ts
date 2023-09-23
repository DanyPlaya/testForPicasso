import { baseApi } from "@/shared/api";
import { StateSchema } from "./stateSchema";
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'


export function createStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [baseApi.reducerPath]: baseApi.reducer,
    }
    const store = configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
    })
    return store
}
export type AppDispatch = ReturnType<typeof createStore>['dispatch']