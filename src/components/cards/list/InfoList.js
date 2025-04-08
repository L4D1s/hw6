import InfoCard from "../card/InfoCard";

export default function InfoList({data, gridStyle}){
    return (
        <div style={gridStyle}>
            {data.map(dataElem => <InfoCard info={dataElem}/>)}
        </div>
    );
}