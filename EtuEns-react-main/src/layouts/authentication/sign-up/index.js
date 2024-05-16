import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [agreement, setAgreement] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSetAgreement = () => setAgreement(!agreement);

  const handleSignUp = async () => {
    if (!agreement) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }

    if (!role) {
      setErrorMessage("Please select a role.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/save", {
        email,
        username,
        role,
        address,
        password,
      });

      console.log("Sign up successful:", response.data);
      navigate("/authentication/sign-in");
    } catch (error) {
      console.error("Sign up error:", error);
      setErrorMessage("Sign up failed. Please try again.");
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (roleValue) => {
    setRole(roleValue);
    handleClose();
  };

  const roleNames = ["ETUDIANT", "ENSEIGNANT", "DIRECTEUR", "SECRETAIRE"];
  const roleValues = { ETUDIANT: 0, ENSEIGNANT: 1, DIRECTEUR: 2, SECRETAIRE: 3 };

  return (
    <BasicLayout title="Welcome!" description="Create new account." image={curved6}>
      <Card>
        <SoftBox p={3} mb={1} textAlign="center"></SoftBox>

        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {role ? roleNames[role] : "Select Role"}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {roleNames.map((roleName) => (
                  <MenuItem
                    key={roleName}
                    onClick={() => handleMenuItemClick(roleValues[roleName])}
                  >
                    {roleName}
                  </MenuItem>
                ))}
              </Menu>
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgreement} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgreement}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            {errorMessage && (
              <SoftBox mb={2}>
                <SoftTypography variant="caption" color="error">
                  {errorMessage}
                </SoftTypography>
              </SoftBox>
            )}
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={handleSignUp}>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
