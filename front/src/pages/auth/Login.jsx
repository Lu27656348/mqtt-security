import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useSnackbar } from 'notistack';
import login from '../../images/login.avif'

export function Login() {
  const navigate = useNavigate();
  const usuarioRef = useRef();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const cabecera = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Custom-Header": "Custom-Value"
  };

  const enviarFormularioLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "login",
        {
          usuario: usuario,
          password: password
        },
        { headers: cabecera }
      );
    
      if (res.data.error) {;
        enqueueSnackbar(res.data.error, { variant: "error" });
      } else {
        localStorage.setItem("token", res.data.token);
        enqueueSnackbar("Gracias por volver :D ", { variant: "success" });
        navigate("../dashboard/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        enqueueSnackbar("Credenciales inválidas", { variant: "error" });
      } else {
        enqueueSnackbar("Error en la autenticación de usuario", { variant: "error" });
      }
    }
  };
  
  return (
    <>
      <img
        src={login}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <form onSubmit={enviarFormularioLogin}>
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                MQTT Security
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="text" label="Usuario" size="lg"  id="usuario"
                          ref={usuarioRef}
                          onChange={e => setUsuario(e.target.value)}
                          value={usuario}
                          autoComplete="off"/>
              <Input type="password" label="Password" size="lg"  id="password"
                          onChange={e => setPassword(e.target.value)}
                          value={password}
                          autoComplete="off"
                          placeholder="***********"
                          required/>
              
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
              Iniciar Sesiones
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Login;
