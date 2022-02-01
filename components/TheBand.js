import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TheBand() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop:'90px'

      }}
    >
      <Box sx={{
        width:'65%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}>
        <Typography component="h1" variant="h3" sx={{
          textAlign:'center'
        }}>THE BAND</Typography>
        <Typography component="h3" variant="p" sx={{
          textAlign:'center',
          color:'gray',
          margin:2,
        }}>We love music</Typography>
        <Typography component="p" sx={{
          marginBottom:2
        }}>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
        <Grid container spacing={2} >
          <Grid item sx={12} md={3} lg={4}>
            <Item>
              <p>Name</p>
              <img src="/bandmember.jpg" alt="" style={{
                width:'100%',
                height:'180px',
                objectFit:'contain'
              }} />
            </Item>
          </Grid>
          <Grid item xs={12} md={3} lg={4}>
          <Item>
              <p>Name</p>
              <img src="/bandmember.jpg" alt="" style={{
                width:'100%',
                height:'180px',
                objectFit:'contain'
              }} />
            </Item>
          </Grid>
          <Grid item xs={12} md={3} lg={4}>
          <Item>
              <p>Name</p>
              <img src="/bandmember.jpg" alt="" style={{
                width:'100%',
                height:'180px',
                objectFit:'contain'
              }} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
