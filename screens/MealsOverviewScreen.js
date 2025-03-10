import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function (props) {
	const CategoryId = props.route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(CategoryId) >= 0;
		// mealItem의 categoryIds에서 카테고리Id의 인덱스값을 확인하고 0보다 크거나 같으면 True
	});

	function renderMealItem(itemData) {
		const item = itemData.item;

		const mealItemProps = {
			title: item.title,
			imageUri: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		// 왼쪽이 프로퍼티 이름, 오른쪽이 프로퍼티 값

		return <MealItem {...mealItemProps} />;
		// mealItemProps를 불러와 해당 객체의 모든 값들이 컴포넌트의 프로퍼티로 배분되어 사용됨
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
