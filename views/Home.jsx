import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, ScrollView, TextInput, Button, Text, View } from "react-native";

import { Task, FilterContainer } from "../components";

const data = [
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    completed: false,
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    completed: false,
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    completed: false,
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    completed: false,
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    completed: false,
    username: "sam",
    createdAt: "20-10-2021"
  },
];
const filterList = ["data", "science", "web", "front", "back", "data", "science", "web", "front", "back", "data", "science", "web", "front", "back"];

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState(data || []);

    const onLoad = () => {
        console.log('load personal data from api')
    };

    useEffect(() => {
        onLoad();
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FilterContainer filterList={filterList} />

      <ScrollView style={styles.tasks} >
        { tasks.map((task) => <Task data={task} onPress={() => navigation.navigate('TaskDetails', data[1])} />) }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    fontFamily: 'nunito-bold',
    padding: 16
  },
  text: {
    fontSize: 16,
    padding: 16
  },
  tasks: {
    marginVertical: 20
  }
});

export default Home;