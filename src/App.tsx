import './App.css'
import '@mantine/core/styles.css';
import { Navigate, Route, Routes } from 'react-router';
import VacancyPage from './components/VacancyPage/VacancyPage';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';
import Layout from './components/Layout/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='vacancies' replace />} />
					<Route path='vacancies' element={<HomePage />} />
					<Route path='vacancies/moscow' element={<HomePage city='1' />} />
					<Route path='vacancies/petersburg' element={<HomePage city='2' />} />
					<Route path='vacancies/orenburg' element={<HomePage city='70' />} />
					<Route path='vacancies/:id' element={<VacancyPage />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	)
}
export default App
