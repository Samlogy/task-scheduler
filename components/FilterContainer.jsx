import React from "react";
import { StyleSheet, View } from "react-native";

const Filter = ({ filterName }) => {
    return(
        <View style={styles.filter}>
            {filterName}
        </View>
    )
}

const FilterContainer = ({ filterList }) => {
    return(
        <View style={styles.filterContainer}>
            { filterList.map(el => <Filter filterName={el} />) }
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    filter: {
        fontSize: 16,
        fontWeight: "400",
        padding: 4,
        borderRadius: 4,
        backgroundColor: "lightgray",
        textAlign: "center",
        margin: 5
    },
});
  

export default FilterContainer;