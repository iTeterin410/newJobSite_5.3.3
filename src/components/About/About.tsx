import { Box, Text } from "@mantine/core"
import styles from './About.module.css'

const About = () => {
	return (
		<Box pb={500}>
			<Box className={styles.About} >
				<Text className={styles.title}>
					Тетерин Игорь
				</Text>
				<Text className={styles.text}>
					Привет! Я - Frontend-разработчик. Пишу приложения на React + TypeScript + Redux Toolkit.
				</Text>
			</Box>
		</Box>
	)
}

export default About