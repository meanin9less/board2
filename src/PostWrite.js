import { useState } from "react";
export default function PostWrite(props){
    const [inputTitle, setinputTitle] = useState("");
    const [inputBody, setinputBody] = useState("");
    const [inputWriter, setinputWriter] = useState("");
    return (
        <>
            <form name="form" onSubmit={(e)=>{
                e.preventDefault();
                const title = inputTitle
                const body = inputBody
                const writer = inputWriter
                props.onSave(title, body, writer);
            }}>
                <input type="text" name="inputTitle" value={inputTitle} placeholder="제목입력" style={{width: "100%"}} onChange={(e)=>{
                    setinputTitle(e.target.value);
                }}></input>
                <hr></hr>
                <textarea name="inputBody" value={inputBody} placeholder="내용입력" style={{width: "100%", height: "500px"}} onChange={(e)=>{
                    setinputBody(e.target.value);
                }}></textarea>
                <hr></hr>
                <input type="text" name="inputWriter" value={inputWriter} placeholder="작성자 이름" style={{width: "100%"}} onChange={(e)=>{
                    setinputWriter(e.target.value);
                }}></input>
                <hr></hr>
                <button type="submit" name="btn">글쓰기</button>
            </form>
        </>
    )
}
