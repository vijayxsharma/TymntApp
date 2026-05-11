import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const RequestCard = () => {
  return (
    <View style={styles.card}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.avatar}
          />
          <View>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Minho Park</Text>
              <MaterialIcon name="verified" size={16} color="#2563EB" />
            </View>
            <Text style={styles.role}>Household Buddy</Text>
          </View>
        </View>

        <View style={styles.rightHeader}>
          <Icon name="clock" size={14} color="#64748B" />
          <Text style={styles.time}>22d</Text>
          <Icon name="more-vertical" size={18} color="#64748B" />
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        My maid is not available today, so I need someone to help with cooking
        and washing utensils.
      </Text>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.tag}>
          <Icon name="map-pin" size={12} color="#334155" />
          <Text style={styles.tagText}>Faridabad</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>COST : ₹200/hr</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>EST.T : 2hr</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="bookmark" size={14} color="#334155" />
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="message-circle" size={14} color="#334155" />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    // marginVertical: 10,
    marginHorizontal: 12,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  name: {
    color:'#000000',
    fontWeight: "bold",
    fontSize: 15,
  },

  role: {
    fontSize: 12,
    color: "#64748B",
  },

  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  time: {
    fontSize: 12,
    color: "#64748B",
    marginRight: 6,
  },

  description: {
    marginTop: 10,
    fontSize: 13,
    color: "#334155",
    lineHeight: 18,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
    flexWrap: "wrap",
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  tagText: {
    fontSize: 12,
    color: "#334155",
    marginLeft: 4,
  },

  newBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginLeft: "auto",
  },

  newText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 4,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  actionText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#334155",
  },

  startBtn: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  startText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});