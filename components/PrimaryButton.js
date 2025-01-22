/* 커스텀 버튼 컴포넌트 */

import { View, Text } from 'react-native';

export default function PrimaryButton(props) {
    return(
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}