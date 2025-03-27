export default function Header(props) {
    return (
        <>
            <header>
                <h1><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    props.onSelect("LIST");
                }}>{props.title}</a></h1>
                <hr></hr>
            </header>
        </>
    )
}