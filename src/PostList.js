export default function PostList(props){
    const list = [];
    for(let post of props.postList){
        list.push(<><a href="/" id={post.id} onClick={(e)=>{
            e.preventDefault();
            props.onSelect("READ", Number(post.id));
        }}>{post.title}(작성자:{post.writer})</a><hr></hr></>);
    }
    return (
        <>
            {list}
        </>
    );
}