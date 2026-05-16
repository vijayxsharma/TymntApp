import { useSelector } from "react-redux"

const RootNavigator = ()=>{
    const activeMode = useSelector(state=>state.appModeSlice)
    return(
        activeMode === 'consumer'
        
    )
}