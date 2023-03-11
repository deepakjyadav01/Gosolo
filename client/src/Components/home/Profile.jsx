import {React, useEffect} from "react";
import { initialState } from "../context/reducer";

export function Profile(){
    useEffect(() => {
        console.log(initialState)
      }
    , [initialState])
    
    return(
    <>{ !initialState.isAuthenticated ? 
    <div className="bg-black w-36 h-24">{initialState.isAuthenticated} </div>:
    <div className="bg-white w-36 h-24"> {initialState.isAuthenticated}</div>

    }
    
    </>
    )

}