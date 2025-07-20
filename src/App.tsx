
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Providers } from './components/providers'
import { Modals } from './components/modals'
import { Toaster } from './components/ui/sonner'
import DashboardLayout from './app/(dashboard)/layout'
import Home from './app/(dashboard)/page'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Providers>
          <Toaster />
          <Modals />
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        </Providers>
      </BrowserRouter>
    </Provider>
  )
}

export default App
