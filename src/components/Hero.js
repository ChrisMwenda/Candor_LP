import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Form successfully submitted!"))
      .catch((error) => alert(error));
  };

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
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography variant="h5" textAlign="center" color="text.secondary">
            Hiring Managers, Recruiters, and Interviewers{" "}
          </Typography>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Don't be a&nbsp;
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
              Jerk
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            We get it...You're{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              sorting through 100s of applications, racing against deadlines,
              and competing for the best{" "}
            </span>
            . But those applicants you left hanging? They don't see it that way.
            They're{" "}
            <span style={{ fontWeight: "bold" }}>
              anxious, frustrated and probably think your company is a bunch of
              jerks.{" "}
            </span>{" "}
            Even worse, they'll tell their friends about it.
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            We help you generate thoughtful, personalized feedback for every
            applicant within minutes.
          </Typography>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            netlify
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" style={{ display: "none" }} />
            <input type="email" name="email" style={{ display: "none" }} />
            <textarea name="message" style={{ display: "none" }} />
          </form>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Enter your email address",
              }}
              name="email"
            />
            <Button type="submit" variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
