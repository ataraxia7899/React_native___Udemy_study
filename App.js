import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // 그라데이션 배경을 위한 라이브러리
import { useFonts } from 'expo-font'; // 폰트를 사용하기 위한 라이브러리
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import KeyboardDismiss from './components/KeyboardDismiss';
import Colors from './util/Colors';

export default function App() {
	const [userNumber, setUserNumber] = useState(); // 사용자가 선택한 숫자를 저장하는 state
	const [gameIsOver, setGameIsOver] = useState(false); // 게임이 종료되었는지 확인하는 state
	const [guessRounds, setGuessRounds] = useState(0); // 게임의 라운드 수를 세는 state

	const [fontsLoaded] = useFonts({
		// 폰트를 불러오는 함수 useFonts()를 사용하여 폰트를 불러옴
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		// 폰트가 로드되지 않았을 때 AppLoading 컴포넌트를 렌더링
		return <AppLoading />;
	}

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(NumberofRounds) {
		setGameIsOver(true);
		setGuessRounds(NumberofRounds);
	}

	function StartNewGameHandler() {
		setGameIsOver(false);
		setUserNumber(null);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver === true && userNumber) {
		// 게임이 종료되었을때 GameOverScreen을 렌더링
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRounds}
				onStartNewGame={StartNewGameHandler}
			/>
		);
	}

	return (
		<KeyboardDismiss>
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode="cover" // 이미지가 찌그러지지 않도록 설정
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={styles.rootScreen}>
						{/* SafeAreaView로 실행 중인 장치를 자동으로 감지하고 노치와 상태 표시줄과 콘텐츠 사이에 적절한 간격을 자동으로 추가해줌 */}
						{screen}
						{/* screen 변수에 저장된 화면을 렌더링 */}
					</SafeAreaView>
				</ImageBackground>
				<StatusBar style="default" />
			</LinearGradient>
		</KeyboardDismiss>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1, // 최대한 많은 공간을 차지
	},
	backgroundImage: {
		opacity: 0.15, // 85% 투명도로 설정
	},
});
