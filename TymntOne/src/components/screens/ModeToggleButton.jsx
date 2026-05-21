import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkProfileComplete } from "../../utility/providerSlice/serviceProviderSlice";
import { setAppMode } from "../../utility/appModeSlice";

const ModeToggleButton = ()=>{
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {activeMode} = useSelector(state => state.appModeSlice);
    return(
        <>
         <Text style={styles.sectionTitle}>APP MODE</Text>
         
                   <View style={styles.toggleContainer}>
                     <TouchableOpacity
                       style={[
                         styles.toggleButton,
                         activeMode === 'consumer' && styles.activeButton,
                       ]}
                       onPress={() => dispatch(setAppMode('consumer'))}>
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
                       onPress={async () => {
                         const result = await dispatch(checkProfileComplete());
                         console.log(result)
                         if (result.payload?.isProviderProfileCompleted) {
                           dispatch(setAppMode('provider'));
                         } else {
                           navigation.navigate('ProviderProfileSetup');
                         }
                       }}>
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
        </>
    )
}
export default ModeToggleButton;
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#020617',
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
  seeAll: {
    color: '#3B82F6',
    fontSize: 12,
  },
  
})