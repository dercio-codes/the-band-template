import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <Box
      sx={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "65%",
          //   background: "green",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          component="h3"
          variant="p"
          sx={{
            textAlign: "center",
            color: "gray",
            margin: 2,
          }}
        >
          Fan? Drop a Note...
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: "32px",
                  }}
                />
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "8px",
                  }}
                >
                  Chicago , US
                </p>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <LocalPhoneIcon
                  sx={{
                    fontSize: "32px",
                  }}
                />
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "8px",
                  }}
                >
                  011 5678 8902
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: "32px",
                  }}
                />
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "8px",
                  }}
                >
                  Test@email.com
                </p>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Item>
                    <TextField placeholder="Name"/>
                  </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Item>
                    <TextField placeholder="Email" />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <TextField placeholder="Message" sx={{
                      width:"96%"
                  }}/>
                </Grid>
              </Grid>

              <Box sx={{
                  display:'flex',
                  justifyContent:'flex-end',
                  padding:'8px',
              }}>
                  <Button variant={'filled'} sx={{
                      background:'black',
                      color:'white'
                  }}>Submit</Button>
              </Box>
              
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
