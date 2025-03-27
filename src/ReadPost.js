import { useState } from "react";
export default function ReadPost(props) {
    const [title, setTitle] = useState(props.readPost.title);
    const [body, setBody] = useState(props.readPost.body);
    const [writer, setWriter] = useState(props.readPost.writer);
    return (
        <>
            <form>
                <input type="text" name="inputTitle" value={title} placeholder="제목입력" style={{ width: "100%" }} onChange={(e) => {
                    setTitle(e.target.value);
                }}></input>
                <hr></hr>
                <textarea name="inputBody" value={body} placeholder="내용입력" style={{ width: "100%", height: "500px" }} onChange={(e) => {
                    setBody(e.target.value);
                }}></textarea>
                <hr></hr>
                <input type="text" name="inputWriter" value={writer} placeholder="작성자 이름" style={{ width: "100%" }} onChange={(e) => {
                    setWriter(e.target.value);
                }}></input>
                <hr></hr>
                <button type="/" onClick={(e) => {
                    e.preventDefault();
                    props.onUpdate(title, body, writer);
                }}>수정</button>
                <button type="/" onClick={(e) => {
                    e.preventDefault();
                    props.onDelete();
                }}>삭제</button>
            </form>
        </>
    )
}