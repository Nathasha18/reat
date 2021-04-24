import * as React from 'react';
import{ useState} from "react";
import { StyleSheet, Text, View, Button,ImageBackground, TouchableWithoutFeedback, FlatList, Keyboard, Alert} from 'react-native';
import bg from './assets/bg.jpeg';
import { NavigationContainer } from '@react-navigation/native';


import TodoItem from './Components/Todoitem';
import AddTodo from './Components/Addtodo';

export default function Tasks( ) {
  const [todos, setTodos] = useState([
    
   
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 0)
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
    
  };

 
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
     
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

