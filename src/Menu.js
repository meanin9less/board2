export default function Menu(props) {
  const menuLst = [];
  for(let m of props.menuList){
    const item = <a style={{marginRight: '10px'}} key={m.id} href="/" onClick={(e)=>{
      e.preventDefault();
      props.onSelect(m.mode);
    }}>{m.title}</a>;
    menuLst.push(item);
  };
    return (
      <>
        {menuLst}
        <hr></hr>
      </>
    );
  }