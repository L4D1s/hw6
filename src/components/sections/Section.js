export default function Section({gridStyle, children}){
    return (
        <section style={gridStyle}>
            {children}
        </section>
    );
}