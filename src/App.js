import './App.css';
import { useState } from 'react'
import Header from './Header';
import Menu from './Menu'
import PostList from './PostList';
import PostWrite from './PostWrite'
import ReadPost from './ReadPost';
//프로토콜 : 규칙;
// ip internet protocol ; host : 인터넷 통신망에 있는 모든 통신이 가능한 존재, 컴,폰,프린터 등등 유무선 통합해서
// host는 하나하나 식별할 수 있어야함 수신지를 명확하게 해줘야함, 구별할 수 있는 식별번호
// DNS : 도메인을 받아서 도메인과 짝지어진 숫자 ip로 변환해주는 서버
// port번호 : localhost:3000 => 3000이 port번호 가상의 논리적 통로, 
// 0~1023 : 예약번호 쓰면안댐;
// 프로세스끼리 통신할때도 port번호로 통신
// ex) 어떤 아이피로 정보를 보낼때 아이피로 정보를 보낸 후 그 안에서 어떤 통로로 보낼지는 port번호로 정해짐 
// localhost : 0.0.0.0 === > 나 자신
// 80번 웹서버들이 주로 쓰는 포트번호, 생략가능 그래서 naver.com:80 인데 생략됨
// ip+port : 기본주소
// naver.com:80 기본주소 /article/008/0005172286 url
// a태그에 href="/read 면 기본주소 뒤에 내용을 /read로 바꾸는 기능
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
  const [currentId, setCurrentId] = useState(0);//리스트에서 받아오는 id를 상태값으로
  let content = null;

  switch (mode) {
    case "LIST":
      content = <PostList onSelect={(_id) => {
        setCurrentId(_id);
        setMode("READ");
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
      const post = postList.find((post) => post.id === Number(currentId));
      content = <ReadPost post={post} onUpdate={(title, body, writer) => {
        const updatePost = { id: Number(currentId), title, body, writer };
        // for (let i = 0; i < postList.length; i++) {
        //   if (postList[i].id === Number(currentId)) {
        //     postList[i] = updatePost;
        //     break;
        //   };
        // };
        // const updateList = [...postList];
        //for of 쓰면 안됨, 그냥 복사본, 소멸함
        const updateList = postList.map((list)=>list.id===currentId ? updatePost : list);
        setPostList(updateList);
        setMode("LIST");
      }} onDelete={()=>{
        const deletedList = postList.filter((list)=>list.id!==Number(currentId));
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