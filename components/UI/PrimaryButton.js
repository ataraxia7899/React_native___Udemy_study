/* 커스텀 버튼 컴포넌트 */

import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../util/Colors.js';

export default function PrimaryButton(props) {
	function pressHandler() {
		props.Press(); // props로 받은 press 함수 실행
	}

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={
					({ pressed }) =>
						pressed
							? [styles.buttonInnerContainer, styles.Pressed] // 버튼이 눌렸을때 (참일때)
							: styles.buttonInnerContainer // 버튼이 눌리지 않았을때 (거짓일때)
				}
				onPress={props.Press} // 버튼을 눌렀을때 실행할 함수
				android_ripple={{ color: Colors.primary600 }} // 안드로이드용 눌림 효과 색상
			>
				<Text
					style={[
						styles.buttonText,
						props.fontsize && { fontSize: props.fontsize }, // props로 fontsize가 있으면 적용
					]}
				>
					{props.children}
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28, // 버튼 모서리 둥글게
		margin: 4, // 버튼 간 여백
		overflow: 'hidden', // 버튼의 자식 컴포넌트가 버튼을 벗어나지 못하도록 함
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500, // 배경색
		paddingVertical: 8, // 버튼 상하 여백
		paddingHorizantal: 16, // 버튼 좌우 여백
		elevation: 2, // 안드로이드용 그림자 생성 프로퍼티
		shadowColor: 'black', // ios용 그림자 색
		shadowOffset: { width: 0, height: 2 }, // ios용 그림자 크기
		shadowRadius: 6, // ios용 그림자 둥근정도
		shadowOpactiy: 0.26, // ios용 그림자 투명도
		height: '100%',
		justifyContent: 'center', // 수평 가운데 정렬
	},
	buttonText: {
		color: 'white', // 글씨색
		textAlign: 'center', // 글씨 정렬
		fontsize: 20, // 글씨 크기
	},
	Pressed: {
		opacity: 0.75, // 버튼이 눌렸을때 투명도도
	},
});
