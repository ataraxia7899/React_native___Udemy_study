/* 시작 화면 -> 맞혀야하는 숫자를 고르고 게임을 시작하는 화면 */

import { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Alert } from 'react-native';

import KeyboardDismiss from '../components/KeyboardDismiss';
import PrimaryButton from '../components/UI/PrimaryButton';

import Title from '../components/UI/Title';
import Colors from '../util/Colors';

export default function StartGameScreen(props) {
	const [enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(inputText) {
		// 입력한 숫자를 저장하는 함수
		setEnteredNumber(inputText);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		// 입력한 숫자가 1~99 이하의 숫자인지 확인하는 함수
		const chooseNumber = parseInt(enteredNumber);
		// parseInt() 함수는 문자열을 정수로 변환하는 함수로 자바스크립트와 리엑트 네이티브에서 사용 가능

		if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
			// chooseNumber이 숫자가 아니라서 변환에 실패하거나 0부터 99사이의 값이 아니라면 True가 반환되어 알림 창을 띄움
			Alert.alert(
				'잘못된 숫자가 입력되었습니다',
				'1부터 99사이의 숫자를 다시 입력해주세요',
				[{ text: '확인', style: 'default', onPress: resetInputHandler }] // 확인 버튼을 누르면 입력한 숫자 초기화
			);
			return;
			// return 문을 사용하여 함수를 종료시킴
		}
		props.onPickNumber(chooseNumber);
	}

	return (
		<KeyboardDismiss>
			<View style={styles.rootContainer}>
				<Title>게임 시작화면</Title>
				<View style={styles.viewstyle}>
					<View style={styles.ViewInputStyle}>
						<Text style={styles.textStyle}>CPU가 맞추는 추리게임</Text>
						<Text style={styles.instructionText}>
							1~99사이의 숫자를 입력해주세요
						</Text>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={numberInputHandler}
							value={enteredNumber}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton color={'#4AA8D8'} Press={resetInputHandler}>
									초기화
								</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton Press={confirmInputHandler}>확인</PrimaryButton>
							</View>
						</View>
					</View>
				</View>
			</View>
		</KeyboardDismiss>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
	},
	viewstyle: {
		flex: 1,
		justifyContent: 'center', // 수평 가운데 정렬
		alignItems: 'center', // 수직 가운데 정렬
	},
	textStyle: {
		padding: 16,
		color: '#dbb4c8',
		fontSize: 32,
		fontWeight: 'bold',
		// marginBottom: 20,
	},
	ViewInputStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		height: '48%',
		elevation: 4, // 안드로이드용 그림자 생성 프로퍼티
		shadowColor: 'block', // ios용 그림자 생성 프로퍼티 (색)
		shadowOffset: { width: 0, height: 2 }, // ios용 그림자 생성 프로퍼티 (크기)
		shadowRadius: 0, // ios용 그림자 생성 프로퍼티 (둥근정도)
		shadowOpacity: 1, // ios용 그림자 생성 프로퍼티 (투명도)
		marginBottom: 140,
	},
	numberInput: {
		height: 60, // 입력란 상자의 높이
		width: 70, // 입력란 상자의 너비
		fontSize: 40, // 글씨 크기
		borderBottomColor: Colors.accent500, // 아래 경계선 색
		borderBottomWidth: 2, // 아래 경계선 두께
		color: Colors.accent500, // 글씨색
		// marginVertical: 50, // 위아래 여백 크기
		fontWeight: 'bold', // 글씨 굵기
		textAlign: 'center', // 글씨 정렬
		marginTop: '5%', // 위 여백
	},
	buttonsContainer: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row', // 버튼을 가로로 나열
	},
	buttonContainer: {
		flex: 1, // 최대한 많은 공간을 차지하게 함함
		marginHorizontal: 4, // 버튼 간 여백
		paddingBlock: 10, // 버튼 상하 여백
		// marginTop: 5, // 버튼 위 여백
		height: '70%',
		// backgroundColor: 'red',
	},
	instructionText: {
		color: Colors.accent500,
		fontSize: 24,
		fontFamily: 'open-sans',
	},
});
