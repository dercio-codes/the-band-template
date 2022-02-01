import { Search } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import DropMenu from "./DropMenu"

export default function Nav() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        background: "black",
        color: "white",
        display: "flex",
        position:'fixed',
        top:0,
        zIndex:'100',
      }}
    >
      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
          width: "120px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        HOME
      </MenuItem>

      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
          width: "120px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        BAND
      </MenuItem>

      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
          width: "120px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        TOUR
      </MenuItem>

      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
          width: "120px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        CONTACT
      </MenuItem>

      <MenuItem
        
      >
        <DropMenu />
      </MenuItem>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "8px",
        //   "&:hover": {
        //     backgroundColor: "RED",
        //     color: "black",
        //   },
        }}
      >
        <Search
          sx={{
            fill: "white",
          }}
        />
      </Box>
    </Box>
  );
}
