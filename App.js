import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight } from "react-native";
import { useFonts } from "expo-font";

import { ResetPassword, Home, Notifications, Settings, About, EditProfil, } from "./views";
import SettingsStack from "./navigation/SettingsStack";
import AuthStack from "./navigation/AuthStack";
import HomeStack from "./navigation/HomeStack";
import { globalStyles } from './styles';
import { CustomSwitch, CustomButton } from './components';
import { COLORS } from "./constants"

// import Navigation from "./navigation"

import { Entypo } from '@expo/vector-icons';


const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const filters = [
  {label: "Data", value: "data"},
  {label: "Science", value: "science"},
  {label: "Web", value: "web"},
  {label: "Front", value: "front"},
  {label: "Back", value: "back"},
]; 

export default function App() {


  return (
    <Home />
  )
};

const Filter = ({ filters }) => {
  const [selectedFilter, setSelectedFilter] = React.useState(0);

  const onFilter = (index, value) => {
    setSelectedFilter(index);
    console.log('Filter: ', value);
  };
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.filterListContainer}>
      {filters.map((filter, idx) => (
        <TouchableOpacity key={idx} activeOpacity={0.8}
          onPress={() => onFilter(idx, filter.value)}>
          <View style={{
              backgroundColor:
                selectedFilter === idx
                  ? COLORS.primary
                  : COLORS.secondary,
              ...style.listBtn,
            }}>
            <Text style={{
                fontWeight: 'bold',
                marginHorizontal: 10,
                color:
                  selectedFilter === idx
                    ? COLORS.white
                    : COLORS.primary,
              }}>
              {filter.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  listBtn: {
    height: 45,
    width: 120,
    justifyContent: "center",
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  listBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
