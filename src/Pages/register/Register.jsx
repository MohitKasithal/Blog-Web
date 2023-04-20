import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@mui/material";

//  validations
const schema = yup.object().shape({
  userName: yup
    .string()
    .required("Username is required")
    .min(3, " username must be at least 3 characters long"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
//  components

const backgroundImage =
  "https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const RegisterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: 0,
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url(${backgroundImage})`,
  backgroundSize: "cover",
  height: "calc(100vh - 50px)",
  padding: "40px",
  fontFamily: `"Varela", sans-serif`,
});

const RegisterForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
});

const RegisterButton = styled(Button)({
  marginTop: "16px",
});
const RegisterError = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: "bold",
  marginBottom: "1rem",
}));

function Register() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  useEffect(
    () => {
      if (localStorage.getItem("user-info")) {
        navigate("/ ");
      }
    },
    // eslint-disable-next-line
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleReg = () => {
    const data = { userName, email, password };
    localStorage.setItem("user-info", JSON.stringify(data));
    console.log(data);
    navigate("/");
  };

  return (
    <RegisterBox>
      <Container maxWidth="xs">
        <RegisterForm onSubmit={handleReg}>
          <Box textAlign="center">
            <h1>Register</h1>
          </Box>
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            fullWidth
            {...register("username")}
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            {...register("password")}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {error && <RegisterError>{error}</RegisterError>}
          <RegisterButton variant="contained" type="submit">
            Register
          </RegisterButton>
        </RegisterForm>
        <Box textAlign="center" marginTop="16px">
          <Link to="/login">
            <Button variant="outlined">Already have an account? Login</Button>
          </Link>
        </Box>
      </Container>
    </RegisterBox>
  );
}

export default Register;
