import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [inputText, setInputText] = useState("aaaa")

    const textInputHandler = goal => {
        setInputText(goal)
    }

    const submitGoal = () => {
        props.onAddGoal(inputText)
        setInputText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.wrapper}>
                <TextInput style={styles.inputText}
                    onChangeText={textInputHandler}
                    value={inputText.value}
                />
                <Button
                    title="CANCEL"
                    color="red"
                    style={styles.addButton}
                    onPress={props.onCancel} />
                
                <Button
                    title="Add"
                    style={styles.addButton}
                    onPress={submitGoal} />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        width: '80%',
        borderWidth: 1,
        paddingBottom: 10,
    },
    addButton: {
        width: '20%'
    }
});

export default GoalInput