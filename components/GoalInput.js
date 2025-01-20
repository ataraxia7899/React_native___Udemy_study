import { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from 'react-native';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="당신의 목표를 적어주세요!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="기록하기" onPress={addGoalHandler} color="lightblue" />
                    </View>
                    <View style={styles.button}>
                        <Button title="취소" onPress={props.onCancel} color="#bf0125" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'gray',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#d1d1cd',
        backgroundColor: "#d1d1cd",
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 16,
    },
    button: {
        marginHorizontal: 8,
        width: '100',
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
});
