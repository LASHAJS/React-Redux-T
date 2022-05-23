import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        userData: [],
        isLoading: false,
    },
    reducers: {
      setLoading:(state, action) => {
        state.isLoading = action.payload
      },
      setData:(state, action) => {  
        state.userData.push(action.payload)
      },
    },
  
  });

  export const {setLoading,setData} = authSlice.actions;
  export  default authSlice.reducer;


export const AuthUser =  (userData) => {
    return dispatch => {
        try{
            dispatch(setLoading(true))
            localStorage.setItem("jwt", "token")
            dispatch(setData(userData))
            dispatch(setLoading(false))

        }catch (e){
            console.log(e)
        }
    }
}

export const logOutUser = () => {
    return dispatch => {
        try{
            dispatch(setLoading(true))
            localStorage.removeItem("jwt")
            dispatch(setLoading(false))

        }catch (e){
            console.log(e)
        }
    }
}
