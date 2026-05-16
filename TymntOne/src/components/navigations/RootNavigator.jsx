import { useSelector } from "react-redux"
import ProviderNavigator from "./ProviderNavigator";
import ConsumerNavigator from "./ConsumerNavigator";

const RootNavigator = ()=>{
    const activeMode = useSelector(state=>state.appModeSlice.activeMode)
    return(
        activeMode === 'consumer'
        ? <ConsumerNavigator />
        : <ProviderNavigator />
    )
}

export default RootNavigator;