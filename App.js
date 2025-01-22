import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
// import GameScreen from './screens/GameScreen';
// import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	return (
		<>
			<StartGameScreen />
			<StatusBar style="white" />
		</>
	);
}

const styles = StyleSheet.create({});
