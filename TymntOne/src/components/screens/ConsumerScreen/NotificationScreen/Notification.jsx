import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationsScreen = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Requests', 'Bookings', 'Payments', 'System'];

  const notifications = [
    {
      title: 'New Request Near You',
      desc: 'Someone needs help with tutoring in Indiranagar.',
      time: '2 min ago',
      icon: 'notifications-outline',
      color: '#22C55E',
      bg: '#022c22',
    },
    {
      title: 'Booking Confirmed',
      desc: 'Your session with Priya is confirmed for 3:00 PM today.',
      time: '1 hr ago',
      icon: 'calendar-outline',
      color: '#3B82F6',
      bg: '#0c1e3a',
    },
    {
      title: 'Payment Received',
      desc: '₹500 has been credited to your Tymnt wallet.',
      time: '3 hr ago',
      icon: 'cash-outline',
      color: '#10B981',
    },
    {
      title: 'New Message',
      desc: 'Priya: "See you in 10 minutes!"',
      time: 'Yesterday',
      icon: 'chatbubble-outline',
      color: '#A855F7',
    },
    {
      title: 'New Review',
      desc: 'Rahul left you a 5-star review: "Very helpful and patient..."',
      time: 'Yesterday',
      icon: 'star-outline',
      color: '#FACC15',
    },
    {
      title: 'Profile Tips',
      desc: 'Add more skills to your profile to get 2x more requests.',
      time: '2 days ago',
      icon: 'information-circle-outline',
      color: '#94A3B8',
    },
  ];

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        <TouchableOpacity>
          <Text style={styles.markRead}>Mark all read</Text>
        </TouchableOpacity>
      </View>

      {/* TABS */}
      <View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>

      {/* NOTIFICATIONS LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {notifications.map((item, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {borderLeftColor: item.color},
              item.bg && {backgroundColor: item.bg},
            ]}>
            
            <View style={styles.row}>
              
              {/* ICON */}
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: `${item.color}20`},
                ]}>
                <Icon name={item.icon} size={18} color={item.color} />
              </View>

              {/* TEXT */}
              <View style={{flex: 1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>

              {/* TIME */}
              <Text style={styles.time}>{item.time}</Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  markRead: {
    color: '#3B82F6',
    fontSize: 12,
  },

  tabs: {
    marginTop: 15,
    paddingLeft: 10,
  },

  tab: {
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#fff',
  },

  tabText: {
    color: '#94A3B8',
    fontSize: 12,
  },

  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },

  card: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    borderLeftWidth: 3,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  title: {
    color: '#fff',
    fontWeight: '600',
  },

  desc: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },

  time: {
    color: '#64748B',
    fontSize: 10,
    marginLeft: 10,
  },
});