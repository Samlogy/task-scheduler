import React, {useState, useEffect} from "react";
import { StyleSheet, ScrollView, Dimensions, SafeAreaView } from "react-native";

import { Task, Filter } from "../components";

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const filters = [
  {label: "Data", value: "data"},
  {label: "Science", value: "science"},
  {label: "Web", value: "web"},
  {label: "Front", value: "front"},
  {label: "Back", value: "back"},
]; 

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

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState(data || []);

    const onLoad = () => {
        console.log('load personal data from api')
    };

    // useEffect(() => {
    //     onLoad();
    // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Filter filters={filters} />

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