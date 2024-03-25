const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { AppFooter } from './cmp/AppFooter.jsx'
import { AppHeader } from './cmp/AppHeader.jsx'

export function App() {
    return (
        // <Provider>
            // <Router>
                <div>
                    <AppHeader />
                    <main>
                    
                    </main>
                    {/* <AppFooter /> */}
                </div>
            // </Router>
        // </Provider>
    )
}