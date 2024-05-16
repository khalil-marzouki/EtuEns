/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, username, address, email, role, action }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mb={2} lineHeight={1}>
          {" "}
          fullname :{" "}
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {username}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={1}>
          {" "}
          address :{" "}
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {address}
          </SoftTypography>
        </SoftBox>

        <SoftBox mb={2} lineHeight={1}>
          {" "}
          email :{" "}
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {email}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={1}>
          {" "}
          role :{" "}
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {role}
          </SoftTypography>
        </SoftBox>

        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfoCard;
