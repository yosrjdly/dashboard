import Sidebar from "../components/layout/Sidebar";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ marginLeft: "240px", padding: "20px" }}>
        <Typography variant="h4">Dashboard Overview</Typography>
      </Container>
    </div>
  );
};

export default Dashboard;
