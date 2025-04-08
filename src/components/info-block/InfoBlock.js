import HeaderBlock from "../texts/header/HeaderBlock";
import TextBlock from "../texts/text/TextBlock";

export default function InfoBlock({title, content, children}) {
    return (
        <div>
            <HeaderBlock text={title.text} level={title.level}/>
            <TextBlock text={content.text} color={content.color}/>
            {children != null ? children : <hr/>}
        </div>
    );
}