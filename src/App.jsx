import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HomePage } from './components/Home.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/super-heroes' element={<SuperHeroesPage />} />
            <Route exact path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    </>
  )
}

export default App
