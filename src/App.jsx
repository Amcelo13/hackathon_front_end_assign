import {Container, CssBaseline} from "@mui/material";

import Banner from "./components/Banner";
import Nav from "./components/Nav";
import TabBar from "./components/TabBar";
function App() {
  return(
    <>
      <CssBaseline/>

      <Container sx={{ bgcolor: "white", height: "100vh"}} maxWidth="xl" style={{ width: "100vw", paddingLeft: 0, paddingRight: 0 }}>

        {/* Image of company logo */}
        <Nav/>

        {/* Banner */}
          <Banner/>

        {/* Tab Bar */}
          <TabBar />

      </Container>
    </>
  );
}

export default App;
