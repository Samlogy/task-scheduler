import React, {useState, useEffect} from "react";
import { StyleSheet, ScrollView, Dimensions, SafeAreaView } from "react-native";

import { Task, Filter } from "../components";



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
    status: "Pendding",
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    status: "Doing",
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    status: "Done",
    username: "sam",
    createdAt: "20-10-2021"
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora laborum ad nostrum nesciunt ipsum dolorem consequunt !",
    priority: 1,
    status: "Canceled",
    username: "sam",
    createdAt: "20-10-2021"
  },
];

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

    const onLoad = () => {
        console.log('load personal data from api')
        setTasks(data)
    };

    useEffect(() => {
        onLoad();
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Filter filters={filters} />

      <ScrollView style={styles.tasks} showsVerticalScrollIndicator={false}>
        { tasks.map((task) => <Task data={task} onPress={() => navigation.navigate('TaskDetails', task)} />) }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 25,
    // flex: 1
  },
  tasks: {
    marginVertical: 20,
    paddingHorizontal: 20,
  }
});

export default Home;