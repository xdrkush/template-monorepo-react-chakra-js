import {
  Box,
  Grid,
} from "@chakra-ui/react"

import { FormContact } from "../components/FormContact"

export const ContactPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="80vh">
      <FormContact />
    </Grid>
  </Box>
)
