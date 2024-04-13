import { Grid, GridItem, Show, useBreakpoint } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {showAside && (
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      )}
      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
