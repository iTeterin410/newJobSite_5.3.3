import { Box, Text, Image } from '@mantine/core'
import logo from '../../assets/logo_hh.svg'
import userLogo from '../../assets/user-circle.svg'
// import ellipse from '../../assets/Ellipse.svg'
import styles from './Header.module.css'
import { NavLink } from 'react-router'

export default function Header() {

	return (
		<Box className={styles.header}>
			<Box>
				<Box className={styles.header_logo}>
					<Image className={styles.header_icon} src={logo} alt='logo' />
					<Text className={styles.header_text}>
						.FrontEnd
					</Text>
				</Box>
			</Box>
			<Box className={styles.header_info}>
				<NavLink to='/vacancies' className={({ isActive }) => isActive ? `${styles.vacanciesActive}` : `${styles.vacancies}`}>
					<Text className={styles.text}>
						Вакансии FE
					</Text>

				</NavLink>
				<NavLink to='/about' className={({ isActive }) => isActive ? `${styles.aboutActive}` : `${styles.about}`}>
					<Image className={styles.image} src={userLogo} alt='userLogo' />
					<Text className={styles.text}>Обо мне</Text>
				</NavLink>
			</Box>
		</Box>
	)
}
