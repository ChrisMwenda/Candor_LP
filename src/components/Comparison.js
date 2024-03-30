import Tabs from "./reuseableComponents/tabs";
import { useState } from "react";
import WithCandor from "./Assets/With_Candor.png";
import WithoutCandor from "./Assets/candor_current_mail.png";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Comparison = () => {
  const [statusTab, setStatusTab] = useState("Without Candor");

  const handleTabChange = (tab) => {
    setStatusTab(tab);
  };

  return (
    <Grid container justifyContent="center">
      
      <Grid item xs={12} md={6} justifyContent="center">
       
        <Card variant="outlined" sx={{mt:"5%"}}>
        <Tabs
          tabs={["Without Candor", "With Candor"]}
          defaultTab="Without Candor"
          onSelect={handleTabChange}
        />
          <CardContent>
            <Typography variant="subtitle1" textAlign="center">
              {statusTab === "With Candor"
                ? "Personalized, thoughtful and constructive feedback which applicants appreciate"
                : "Generic, impersonal, and unhelpful cookie-cutter rejection emplates that applicants hate"}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="100%"
            image={statusTab === "With Candor" ? WithCandor : WithoutCandor}
            alt="Paella dish"
          />
          
        </Card>
      </Grid>
    </Grid>
  );
};

export default Comparison;
