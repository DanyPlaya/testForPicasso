import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { ReactNode } from "react"

type StoreProviderProps = {
    children: ReactNode
}
export const StoreProvider = (props:StoreProviderProps) =>{
    const {children} = props
    const store = createStore()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}