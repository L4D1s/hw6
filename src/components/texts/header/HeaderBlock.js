export default function HeaderBlock({text, level}) {
    if (level === 1) return (<h1>{text}</h1>);
    else if (level === 2) return (<h2>{text}</h2>);
    else if (level === 3) return (<h3>{text}</h3>);
    else if (level === 4) return (<h4>{text}</h4>);
    else if (level === 5) return (<h5>{text}</h5>);
    else return (<h6>{text}</h6>);
}