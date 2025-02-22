/* 키보드외의 영역을 클릭했을때 키보드를 숨기는 컴포넌트 */

import React from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
// TouchableWithoutFeedback 컴포넌트는 사용자가 화면을 터치할 때 일어나는 이벤트를 감지하는 컴포넌트

export default function KeyboardDismiss({ children }) {
	// Keyboard.dismiss() 함수는 키보드를 숨기는 함수
	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			// onPress 프로퍼티에 Keyboard.dismiss() 함수를 넣어 키보드를 숨기도록 함
			accessible={false}
			// accessible={false} 프로퍼티는 터치 이벤트를 감지할 때 접근성을 무시하도록 함
			style={styles.Touchable}
		>
			{children}
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	Touchable: {
		flex: 1, // 최대한 많은 공간을 차지
	},
});
