import * as React from 'react';

import Box from "@mui/material/Box";
import HideAppBar from "../Header/Header";

import { Catalog } from "../Catalog/Catalog";


export const Main = () => {

  return (
    <>
      <HideAppBar />

      <Box
        sx={{
          width: '100%',
          padding: '24px',
          backgroundColor: '#E7EBF0',
        }}
      >
        <Catalog />
      </Box>
    </>
  );
}