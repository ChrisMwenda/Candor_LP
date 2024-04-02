import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  FaMedal,
  FaStar,
  FaExchangeAlt
} from "react-icons/fa";
import { RiEmotionHappyFill } from "react-icons/ri";


const items = [
  {
    icon: <RiEmotionHappyFill size={"3em"}/>,
    title: "Enhanced Candidate Experience",
    description:"Better candidate experience = more applications = better odds of finding exceptional talent.",
        
  },
  {
    icon: <FaStar size={"3em"}/>,
    title: "Build Your Brand",
    description:
      "Impress candidates with your professionalism and commitment to providing a positive candidate experience",
  },
  {
    icon: <FaMedal size={"3em"}/>,
    title: "Stand Out From the Rest",
    description:
      "Everyone else either ghosts candidates or uses the same cookie cutter rejection emails. Stand out from the competition and attract top talent by demonstrating your respect and value for candidates",
    
  },
  {
    icon: <FaExchangeAlt size={"3em"} />,
    title: "Be the Change You Wish to See",
    description:
      "  Remember the stress of being ghosted? Let's end that",
    
  },

];
export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Benefits
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Why bother giving feedback to applicants?
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
