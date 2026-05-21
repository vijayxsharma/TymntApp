import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProviderProfile from "../../screens/ProviderScreen/ProviderProfile"

const ProfileStack = createNativeStackNavigator()
const ProviderProfileNavigation = ()=>{
    return(
        <ProfileStack.Navigator screenOptions={{headerShown:false}} >
            <ProfileStack.Screen name="ProviderProfile" component={ProviderProfile} />
        </ProfileStack.Navigator>
    )
}
export default ProviderProfileNavigation