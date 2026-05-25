/* =========================================================
   PROVIDER ENGAGEMENT SCREEN
   ========================================================= */

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

const providerEngagements = [

  {
    _id:'1',
    consumer_name:'Vijay Kumar',
    category:'Tech Help',
    description:'Need React Native debugging support.',
    max_budget:300,
    status:'ACCEPTED',
  },

  {
    _id:'2',
    consumer_name:'Rohan Singh',
    category:'Life Coach',
    description:'Need productivity mentorship.',
    max_budget:500,
    status:'ARRIVED',
  },

  {
    _id:'3',
    consumer_name:'Aman Verma',
    category:'Creative',
    description:'Need startup UI consultation.',
    max_budget:700,
    status:'IN_PROGRESS',
  },
];

const ProviderEngagementScreen = () => {

  const renderButtons = item => {

    // ACCEPTED
    if(item.status === 'ACCEPTED'){

      return (
        <View style={styles.bottomButtons}>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Navigate
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              {backgroundColor:'#2563EB'}
            ]}>

            <Text style={styles.primaryButtonText}>
              Mark Arrived
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    // ARRIVED
    if(item.status === 'ARRIVED'){

      return (
        <View style={styles.bottomButtons}>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Chat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              {backgroundColor:'#334155'}
            ]}>

            <Text style={styles.primaryButtonText}>
              Waiting Approval
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    // IN PROGRESS
    if(item.status === 'IN_PROGRESS'){

      return (
        <View style={styles.bottomButtons}>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Live Timer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              {backgroundColor:'#DC2626'}
            ]}>

            <Text style={styles.primaryButtonText}>
              Request Stop
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderItem = ({item}) => {

    return (

      <View style={styles.card}>

        {/* TOP */}
        <View style={styles.topRow}>

          <View style={styles.leftSection}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.consumer_name[0]}
              </Text>
            </View>

            <View style={styles.infoContainer}>

              <View style={styles.nameRow}>
                <Text style={styles.name}>
                  {item.consumer_name}
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

              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <MaterialIcons
              name="more-vert"
              size={22}
              color="#CBD5E1"
            />
          </TouchableOpacity>
        </View>

        {/* META */}
        <View style={styles.metaRow}>

          <View style={styles.metaBox}>
            <Icon
              name="clock"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.metaText}>
              10 mins ago
            </Text>
          </View>

          <View style={styles.metaBox}>
            <Icon
              name="map-pin"
              size={13}
              color="#94A3B8"
            />

            <Text style={styles.metaText}>
              2.4 km away
            </Text>
          </View>

          <Text style={styles.price}>
            ₹{item.max_budget}/hr
          </Text>
        </View>

        {/* ACTIONS */}
        {renderButtons(item)}

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#020617"
        barStyle="light-content"
      />

      <View style={styles.header}>
        <Text style={styles.heading}>
          Active Work
        </Text>

        <Text style={styles.subHeading}>
          Ongoing service engagements
        </Text>
      </View>

      <FlatList
        data={providerEngagements}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProviderEngagementScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#020617',
  },

  header:{
    paddingHorizontal:20,
    marginTop:15,
    marginBottom:20,
  },

  heading:{
    color:'#FFFFFF',
    fontSize:30,
    fontWeight:'700',
  },

  subHeading:{
    color:'#94A3B8',
    marginTop:4,
  },

  card:{
    backgroundColor:'#0F172A',
    marginHorizontal:16,
    marginBottom:18,
    borderRadius:24,
    padding:18,
    borderWidth:1,
    borderColor:'#1E293B',
  },

  topRow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },

  leftSection:{
    flexDirection:'row',
    flex:1,
  },

  avatar:{
    width:65,
    height:65,
    borderRadius:18,
    backgroundColor:'#2563EB',
    justifyContent:'center',
    alignItems:'center',
  },

  avatarText:{
    color:'#FFFFFF',
    fontSize:26,
    fontWeight:'700',
  },

  infoContainer:{
    marginLeft:14,
    flex:1,
  },

  nameRow:{
    flexDirection:'row',
    alignItems:'center',
  },

  name:{
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'700',
    marginRight:5,
  },

  category:{
    color:'#94A3B8',
    marginTop:5,
  },

  description:{
    color:'#CBD5E1',
    marginTop:14,
    lineHeight:20,
  },

  metaRow:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
  },

  metaBox:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#111827',
    paddingHorizontal:10,
    paddingVertical:7,
    borderRadius:10,
    marginRight:10,
  },

  metaText:{
    color:'#CBD5E1',
    fontSize:12,
    marginLeft:5,
  },

  price:{
    marginLeft:'auto',
    color:'#A855F7',
    fontWeight:'700',
    fontSize:18,
  },

  bottomButtons:{
    flexDirection:'row',
    marginTop:22,
  },

  secondaryButton:{
    flex:1,
    height:50,
    borderRadius:14,
    backgroundColor:'#111827',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },

  secondaryButtonText:{
    color:'#FFFFFF',
    fontWeight:'600',
  },

  primaryButton:{
    flex:1,
    height:50,
    borderRadius:14,
    justifyContent:'center',
    alignItems:'center',
  },

  primaryButtonText:{
    color:'#FFFFFF',
    fontWeight:'700',
  },
});