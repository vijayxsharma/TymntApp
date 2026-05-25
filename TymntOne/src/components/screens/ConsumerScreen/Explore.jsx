import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const engagements = [
  {
    _id: '6a06a09a0282c8e68ac40684',
    provider_name: 'Rahul Sharma',
    category: 'Tech Help',
    description:
      'Need someone who can help me in my coding assignment and debugging.',
    max_budget: 200,
    status: 'ACCEPTED',
    createdAt: '2026-05-15T04:27:06.277+00:00',
  },

  {
    _id: '6a06a09a0282c8e68ac40685',
    provider_name: 'Ananya Patel',
    category: 'Life Coach',
    description:
      'Need emotional support and productivity mentorship.',
    max_budget: 350,
    status: 'IN_PROGRESS',
    createdAt: '2026-05-15T04:27:06.277+00:00',
  },

  {
    _id: '6a06a09a0282c8e68ac40686',
    provider_name: 'Aman Verma',
    category: 'Creative',
    description:
      'Need help with UI/UX ideas for my startup landing page.',
    max_budget: 500,
    status: 'COMPLETED',
    createdAt: '2026-05-15T04:27:06.277+00:00',
  },
];

const getStatusColor = status => {
  switch (status) {
    case 'ACCEPTED':
      return '#F59E0B';

    case 'IN_PROGRESS':
      return '#10B981';

    case 'COMPLETED':
      return '#3B82F6';

    default:
      return '#64748B';
  }
};

const getActionButton = item => {
  switch (item.status) {
    case 'ACCEPTED':
      return 'Start Session';

    case 'IN_PROGRESS':
      return 'Stop Session';

    case 'COMPLETED':
      return 'View Summary';

    default:
      return 'Open';
  }
};

const getActionColor = item => {
  switch (item.status) {
    case 'ACCEPTED':
      return '#8B5CF6';

    case 'IN_PROGRESS':
      return '#DC2626';

    case 'COMPLETED':
      return '#2563EB';

    default:
      return '#64748B';
  }
};

const EngagementScreen = () => {

  const renderItem = ({item}) => {

    return (

      <View style={styles.card}>

        {/* TOP HEADER */}
        <View style={styles.header}>

          {/* LEFT */}
          <View style={styles.leftContainer}>

            {/* Avatar */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.provider_name?.[0]}
              </Text>
            </View>

            {/* Details */}
            <View style={styles.infoContainer}>

              <View style={styles.nameRow}>
                <Text style={styles.providerName}>
                  {item.provider_name}
                </Text>

                <MaterialIcons
                  name="verified"
                  size={16}
                  color="#3B82F6"
                />
              </View>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      getStatusColor(item.status),
                  },
                ]}>
                <Text style={styles.statusText}>
                  {item.status}
                </Text>
              </View>
            </View>
          </View>

          {/* RIGHT */}
          <View style={styles.rightContainer}>

            <TouchableOpacity style={styles.menuButton}>
              <MaterialIcons
                name="more-vert"
                size={22}
                color="#CBD5E1"
              />
            </TouchableOpacity>

            <Text style={styles.price}>
              ₹{item.max_budget}/hr
            </Text>
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          {item.description}
        </Text>

        {/* INFO ROW */}
        <View style={styles.metaRow}>

          <View style={styles.metaBox}>
            <Icon
              name="clock"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.metaText}>
              2h ago
            </Text>
          </View>

          <View style={styles.metaBox}>
            <Icon
              name="map-pin"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.metaText}>
              Bengaluru
            </Text>
          </View>

          <View style={styles.metaBox}>
            <Icon
              name="activity"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.metaText}>
              Active
            </Text>
          </View>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* BOTTOM ACTIONS */}
        <View style={styles.bottomContainer}>

          {/* View Profile */}
          <TouchableOpacity style={styles.profileButton}>

            <Icon
              name="user"
              size={16}
              color="#FFFFFF"
            />

            <Text style={styles.profileText}>
              View Profile
            </Text>
          </TouchableOpacity>

          {/* Main Action */}
          <TouchableOpacity
            style={[
              styles.actionButton,
              {
                backgroundColor:
                  getActionColor(item),
              },
            ]}>

            <Text style={styles.actionText}>
              {getActionButton(item)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#020617"
        barStyle="light-content"
      />

      {/* HEADER */}
      <View style={styles.screenHeader}>

        <View>
          <Text style={styles.heading}>
            Engagements
          </Text>

          <Text style={styles.subHeading}>
            Manage your active sessions
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.historyText}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={engagements}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      />
    </SafeAreaView>
  );
};

export default EngagementScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#020617',
    paddingTop: 10,
  },

  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 20,
    marginBottom: 22,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },

  subHeading: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 5,
  },

  historyText: {
    color: '#A855F7',
    fontSize: 15,
    fontWeight: '700',
  },

  card: {
    backgroundColor: '#0F172A',

    marginHorizontal: 16,
    marginBottom: 18,

    borderRadius: 24,

    padding: 18,

    borderWidth: 1,
    borderColor: '#1E293B',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftContainer: {
    flexDirection: 'row',
    flex: 1,
  },

  avatar: {
    width: 68,
    height: 68,

    borderRadius: 20,

    backgroundColor: '#7C3AED',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  infoContainer: {
    marginLeft: 14,
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  providerName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',

    marginRight: 5,
  },

  category: {
    color: '#94A3B8',
    fontSize: 13,

    marginTop: 5,
  },

  statusBadge: {
    alignSelf: 'flex-start',

    marginTop: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 8,
  },

  statusText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  rightContainer: {
    alignItems: 'flex-end',
  },

  menuButton: {
    padding: 4,
  },

  price: {
    color: '#A855F7',
    fontSize: 20,
    fontWeight: '700',

    marginTop: 18,
  },

  description: {
    color: '#CBD5E1',

    marginTop: 16,

    lineHeight: 20,
    fontSize: 14,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 18,
  },

  metaBox: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#111827',

    paddingHorizontal: 10,
    paddingVertical: 7,

    borderRadius: 10,

    marginRight: 10,
  },

  metaText: {
    color: '#CBD5E1',
    fontSize: 12,

    marginLeft: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#1E293B',

    marginVertical: 18,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profileButton: {
    flex: 1,

    height: 52,

    borderRadius: 14,

    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',

    marginRight: 10,
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',

    marginLeft: 8,
  },

  actionButton: {
    flex: 1,

    height: 52,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});