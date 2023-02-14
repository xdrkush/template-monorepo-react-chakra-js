import {
  Box, Grid
} from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { fetchDataGithub } from "../stores/reducers/GithubReducers";

// Components
import { ListCardServices } from "../components/ListCardServices"

export const ServicesPage = () => {
  const dispatch = useDispatch();
  const reposGH = useSelector((state) => state.github.repos);

  useEffect(() => {
    dispatch(fetchDataGithub());
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="80vh">
        {reposGH.length >= 0 && (<ListCardServices list={reposGH} />)}

      </Grid>
    </Box>
  )
}