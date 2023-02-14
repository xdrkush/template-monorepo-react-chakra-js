import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ScrollToId } from "../utils/ScrollToId"

// Components
import { ListCardProfile } from "../components/profile/ListCardProfile"

export const ProfilePage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="90vh">
      <ListCardProfile />
    </Grid>
    <ScrollToId />
  </Box>
)