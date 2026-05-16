import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../../../utility/authSlice';
import {userProfile} from '../../../../utility/profileSlice';
import {setAppMode} from '../../../../utility/appModeSlice'
import {useEffect} from 'react';

const ConsumerProfile = () => {
  const dispatch = useDispatch();
  const {activeMode} = useSelector(state=>state.appModeSlice)
  const {user} = useSelector(state => state.profileSlice);

  useEffect(() => {
    dispatch(userProfile());
  }, []);
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user?.name?.[0]}</Text>
            </View>

            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.subText}>
              Bengaluru • Member since Feb 2024
            </Text>

            {/* STATS */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Sessions</Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statValue}>4.8</Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statValue}>₹3.2k</Text>
                <Text style={styles.statLabel}>Spent</Text>
              </View>
            </View>
          </View>
          {/* APP MODE */}
          <Text style={styles.sectionTitle}>APP MODE</Text>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                activeMode === 'consumer' && styles.activeButton,
              ]}
              onPress={()=>dispatch(setAppMode('consumer'))}
              >
              <Text
                style={[
                  styles.toggleText,
                  activeMode === 'consumer' && styles.activeText,
                ]}>
                Consumer Mode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleButton,
                activeMode === 'provider' && styles.activeButton,
              ]}
              onPress={()=>dispatch(setAppMode('provider'))}
            >
              <Text
                style={[
                  styles.toggleText,
                  activeMode === 'provider' && styles.activeText,
                ]}>
                Provider Mode
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.helperText}>
            Switch to offer your skills and earn money.
          </Text>

          {/* BOOKINGS */}
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>MY BOOKINGS</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          {/* Booking Card 1 */}
          <View style={styles.card}>
            <View style={styles.row}>
              <View style={[styles.circle, {backgroundColor: '#A855F7'}]}>
                <Text style={styles.circleText}>AP</Text>
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.cardTitle}>Dr. Ananya P.</Text>
                <Text style={styles.cardSub}>Life Coach • Today, 3:00 PM</Text>
              </View>

              <View style={styles.badgeBlue}>
                <Text style={styles.badgeText}>Upcoming</Text>
              </View>
            </View>
          </View>

          {/* Booking Card 2 */}
          <View style={styles.card}>
            <View style={styles.row}>
              <View style={[styles.circle, {backgroundColor: '#10B981'}]}>
                <Text style={styles.circleText}>SJ</Text>
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.cardTitle}>Sneha J.</Text>
                <Text style={styles.cardSub}>Task Help • Yesterday</Text>
              </View>

              <View style={styles.badgeGray}>
                <Text style={styles.badgeText}>Completed</Text>
              </View>
            </View>
          </View>

          {/* SETTINGS */}
          <Text style={styles.sectionTitle}>SETTINGS</Text>

          {[
            'Account Information',
            'Payments & Wallet',
            'Notifications',
            'Privacy & Security',
            'Help & Support',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.settingItem}>
              <Text style={styles.settingText}>{item}</Text>
              <Icon name="chevron-forward" size={18} color="#94A3B8" />
            </TouchableOpacity>
          ))}

          {/* LOGOUT */}
          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default ConsumerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600',
  },
  subText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#0F172A',
    borderRadius: 15,
    padding: 15,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#94A3B8',
    marginTop: 25,
    marginLeft: 20,
    fontSize: 12,
    letterSpacing: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 5,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: '#3B82F6',
  },
  toggleText: {
    color: '#94A3B8',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  helperText: {
    color: '#64748B',
    textAlign: 'center',
    fontSize: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  seeAll: {
    color: '#3B82F6',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#0F172A',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 12,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
  },
  cardSub: {
    color: '#94A3B8',
    fontSize: 12,
  },
  badgeBlue: {
    backgroundColor: '#1D4ED8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeGray: {
    backgroundColor: '#374151',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  settingItem: {
    backgroundColor: '#0F172A',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingText: {
    color: '#fff',
  },
  logout: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoutText: {
    color: '#EF4444',
    fontWeight: '600',
  },
});
