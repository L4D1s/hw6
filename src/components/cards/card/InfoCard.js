export default function InfoCard({info}){
    return (
        <div>
            <p>{info.type}</p>
            <p>{info.description}</p>
        </div>
    );
}