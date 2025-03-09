import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync('#24180f');
// expo-system-ui를 사용해 배경색을 설정

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<CategoriesScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 36,
	},
});
