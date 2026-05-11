import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const {width,height} = Dimensions.get('window')
const ModeToggle = () => {
  const [activeTab, setActiveTab] = useState("instant");

  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.container}>
      
      {/* Instant Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "instant" && styles.activeTab
        ]}
        onPress={() => setActiveTab("instant")}
      >
        <Icon name="bolt" size={20} color="#ff6f00" />
        <Text
          style={[
            styles.text,
            activeTab === "instant" && styles.activeText
          ]}
        >
          Instant
        </Text>
      </TouchableOpacity>

      {/* Schedule Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "schedule" && styles.activeTab
        ]}
        onPress={() => setActiveTab("schedule")}
      >
        <Icon name="calendar-today" size={20} color="#ff0000" />
        <Text style={styles.text}>Schedule</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
};

export default ModeToggle;

const styles = StyleSheet.create({
  container: {
    width:width*0.95,
    flexDirection: "row",
    backgroundColor: "#15274f",
    justifyContent:'center',
    borderRadius: 15,
    padding: 8,
    margin:10,
    marginBottom:0,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    gap: 6,
    width:150,
  },
  activeTab: {
    backgroundColor: "#4671e8",
    // shadowColor: "#4DA6FF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  text: {
    color: "#fafcfe",
    fontSize: 16,
    fontWeight: "500",
  },
  // activeText: {
  //   // color: "#4DA6FF",
  // },
});