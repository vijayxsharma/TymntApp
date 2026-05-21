import { useSelector } from "react-redux"
import ProviderNavigator from "./ProviderNavigator";
import ConsumerProfileNavigator from "./consumerNavigation/ConsumerProfileNavigation";

const RootNavigator = ()=>{
    const activeMode = useSelector(state=>state.appModeSlice.activeMode)
    return(
        activeMode === 'consumer'
        ? <ConsumerProfileNavigator />
        : <ProviderNavigator />
    )
}

export default RootNavigator;