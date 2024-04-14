import { Grid, GridItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid.tsx";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList.tsx";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {showAside && (
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
