/* 게임이 종료되었을때 화면 */
import { View, Text, StyleSheet, Image } from 'react-native';

import Title from '../components/UI/Title';
import Colors from '../util/Colors';

import PrimaryButton from '../components/UI/PrimaryButton';

export default function GameOverScreen(props) {
	return (
		<View style={styles.ViewStyle}>
			<Title>게임 종료</Title>
			<View style={styles.rootContainer}>
				<View style={styles.ImageContainer}>
					<Image
						source={require('../assets/images/success.png')}
						style={styles.ImageStyle}
					/>
				</View>
				<Text style={styles.summaryText}>
					당신의 폰은 <Text style={styles.highlight}>{props.roundsNumber}</Text>
					번의 추측 끝에
					{'\n'}정답인 <Text style={styles.highlight}>{props.userNumber}</Text>
					에 도달하였습니다.
				</Text>
				<View style={styles.buttonContainer}>
					<PrimaryButton Press={props.onStartNewGame}>
						새 게임 시작하기
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 150,
	},
	ViewStyle: {
		flex: 1,
		marginTop: 20,
	},
	TextStyle: {
		fontsize: 24,
	},
	ImageContainer: {
		width: 300, // 이미지의 너비
		height: 300, // 이미지의 높이
		borderRadius: 200, // 이미지 모서리의 반지름
		borderWidth: 3, // 이미지 테두리의 너비
		borderColor: Colors.primary800, // 이미지 테두리의 색상
		overflow: 'hidden', // 이미지의 넘치는 부분을 숨김
		marginVertical: 10, // 위아래 여백
		// margin: 36, // 위아래, 좌우 여백
	},
	ImageStyle: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		footFamily: 'open-sans',
		fontSize: 28,
		textAlign: 'center',
		marginVertical: 24, // 위아래 여백
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
	buttonContainer: {
		width: '80%',
		height: '10%',
		marginTop: '2%',
	},
});
