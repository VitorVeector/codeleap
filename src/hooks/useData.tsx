import { DataContext } from "context/DataContext";
import { useContext } from "react";

export const useData = () => {
    const contex = useContext(DataContext);
    return contex;
}