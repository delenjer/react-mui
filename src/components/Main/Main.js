import React from 'react';

import Box from "@mui/material/Box";
import { Header } from "../Header/Header";

import { Catalog } from "../Catalog/Catalog";
import { main } from '../../helper/helper';

export const Main = () => (
  <>
    <Header />

    <Box sx={main}>
      <Catalog />
    </Box>
  </>
);