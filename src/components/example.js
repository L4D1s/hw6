import {useState} from "react";

const data01 = [];
export default function Example({data02}){
    const [dataState01, setDataState01] = useState(data01)
    const [dataState02, setDataState02] = useState(data02)

    function handleSort(){
        const dataCopy = JSON.parse(JSON.stringify(dataState01));
        // сортировка копии
        setDataState01(dataCopy);
    }

    // jsx разметка на основе dataState01 или dataState02
}