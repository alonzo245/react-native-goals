import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

const GoalInput = props => {
    const [inputText, setInputText] = useState("")

    const textInputHandler = goal => {
        setInputText(goal)
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inputText}
                onChangeText={textInputHandler}
                value={inputText.value}
            />
            <Button
                title="Add Goal"
                style={styles.addButton}
                onPress={()=>props.onAddGoal(inputText)} />
        </View>)
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    inputText: {
        width: '80%',
        borderWidth: 1
    },
    addButton: {
        width: '20%'
    }
});

export default GoalInput