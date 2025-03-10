import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// 스크린으로 등록되었는지 상관없이 navigation 객체를 제공함

export default function CategoryGridTile(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ Color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonPressed,
				]}
				// 참일 경우 스타일에 buttonPressed를 추가
				onPress={props.onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: props.color }]}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8, // 경계선 굴곡
		elevation: 4, // Android에 그림자 추가
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
