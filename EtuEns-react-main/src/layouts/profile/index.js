import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";

function Overview() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details based on user ID stored in local storage
    const userId = localStorage.getItem("userId");
    if (userId) {
      axios
        .get(`http://localhost:8080/api/v1/user/${userId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  return (
    <DashboardLayout>
      {user && <Header username={user.username} role={user.role} />}
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            {user && (
              <ProfileInfoCard
                title="profile information"
                username={user.username}
                address={user.address}
                email={user.email}
                role={user.role}
                info={{
                  fullName: user.username,
                  mobile: "", // Add mobile field if available
                  email: user.email,
                  location: "", // Add location field if available
                }}
              />
            )}
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
