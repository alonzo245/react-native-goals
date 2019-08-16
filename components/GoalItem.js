import React from 'react';
import { Text, View,  StyleSheet} from 'react-native';

const GoalItem = props => {
    return(<View key={props.itemData.item.key} style={styles.listItem}>
        <Text style={styles.item}>{props.itemData.item.value}</Text>
      </View>)
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