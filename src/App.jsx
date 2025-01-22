import SideMenu from "./components/SideMenu/SideMenu";
import Content from "./components/Content";

function App() {

  return (
    <>
      <div className="h-screen w-screen flex">
        <SideMenu />
        <Content />
      </div>
    </>
  )
}

export default App;