import { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';
import { StatusBar } from "expo-status-bar";

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);
    const [addCount, setAddCount] = useState(0);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    }

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        setAddCount(addCount + 1);
        setModalIsVisible(false);
        endAddGoalHandler();
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    };

    const updateCountHandler = () => {
        
    }

    return (
        <>
        <StatusBar style="light" />
        <View style={styles.appContainer}>
            <View style={styles.textView}>
                <Text style={styles.TextStyle}>기록한 목표 수</Text>
                <Text style={styles.textStyle}>{addCount}</Text>
            </View>
            <Button title="새로운 목표 추가" color="#5e0acc" onPress={startAddGoalHandler} />
            <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.key;
                    }}
                />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
        backgroundColor: "gray"
    },
    goalsContainer: {
        flex: 4,
    },
    textView: {
        paddingVertical: 40,
    },
    TextStyle: {
        fontSize: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        color: "#5e0acc"
    },
    textStyle: {
        padding: 5,
        fontSize: 60,
        alignSelf: "center",
        color: "#5e0acc"
    }
});
