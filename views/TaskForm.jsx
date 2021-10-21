import React, {useState} from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, Button } from "react-native";

const AddTask = ({ setTaskType }) => {
  const [task, setTask] = useState({ email: "", password: "" });
    
    const onAdd = () => {
        console.log(task)
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.task}>
          <Text style={styles.label}> Email </Text>
          <TextInput
              style={styles.input}
              onChange={e => setTask({...task, email: e.target.value })}
              value={task.email}
              placeholder="Email"
          />
          
          <Text style={styles.label}> Password </Text>
          <TextInput
              style={styles.input}
              onChange={e => setTask({...task, password: e.target.value })}
              value={task.password}
              placeholder="Password"
          />
          <Button
              style={styles.button}
              title="ADD TASK"
              onPress={onAdd}
          />
        </View>
      </SafeAreaView>
    );
};

const Tasktask = () => {
    const [taskType, setTaskType] = useState("add");
    return( 
        taskType === "add" ? <AddTask setTaskType={setTaskType} /> : <AddTask setTaskType={setTaskType} />
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    flex: 1, 
    alignItems: 'flex-start',
    justifyContent: 'center',  
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3
  },
  button: {
    color: "dodgerblue",
    borderRadius: 4,
    height: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5
  },
  link: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "600",
    fontSize: 16,
    color: "dodgerblue"
  }
});

export default Tasktask;