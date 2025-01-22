/* 시작 화면 -> 맞혀야하는 숫자를 고르고 게임을 시작하는 화면 */

import { StyleSheet, Text, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput />
			<PrimaryButton>초기화</PrimaryButton>
			<PrimaryButton>확인</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		marginTop: 100,
		padding: 16,
        backgroundColor: "#72063c"
	},
});
