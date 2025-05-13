import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "./models-3d/Head";
import Lights from "../lights/Lights";


const Welcome = () => {

    const navigate = useNavigate();

    const onHandleButtonNext = () => {
        navigate("/principal");
    } 

    return (
        <div className="container-welcome">
            <>
                <Canvas className="app-logo" shadows={true} >
                    <Lights />
                    <OrbitControls autoRotate />
                    <Head />
                </Canvas>
            </>


            <>
                <h1 className="welcome-tittle">¿Qué es la Discriminación Algorítmica?</h1>
                <p className="welcome-text">Bienvenido! ¿Quieres saber más sobre este tema? Presiona el boton para que lo descrubramos juntos!</p>
                <button className="welcome-button" onClick={onHandleButtonNext}>Adelante!</button>

            </>
        </div>
    );
};

export default Welcome;