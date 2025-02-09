import { Container, Typography } from "@mui/material";
import Layout from "../layouts/Layout";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Container sx={{ marginLeft: "240px", padding: "20px" }}>
        <Typography variant="h4">Dashboard Overview</Typography>
        
      </Container>
    </div>
  );
};

export default Dashboard;
