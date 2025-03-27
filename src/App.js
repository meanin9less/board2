import './App.css';
import { useState } from 'react'
import Header from './Header';
import Menu from './Menu'
import PostList from './PostList';
import PostWrite from './PostWrite'
import ReadPost from './ReadPost';

function App() {
  const [mode, setMode] = useState("LIST");
  const menuList = [
    { id: 1, title: "글쓰기", mode: "WRITE" },
    { id: 2, title: "목록으로", mode: "LIST" }
  ];
  const [postList, setPostList] = useState([
    { id: 1, title: "반갑습니다", writer: "김진아", body: "안녕하세요" },
    { id: 2, title: "나 99대장 김준홍인데", writer: "김준홍", body: "안녕하세요" },
  ]);
  const [nextId, setNextId] = useState(postList.length + 1);//글 추가할때 id부여하는 상태값
  const [id, setId] = useState(0);//리스트에서 받아오는 id를 상태값으로
  let content = null;

  switch (mode) {
    case "LIST":
      content = <PostList onSelect={(_mode, _id) => {
        setMode(_mode);
        setId(_id);
      }} postList={postList}></PostList>;
      break;

    case "WRITE":
      content = <PostWrite onSave={(title, body, writer) => {
        const post = { id: nextId, title, body, writer };
        const newPostList = [...postList, post];
        setPostList(newPostList);
        setMode("LIST");
        setNextId(nextId + 1);
      }}></PostWrite>;
      break;

    case "READ":
      const readPost = postList.find((list) => list.id === id);
      content = <ReadPost readPost={readPost} onUpdate={(title, body, writer) => {
        const post = { id: Number(id), title, body, writer };
        for (let i = 0; i < postList.length; i++) {
          if (postList[i].id === id) {
            postList[i] = post;
            break;
          };
        };
        const updateList = [...postList];
        // const updateList = postList.map((list)=>list.id===id ? post : list);
        setPostList(updateList);
        setMode("LIST");
      }} onDelete={()=>{
        const deletedList = postList.filter((list)=>list.id!==Number(id));
        setPostList(deletedList);
        setMode("LIST");
      }}></ReadPost>
      break;
    default: break;
  }
  return (
    <>
      <Header title="Board" onSelect={(_mode) => {
        setMode(_mode);
      }}></Header>
      <Menu menuList={menuList} onSelect={(_mode) => {
        setMode(_mode);
      }}></Menu>
      {content}
    </>
  );
}

export default App;
