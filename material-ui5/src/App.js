import { Box } from "@mui/system";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import { DataGridMUI } from "./playground/DataGridMUI";
import GridMUI from "./playground/GridMUI";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Header />
      <Products />
    </Box>
  );
};

export default App;
