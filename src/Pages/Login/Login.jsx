import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
const backgroundImage =
  "https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const ContainerBox = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "calc(100vh - 50px)",
});
const LoginBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: " 2rem",
  // width: "350px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
});

const LoginFormControl = styled(FormControl)({
  width: "100%",
  margin: "5px 0px",
});

const LoginButton = styled(Button)({
  margin: "8px 0px",
  width: "100%",
  backgroundColor: "lightcoral",
  "&:hover": {
    backgroundColor: "rgba(240, 128, 128, 0.636)",
  },
});
const ButtonReg = styled(Button)({
  position: "absolute",
  top: "0px",
  right: "10px",
});

const RegisterButton = styled(Button)({
  margin: "8px 0px",
  width: "100%",
  backgroundColor: "#3f51b5",
  color: "white",
  "&:hover": {
    backgroundColor: "#1f2e72",
  },
});
// validations
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function handleLogin(data) {
    // const data = { email, password };
    localStorage.setItem("user-info", JSON.stringify(data));
    console.log(data);
    navigate("/");
  }
  function handleRegister(e) {
    navigate("/register");
  }
  useEffect(
    () => {
      if (localStorage.getItem("user-info")) {
        navigate("/ ");
      }
    },
    // eslint-disable-next-line
    []
  );

  return (
    <ContainerBox>
      <Container maxWidth="xs">
        <LoginBox>
          <form onSubmit={handleSubmit(handleLogin)} style={{ width: "100%" }}>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Login
            </Typography>
            <LoginFormControl>
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
            </LoginFormControl>
            <LoginFormControl>
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
            </LoginFormControl>
            <LoginButton variant="contained" type="submit">
              Login
            </LoginButton>
          </form>
          <ButtonReg>
            <RegisterButton variant="contained" onClick={handleRegister}>
              Register
            </RegisterButton>
          </ButtonReg>
        </LoginBox>
      </Container>
    </ContainerBox>
  );
};

export default Login;
