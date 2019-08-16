import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoal] = useState([])

  const addGoalHandler = goalTitle => {
    setGoal(goals => [...goals,
    { id: Math.random().toString(), value: goalTitle }]);
    // setInputText('')
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => index.id}
        data={goals}
        renderItem={itemData => <GoalItem itemData={itemData} />}
      />

      {/* <ScrollView >
        {goals && goals.map((goal, i) => <View  key={i}style={styles.listItem}>
          <Text style={styles.item}>{goal}</Text>
          </View>)}
      </ScrollView>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  
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
