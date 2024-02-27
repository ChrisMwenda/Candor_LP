import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import sadApplicant from "./Assets/sad-applicant-nbg.png"

export default function Body() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : "linear-gradient(#02294F, #090E10)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection:{xs:"column",lg:"row",md:"row"},
          alignItems: "center",
          gap:{xs:1,sm:2,lg:2},
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack xs={12} lg={5} md={5}spacing={2}>
          
          <Box>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            It's Time to <span style={{ fontWeight: "bold" }}>Break the Silence </span>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Job hunting is one of the most stressful stages of an adult's life
            -the countless applications sent out, hours spent crafting the
            perfect resume, meticulously writing cover letters, only to be met
            with silence. It's frustrating, demoralizing, experience that takes
            a toll on our mental and emotional state.
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            We understand the frustration of unanswered applications. With{" "}
            <span style={{ fontWeight: "bold" }}>
              as little as three word comments and notes{" "}
            </span>
            , we are able to give personalized feedback to an applicant and
            offer suggestions/recommendations for the user to use next time.
          </Typography>

          </Box>
         
        </Stack>
        <Stack xs={12} lg={7} md={7} sx={{ width: { xs: "100%", sm: "70%" } }} >
          <img src={sadApplicant} alt="A sad Applicant"/>
        </Stack>
      </Container>
    </Box>
  );
}
