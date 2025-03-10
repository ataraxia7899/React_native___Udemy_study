import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Platform,
} from 'react-native';

export default function (props) {
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => pressed && styles.buttonPressed}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: props.imageUri }} style={styles.image} />
						<Text style={styles.title}>{props.title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{props.duration}분</Text>
						<Text style={styles.detailItem}>
							{props.complexity.toUpperCase()}
						</Text>
						<Text style={styles.detailItem}>
							{props.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
		// 그림자와 다른 컨테이너에 설정되어 overflow를 설정해도 ios에서도 그림자가 생김
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		margin: 8,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
