import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './components/screens/CategoriesScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<CategoriesScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 36
	},
});
