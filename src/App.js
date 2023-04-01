import React from "react";
import { connect } from 'react-redux';
import { DecAction, IncAction } from "./actions";
const App=({local_variable,IncAction,DecAction})=>{
  return(
    <center>
  {local_variable}<br/>
  <button onClick={()=>IncAction(5)}>INCREMENT</button>
  <button onClick={()=>DecAction(3)}>DECREMENT</button>
    </center>  )
} 
const mapStateToProps=(state)=>(
  {
    local_variable:state
  }
)


export default connect(mapStateToProps,{IncAction,DecAction})(App);