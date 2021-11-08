import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text, TouchableOpacity, FlatList  } from "react-native";

import { COLORS } from "../constants";

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
});
  

export default Filter;