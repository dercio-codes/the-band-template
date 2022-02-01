import Nav from "./Navbar/Nav"
import TourDates from "./TourDates/TourDates"
import Box from "@mui/material/Box"


export default function Layout(){
    return(
        <Box>
            <Nav/>
            <TourDates />
        </Box>
    )
}