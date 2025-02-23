/* 실질적인 게임을 담당하는 화면 */
/* 휴대폰이 추측한 숫자를 확인하고 정답과의 차이를 힌트를 주는 화면 */

import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // 아이콘 라이브러리

import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title';
import NumberContainer from '../components/Game/NumberContainer';
import Colors from '../util/Colors';
import GuessLogItem from '../components/Game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	// 0과 1 사이의 난수를 생성해 최댓값과 최솟값 차이를 곱해 난수로 전환

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
	// 배제된 숫자와 일치하지 않는 난수가 도출될 때까지 작업을 계속하여 배제된 숫자가 아닌 값이 나오면 난수 반환
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
	const initialGuess = generateRandomBetween(1, 100, props.userNumber); // 초기 추측값 설정 (1~100 사이의 난수)
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		// currentGuess, props.userNumber, props.onGameOver 중 하나라도 변경되면 실행
		if (currentGuess === props.userNumber) {
			// 정답을 맞추었을때
			props.onGameOver(guessRounds.length);
		}
	}, [currentGuess, props.userNumber, props.onGameOver]);

	useEffect(() => {
		// 컴포넌트가 렌더링 될 때마다 실행해서 최댓값과 최솟값을 초기화
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	function nextGuessHandler(direction) {
		// direction: "낮음" or "높음"
		if (
			// 잘못된 정보를 주었을 때
			(direction === '낮음' && currentGuess < props.userNumber) ||
			(direction === '높음' && currentGuess > props.userNumber)
		) {
			Alert.alert('거짓말은 나빠요!', '잘못된 정보를 주면 안돼요', [
				{ text: '알겠어요', style: 'cancel' },
			]);
			return;
		}

		if (direction === '낮음') {
			// 해당 숫자보다 낮다면 최댓값을 현재 추측값으로 변경
			maxBoundary = currentGuess; // 최댓값을 현재 추측값으로 변경하지만 현재 값도 정답이 아니기에 1을 빼줘야하는데 해당 작업은 generateRandomBetween()에서 처리
		} else {
			// 해당 숫자보다 높다면 최솟값을 현재 추측값으로 변경
			minBoundary = currentGuess + 1; // 최솟값을 현재 추측값으로 변경하지만 현재 값도 정답이 아니기에 1을 더해줌
		}
		const newRndNum = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNum);
		setGuessRounds((preGuessRounds) => [newRndNum, ...preGuessRounds]);
	}

	const guessRoundsListLength = guessRounds.length;

	return (
		<View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
			<Title>CPU의 추측</Title>
			<View style={styles.screenstyle}>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.card}>
					<Text style={styles.TextStyle}>
						생각하신 숫자보다 {'\n'}
						<Text style={{ color: Colors.plus }}>크나요?</Text>{' '}
						<Text style={{ color: Colors.minus }}>작나요?</Text>
					</Text>
					<View style={styles.buttonViewStyle}>
						<View style={styles.buttonContainer}>
							<PrimaryButton
								Press={nextGuessHandler.bind(this, '높음')}
								fontsize={20}
							>
								{/* 높음 */}
								<FontAwesome name="plus" size={24} color={Colors.plus} />
							</PrimaryButton>
						</View>
						<View style={styles.buttonContainer}>
							<PrimaryButton
								Press={nextGuessHandler.bind(this, '낮음')}
								fontsize={20}
							>
								{/* 낮음 */}
								<FontAwesome name="minus" size={24} color={Colors.minus} />
							</PrimaryButton>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.listContainer}>
				{/* {guessRounds.map((guessRound) => (
					<Text key={guessRound}>{guessRound}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsListLength - itemData.index} // 추측 횟수
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screenstyle: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
	},
	TextStyle: {
		fontSize: 33,
		textAlign: 'center',
		marginVertical: 10, // 상하 여백
		fontWeight: 'bold', // 굵은 글씨
		color: 'white', // 글씨 색
		textShadowColor: 'black', // 그림자 색
		textShadowOffset: { width: 0, height: 2 }, // 그림자 크기
		textShadowRadius: 6, // 그림자 둥근 정도
		textShadowOpacity: 1, // 그림자 투명도
	},
	buttonViewStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: '45%',
		// backgroundColor: 'red',
	},
	buttonContainer: {
		flex: 1, // 최대한 많은 공간을 차지하게 함함
		marginHorizontal: 4, // 버튼 간 여백
		// paddingBlock: 10, // 버튼 상하 여백
		marginTop: 20, // 버튼 위 여백
		height: '60%',
		// backgroundColor: 'red',
	},
	card: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		// marginHorizontal: 10,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		height: 250,
		elevation: 4, // 안드로이드용 그림자 생성 프로퍼티
		shadowColor: 'block', // ios용 그림자 생성 프로퍼티 (색)
		shadowOffset: { width: 0, height: 2 }, // ios용 그림자 생성 프로퍼티 (크기)
		shadowRadius: 0, // ios용 그림자 생성 프로퍼티 (둥근정도)
		shadowOpacity: 1, // ios용 그림자 생성 프로퍼티 (투명도)
	},
	listContainer: {
		width: '100%',
		height: '30%',
		padding: 16,
		// backgroundColor: 'red',
		overflow: 'hidden', // 이 속성을 제거하여 자식 컴포넌트가 넘칠 경우 스크롤 가능하게 함
	},
});
