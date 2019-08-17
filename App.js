import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([{ id: Math.random().toString(), value: 'dddd' }])
  const [modalToggle, setModalToggle] = useState(false)


  const addGoalHandler = goalTitle => {
    setGoals(goals => [...goals,
    { id: Math.random().toString(), value: goalTitle }]);
    setModalToggle(false)
    // setInputText('')
  }


  const cancelHandler = () => {
    setModalToggle(false)
  }


  const deleteGoalHandler = goalId => {
    setGoals(currentGoals => goals.filter(goal => goal.id !== goalId));
  }

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setModalToggle(true)} />
      <GoalInput
        visible={modalToggle}
        onAddGoal={addGoalHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem
          onDeleteGoal={deleteGoalHandler}
          itemData={itemData}
        />}
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
