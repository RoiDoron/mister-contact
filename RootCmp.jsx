const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux


import { AppFooter } from './cmp/AppFooter.jsx'
import { AppHeader } from './cmp/AppHeader.jsx'
import { ContactDetails } from './view/ContactDetails.jsx'


export function App() {
    return (
        <Provider>
            <Router>
                <div>
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route element={<ContactDetails />} path="/contact/:contactID" />
                        </Routes>
                    </main>
                    <AppFooter />
                </div>
            // </Router>
        // </Provider>
    )
}