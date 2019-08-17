import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onDeleteGoal.bind(this, props.itemData.item.id)}>
            <View  style={styles.listItem}>
                <Text style={styles.item}>{props.itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        backgroundColor: 'gray',
        marginVertical: 10,
        padding: 10,
    },
    item: {
        color: '#ffffff'

    }
});

export default GoalItem