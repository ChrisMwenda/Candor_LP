import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function MainHero() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => alert("Form successfully submitted!"))
  //     .catch((error) => alert(error));
  // };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #bff4f5,#d4bff5)"
            : "linear-gradient(#42024f, #0f0910)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              title="Candor Demo"
              src="https://www.loom.com/embed/6492f66aa17549f4b28f812f76e41339?sid=b5c93515-926f-4796-bbbb-26c8908315ad"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Give Personalized Feebdack to Candidates&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              In Seconds
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            We help you generate thoughtful, personalized feedback for
            candidates of applicants within seconds.
          </Typography>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }} // Center the form
            name="contact"
            method="post"
            data-netlify="true" // Enable Netlify form handling
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <TextField
              id="outlined-basic"
              label="Your email address"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
              name="email"
              sx={{ width: "75%" }} // Adjust width of text field
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button type="submit" variant="contained" color="primary">
                Register for Beta
              </Button>
            </Stack>
          </form>

          {/* <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
          </Typography> */}
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
}
