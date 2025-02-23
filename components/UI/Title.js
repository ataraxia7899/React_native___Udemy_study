/* 자주 쓰이는 제목 디자인 컴포넌트화 */

import { Text, StyleSheet } from 'react-native';

import Colors from '../../util/Colors';

export default function ({ children }) {
	return <Text style={styles.titlestyle}>{children}</Text>;
}

const styles = StyleSheet.create({
	titlestyle: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		// fontWeight: 'bold',
		color: '#C5D86D',
		textAlign: 'center',
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 12,
		marginHorizontal: 10,
		maxWidth: '80%', // 최대 너비 설정정
	},
});
