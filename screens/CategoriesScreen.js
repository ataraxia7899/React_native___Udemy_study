import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
	return (
		<CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
	);
}
// 위의 함수는 다시 렌더링 혹은 다시 생성할 필요가 없으므로 컴포넌트 함수 밖에서 정의됨

export default function CategoriesScreen() {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2} // 열을 강제로 추가
		/>
	);
}
