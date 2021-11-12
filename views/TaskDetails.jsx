import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Modal } from "react-native";

import { CustomButton } from '../components';
import { globalStyles } from "../styles";

const {width} = Dimensions.get('screen');
const imgMargin = (width - 125) / 2;

const TaskDetails = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = route.params;
    
    return(
        <View style={globalStyles.container}>
            { data.image ? <Image source={{ uri: data.image }} style={styles.img} /> : <Image source={require('../assets/aa.png')} style={styles.img} /> }

            <Text> {data.title} </Text>
            <Text> {data.description} </Text>
            <Text> {data.priority} </Text>
            <Text> {data.status} </Text>    
            <Text> {data.username} </Text>
            {/* <Text> {data.deadline} </Text> */}
            <Text> {data.createdAt} </Text>
            <CustomButton text="Edit" variant="filled" onPress={() => navigation.navigate('EditTask', data)} />
            <CustomButton text="Delete" variant="outline" onPress={() => setModalVisible(true)} />

            <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} text="Do you want to remove this task ?" />
        </View>
    )
}

const CustomModal = ({ modalVisible, setModalVisible, text }) => {
  return(
      <Modal animationType="fade" transparent={true} visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> {text} </Text>

            <View style={{ flexDirection: "row" }}>
              <CustomButton text="Cancel" variant="outline" onPress={() => setModalVisible(!modalVisible)} />
              <CustomButton text="Remove" variant="filled" onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    img: {
      height: 125, 
      width: 125, 
      borderRadius: 25,
      marginBottom: 26,
      marginHorizontal: imgMargin
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#333",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      fontSize: 16,
      textAlign: "center"
    }
  })

export default TaskDetails;