import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ScrollToId } from "../utils/ScrollToId"

// Components
import { HeroAbout } from "../components/HeroAbout"
import { RoadMapProject } from "../components/RoadMapProject"
import { ListCardProject } from "../components/ListCardProject"

export const AboutPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="90vh">
      <HeroAbout />
    </Grid>
    <Grid minH="50vh">
      <RoadMapProject />
    </Grid>
    <Grid minH="90vh">
      <ListCardProject />
    </Grid>
    <ScrollToId />
  </Box>
)