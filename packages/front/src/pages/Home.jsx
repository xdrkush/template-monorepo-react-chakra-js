import {
  Box,
  Grid,
} from "@chakra-ui/react"

import { HeroHome } from "../components/HeroHome"
import { PresentationHome } from "../components/PresentationHome"

export const HomePage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh">
      <HeroHome />
    </Grid>
    <Grid minH="80vh">
      <PresentationHome />
    </Grid>
  </Box>
)
