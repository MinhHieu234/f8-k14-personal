import {useDispatch,useSelector} from "react-redux"
export default function (){
    const dispatch=useDispatch()
  const searchStr=useSelector(state=>state.searchStr)
    return(
        <input value={searchStr || ''} onChange={(e)=>dispatch({type:"search/inputting",payload:e.target.value})}/>
    )
}