import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ModeToggleButton from '../ModeToggleButton';
import { useSelector } from 'react-redux';

const ProviderProfileScreen = () => {
  const {user} = useSelector(state=>state.profileSlice)
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 120}}>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <LinearGradient
              colors={['#9333EA', '#EC4899']}
              style={styles.avatar}>
              <Text style={styles.avatarText}>{user?.name?.[0]}</Text>
            </LinearGradient>

            <View style={styles.onlineDot} />
          </View>

          <View style={styles.nameRow}>
            <Text style={styles.name}>{user?.name}</Text>

            <View style={styles.verifyBadge}>
              <Icon name="checkmark" size={12} color="#3B82F6" />
            </View>
          </View>

          <Text style={styles.role}>
            Life Coach & Emotional Support Specialist
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Icon name="star" size={16} color="#FACC15" />
              <Text style={styles.statText}>4.9 (142)</Text>
            </View>

            <View style={styles.dot} />

            <View style={styles.statItem}>
              <Icon name="time-outline" size={16} color="#D1D5DB" />
              <Text style={styles.statText}>Responds in 5m</Text>
            </View>
          </View>
          {/* Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionBtn}>
              <Icon
                name="chatbubble-outline"
                size={20}
                color="#fff"
                style={{marginRight: 8}}
                />
              <Text style={styles.actionText}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Icon
                name="call-outline"
                size={20}
                color="#fff"
                style={{marginRight: 8}}
                />
              <Text style={styles.actionText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <Text style={styles.aboutText}>
            I'm a certified life coach with 8 years of experience helping
            individuals navigate career transitions, anxiety, and relationship
            challenges. My approach is empathetic, structured, and
            action-oriented. Let's work together to find clarity.
          </Text>

          <View style={styles.tagContainer}>
            {['Anxiety', 'Motivation', 'Career', 'Relationships'].map(
              (item, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ),
            )}
          </View>
        </View>

        {/* Pricing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing</Text>

          <View style={styles.card}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>1 Hour Session</Text>
              <Text style={styles.priceValue}>₹250</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.priceRow}>
              <View>
                <Text style={styles.priceLabel}>4 Hours Block</Text>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.priceValue}>₹900</Text>
                <Text style={styles.saveText}>Save ₹100</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Availability */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Availability</Text>

            <TouchableOpacity>
              <Text style={styles.calendarText}>See Calendar</Text>
            </TouchableOpacity>
          </View>

          {/* Dates */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 18}}>
            
            {[
              {day: 'Today', date: '12', active: true},
              {day: 'Wed', date: '13'},
              {day: 'Thu', date: '14'},
              {day: 'Fri', date: '15'},
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  item.active && styles.activeDateCard,
                ]}>
                
                <Text
                  style={[
                    styles.dateDay,
                    item.active && styles.activeDateText,
                  ]}>
                  {item.day}
                </Text>

                <Text
                  style={[
                    styles.dateNumber,
                    item.active && styles.activeDateText,
                  ]}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Time Slots */}
          <View style={styles.timeContainer}>
            {['3:00 PM', '4:00 PM', '6:00 PM', '7:30 PM'].map(
              (time, index) => (
                <TouchableOpacity key={index} style={styles.timeSlot}>
                  <Text style={styles.timeText}>{time}</Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>

          <ModeToggleButton/>
        {/* Reviews */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews (142)</Text>

          {[1, 2].map((item, index) => (
            <View key={index} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewUser}>
                  <View style={styles.userCircle} />
                  <Text style={styles.reviewName}>User {item}</Text>
                </View>

                <Text style={styles.starText}>★★★★★</Text>
              </View>

              <Text style={styles.reviewText}>
                Really helpful session. Ananya listened patiently and provided
                actionable advice.
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

export default ProviderProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#020617',
  },

  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },

  onlineDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#020617',
    position: 'absolute',
    right: 8,
    bottom: 8,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  verifyBadge: {
    marginLeft: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  role: {
    color: '#D946EF',
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 15,
    fontWeight: '500',
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#6B7280',
    marginHorizontal: 12,
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },

  actionBtn: {
    flex: 1,
    backgroundColor: '#1E293B',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 18,
  },

  aboutText: {
    color: '#E2E8F0',
    lineHeight: 28,
    fontSize: 16,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },

  tag: {
    backgroundColor: '#3B0764',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    color: '#E9D5FF',
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#1F2937',
    marginVertical: 18,
  },

  priceLabel: {
    color: '#E5E7EB',
    fontSize: 18,
  },

  priceValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  saveText: {
    color: '#22C55E',
    marginTop: 4,
    fontWeight: '600',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  calendarText: {
    color: '#3B82F6',
    fontSize: 15,
    fontWeight: '600',
  },

  dateCard: {
    width: 70,
    height: 75,
    backgroundColor: '#111827',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  activeDateCard: {
    backgroundColor: '#2563EB',
  },

  dateDay: {
    color: '#94A3B8',
    fontSize: 15,
    fontWeight: '600',
  },

  dateNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },

  activeDateText: {
    color: '#fff',
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  timeSlot: {
    backgroundColor: '#111827',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  timeText: {
    color: '#fff',
    fontWeight: '600',
  },

  reviewCard: {
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    marginRight: 12,
  },

  reviewName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  starText: {
    color: '#FACC15',
    fontSize: 16,
  },

  reviewText: {
    color: '#E2E8F0',
    marginTop: 14,
    lineHeight: 24,
    fontSize: 14,
  },
});