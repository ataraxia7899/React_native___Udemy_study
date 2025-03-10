import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 네이티브 스택이 애니메이션과 화면에 대해 네이티브 플랫폼 요소를 사용해서 네이티브 동작을 흉내내는 것보다 성능이 높을 수 있다.
// 또한 네이티브 스택을 사용하는데 문제가 생긴다면 스택 기반 내비게이션을 제공하는 스택으로 폴백할 수도 있다.

import CategoriesScreen from './screens/CategoriesScreen';
// import * as SystemUI from 'expo-system-ui';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

// SystemUI.setBackgroundColorAsync('#24180f');
// // expo-system-ui를 사용해 배경색을 설정

const Stack = createNativeStackNavigator();
// 여러 화면이 쌓인 스택

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<NavigationContainer>
				{/* 앱 전체를 네비게이션할 수 있도록 해당 패키지를 스크린 전체에 감싼다. */}
				<Stack.Navigator
					screenOptions={{
						// Stack.Navigator의 screenOption을 통해 기본 스타일링 설정
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						// 뒤로 가기 버튼과 제목 색
						contentStyle: { backgroundColor: '#3f2f25' },
						// 배경색을 포함해서 모든 스타일링 관련 옵션이 있음
					}}
				>
					<Stack.Screen
						name="MealCategories"
						component={CategoriesScreen}
						options={{
							title: '음식 종류',
						}}
					/>
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={() => {}} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 36,
	},
});
