import { Container, Typography } from "@mui/material";
import Layout from "../layouts/Layout";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Container >
        <Typography variant="h4">Dashboard Overview</Typography>
    <Layout/>

      </Container>
    </div>
  );
};

export default Dashboard;
