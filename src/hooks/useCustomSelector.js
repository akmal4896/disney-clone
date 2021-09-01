import { useSelector } from "react-redux";

export function useCustomSelector(reducerName){
    return useSelector(state => state[reducerName]);
}