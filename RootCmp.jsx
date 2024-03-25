const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { AppFooter } from './cmp/AppFooter.jsx'
import { AppHeader } from './cmp/AppHeader.jsx'
import { store } from './store/store.js'
import { ContactDetails } from './view/ContactDetails.jsx'
import { ContactIndex } from './view/ContactIndex.jsx'

export function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route path="/contact" element={<ContactIndex />} />
                            <Route element={<ContactDetails />} path="/contact/:contactId" />
                        </Routes>
                    </main>
                    <AppFooter />
                </div>
            </Router>
        </Provider>
    )
}