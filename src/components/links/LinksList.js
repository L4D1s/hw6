
const data = [
    {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perferendis.", path: "#"},
    {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", path: "#"},
    {text: "Lorem ipsum dolor sit amet.", path: "#"},
    {text: "Lorem ipsum dolor sit amet, consectetur adipisicing. Dolorum.", path: "#"},
    {text: "Lorem ipsum dolor.", path: "#"},
];

function FileType() {
    return (<span>PDF</span>);
}

function Link({text, filePath}){
    return (
        <li>
            <a href={filePath}>{text}</a>
            <FileType/>
        </li>
    );
}

export default function LinksList(){
    return (
        <ul>
            {data.map(elem => <Link text={elem.text} filePath={elem.path}/>)}
        </ul>
    )
}