import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../util/Colors';

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width; // 접속한 기기의 너비를 알 수 있는 Dimensions 라이브러리 사용

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.myColor2,
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		fontFamily: 'open-sans-bold',
		color: Colors.myColor1,
		fontSize: 36,
		fontWeight: 'bold',
	},
});
