import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


const TableSlice = createSlice({
    name: "Table",
    initialState: {
        peoples :[
            {
                id : 1,
                name : 'Joanna Mcarthur',
                email : 'Joanna@gmail.com',
                Phone : 1234567890
            },
            {
                id : 2,
                name : 'Charmaine Sharpe',
                email : 'Charmaine@gmail.com',
                Phone : 987654321
            }
        ]
    },
    reducers :{
        delete(state,action){
           state.peoples = state.peoples.filter((people) =>{
                return people.id !== action.payload
            })
        },
        add(state,action){
            state.peoples.push(action.payload)
        }
    }
})

const idSlice = createSlice({
    name: "id",
    initialState: {
        id : 3
    },
    reducers :{
        minus(state){
           state.id--;
        },
        plus(state){
            state.id++;
        }
    }
})

const store = configureStore({
    reducer :{
        table:  TableSlice.reducer,
        id : idSlice.reducer
    }
});

export const TableActions = TableSlice.actions;
export const idActions = idSlice.actions;
export default store
