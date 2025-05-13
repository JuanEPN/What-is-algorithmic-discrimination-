import "./Principal.css";
import ExpertVideos from "../components/ExpertVideos";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import Scenario from "./models-3d/Scenario";
import Model1 from "./models-3d/Model1";
import Model2 from "./models-3d/Model2";
import Model3 from "./models-3d/Model3";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const CameraAnimation = ({ cameraState, controlsRef }) => {
    useFrame(({ camera }, delta) => {
        if (!cameraState.isAnimating || !controlsRef.current) return;

        camera.position.lerp(cameraState.targetPosition, delta * 10);
        const currentLookAt = new THREE.Vector3();
        currentLookAt.lerp(cameraState.targetLookAt, delta * 10);
        controlsRef.current.target.copy(currentLookAt);

        if (
            camera.position.distanceTo(cameraState.targetPosition) < 0.5 &&
            currentLookAt.distanceTo(cameraState.targetLookAt) < 0.5
        ) {
            cameraState.isAnimating = false;
        }
    });

    return null; // No renderiza nada, solo ejecuta `useFrame`
};

const Principal = () => {
    const [selectedModel, setSelectedModel] = useState(null);
    const [modelInfo, setModelInfo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cameraState, setCameraState] = useState({
        targetPosition: null,
        targetLookAt: null,
        isAnimating: false,
    });

    const controlsRef = useRef();

    const modelCameraSettings = {
        1: { position: new THREE.Vector3(5, 5, 5), lookAt: new THREE.Vector3(-5, 0, -5) },
        2: { position: new THREE.Vector3(5, 5, 5), lookAt: new THREE.Vector3(-5, 0, 0) },
        3: { position: new THREE.Vector3(5, 5, 5), lookAt: new THREE.Vector3(1, 0, -1) },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const handleModelClick = (event, modelId) => {
        event.stopPropagation();
        if (selectedModel === modelId) {
            setCameraState({ isAnimating: false });
            return;
        }

        const settings = modelCameraSettings[modelId];
        setCameraState({
            targetPosition: settings.position,
            targetLookAt: settings.lookAt,
            isAnimating: true,
        });

        setSelectedModel(modelId);

        const info = {
            1: { title: "Modelo 1", description: "Este modelo representa que las IAs deben ayudar a cuidar a las personas, teniéndolas entre sus brazos de una forma cuidadosa." },
            2: { title: "Modelo 2", description: "Este modelo representa la justicia + IA, mostrando un juez justo con una balanza." },
            3: { title: "Modelo 3", description: "Este modelo representa la responsabilidad ética de las IA con las minorías desde una perspectiva estructural con impacto visual." }
        }[modelId];

        setModelInfo(info);
    };

    const secciones = [
        {
            id: "definicion",
            titulo: "Definición de Sesgos Raciales",
            contenido: "Los sesgos raciales en la IA se refieren a los prejuicios sistemáticos que favorecen o perjudican a ciertos grupos raciales en los sistemas de inteligencia artificial. Estos sesgos pueden manifestarse a través de datos sesgados y algoritmos discriminatorios.",
            subtemas: [
                {
                    titulo: "Datos sesgados",
                    contenido: "Conjuntos de datos históricos que contienen prejuicios existentes en la sociedad y perpetúan la discriminación racial. Según un estudio de MIT Media Lab (2018), los sistemas de reconocimiento facial tienen tasas de error hasta 34% más altas para rostros de mujeres de piel oscura."
                },
                {
                    titulo: "Algoritmos discriminatorios",
                    contenido: "Modelos matemáticos que, incluso sin intención explícita, amplifican desigualdades existentes. Investigaciones de la Universidad de Stanford (2023) revelaron que los algoritmos de puntuación crediticia asignan calificaciones 15-30% más bajas a personas de minorías raciales con historiales financieros similares a los de otros grupos."
                },
            ],
            colorFondo: "#1a237e"
        },
        {
            id: "causas",
            titulo: "Causas de los Sesgos",
            contenido: "Existen múltiples factores que contribuyen a la aparición de sesgos raciales en los sistemas de IA, desde la recopilación de datos hasta el diseño de algoritmos.",
            subtemas: [
                {
                    titulo: "Falta de diversidad en datos",
                    contenido: "La sobrerrepresentación de ciertos grupos demográficos genera modelos desequilibrados. Un análisis de ImageNet (2021) mostró que el 45% de sus imágenes provienen de EE.UU. y Europa, mientras que África y Sudamérica representan menos del 5%."
                },
                {
                    titulo: "Diseño de algoritmos",
                    contenido: "Decisiones técnicas aparentemente neutrales pueden introducir sesgos. Un estudio de la Universidad de California (2022) demostró que la elección de ciertas arquitecturas de redes neuronales puede amplificar hasta 2.5 veces los sesgos presentes en los datos originales."
                },
                {
                    titulo: "Prejuicios humanos",
                    contenido: "Los desarrolladores transfieren inconscientemente sus propios sesgos a los sistemas. Según datos de AI Now Institute (2023), el 67% de los equipos de desarrollo de IA carecen de diversidad racial y cultural significativa."
                }
            ],
            colorFondo: "#303f9f"
        },
        {
            id: "impacto",
            titulo: "Impacto en la Equidad Sociodigital",
            contenido: "Los sesgos en la IA están generando nuevas formas de exclusión y desigualdad en la era digital, afectando principalmente a comunidades históricamente marginadas.",
            subtemas: [
                {
                    titulo: "Desigualdad de acceso",
                    contenido: "Barreras tecnológicas que perpetúan la brecha digital. Según la ONU (2023), las comunidades racializadas tienen 35% menos probabilidades de beneficiarse de servicios basados en IA."
                },
                {
                    titulo: "Discriminación en servicios",
                    contenido: "Sistemas automatizados que perjudican sistemáticamente a ciertos grupos. ProPublica documentó en 2021 que algoritmos de riesgo criminal predicen falsamente reincidencia en personas negras con una tasa 45% mayor que en personas blancas."
                },
                {
                    titulo: "Reforzamiento de estereotipos",
                    contenido: "La IA puede amplificar estereotipos existentes. Un análisis de Brookings Institution (2023) mostró que los sistemas de generación de imágenes producen representaciones estereotipadas de minorías raciales en el 73% de los casos."
                }
            ],
            colorFondo: "#5c6bc0"
        },
        {
            id: "ejemplos",
            titulo: "Ejemplos de Sesgos en IA",
            contenido: "Casos concretos donde se han documentado sesgos raciales en tecnologías de IA ampliamente utilizadas.",
            subtemas: [
                {
                    titulo: "Reconocimiento facial",
                    contenido: "Sistemas con menor precisión para rostros no caucásicos. Según el NIST (2024), las tasas de falsos positivos son 10-100 veces más altas para rostros de personas asiáticas y afrodescendientes en comparación con rostros caucásicos."
                },
                {
                    titulo: "Procesamiento de lenguaje natural",
                    contenido: "Asociaciones semánticas prejuiciosas en modelos de lenguaje. Stanford NLP Group (2023) demostró que modelos populares asocian nombres tradicionalmente afroamericanos con conceptos negativos un 25% más frecuentemente que nombres tradicionalmente caucásicos."
                }
            ],
            colorFondo: "#ff7043"
        },
        {
            id: "soluciones",
            titulo: "Soluciones Potenciales",
            contenido: "Estrategias y enfoques para mitigar los sesgos raciales en los sistemas de inteligencia artificial.",
            subtemas: [
                {
                    titulo: "Mejora en la recolección de datos",
                    contenido: "Conjuntos de datos más diversos e inclusivos. El proyecto DataDiversity (2024) ha logrado reducir hasta un 40% las disparidades de rendimiento entre diferentes grupos demográficos mediante la diversificación controlada de datos de entrenamiento."
                },
                {
                    titulo: "Inclusión de diversas perspectivas",
                    contenido: "Equipos de desarrollo multiculturales. Empresas que implementaron equipos diversos reportaron una disminución del 60% en incidentes de sesgo algorítmico según la IEEE (2023)."
                },
                {
                    titulo: "Monitoreo y regulación de algoritmos",
                    contenido: "Auditorías algorítmicas y marcos regulatorios. El Algorithmic Justice League documentó que las auditorías independientes detectan hasta un 78% más de sesgos que los sistemas internos de evaluación."
                }
            ],
            colorFondo: "#ffab91"
        },
        {
            id: "futuro",
            titulo: "Futuro de la IA y Equidad",
            contenido: "Tendencias y consideraciones para construir un ecosistema de IA más justo y equitativo.",
            subtemas: [
                {
                    titulo: "Innovaciones inclusivas",
                    contenido: "Nuevos enfoques técnicos para la IA justa. MIT Tech Review (2024) identificó más de 200 startups enfocadas específicamente en desarrollar tecnologías de IA equitativas."
                },
                {
                    titulo: "Políticas públicas de regulación",
                    contenido: "Marcos normativos para garantizar la equidad algorítmica. La Unión Europea, a través de su AI Act (2023), ha establecido requisitos obligatorios de evaluación de impacto de equidad para sistemas de IA de alto riesgo."
                }
            ],
            colorFondo: "#3f51b5"
        }
    ]

    return (
        <div className="pagina-principal">
            <header className="header">
                <h1>Sesgos Raciales en la Inteligencia Artificial</h1>
                <p className="subtitulo">Un análisis de su impacto en la equidad sociodigital</p>
            </header>

            <div className="introduccion">
                <p>
                    Los sistemas de inteligencia artificial están transformando nuestras sociedades, pero también
                    están reproduciendo y amplificando desigualdades históricas. En esta página analizamos los sesgos raciales
                    presentes en tecnologías de IA y sus consecuencias para la equidad sociodigital.
                </p>
            </div>

            <div className="seccion-interactiva">
                <h2>Explora nuestro contenido interactivo: 
                    <span className="subtitulo-interactivo"> haz clic en los modelos 3D y obtendras una descripción</span>
                </h2>
                <div className="contenido-interactivo">
                    <Canvas className="modelo1" shadows camera={{ position: [15, 15, 15], fov: 20 }}>
                        <CameraControls ref={controlsRef} />
                        <OrbitControls ref={controlsRef} enableZoom minDistance={5} maxDistance={20} target={[0, 0.5, 0]} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
                        <pointLight position={[10, 10, 10]} intensity={0.5} color="blue" />
                        <Scenario />
                        <Model1 position={[-5, -0.5, -5]} rotation={[0, Math.PI / 4, 0]} scale={2} onClick={(e) => handleModelClick(e, 1)} />
                        <Model2 position={[-5, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} scale={2} onClick={(e) => handleModelClick(e, 2)} />
                        <Model3 position={[1, -0.1, -1]} rotation={[0, Math.PI, 0]} scale={2} onClick={(e) => handleModelClick(e, 3)} />
                        {/* Se añade el componente que maneja `useFrame` dentro de `<Canvas>` */}
                        <CameraAnimation cameraState={cameraState} controlsRef={controlsRef} />
                    </Canvas>
                    {modelInfo && (
                        <div className="model-info">
                            <h3>{modelInfo.title}</h3>
                            <p>{modelInfo.description}</p>
                        </div>
                    )}
                    <div className="interactivo-placeholder">
                        <h3>Videos</h3>
                        <ExpertVideos />
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 - Juan Esteban Pereira - Universidad del Valle - Proyecto de Investigación sobre Sesgos Raciales en IA</p>
                <div className="referencias">
                    <p>Fuentes: MIT Media Lab, Stanford NLP Group, AI Now Institute, ProPublica, NIST, Brookings Institution, IEEE, Algorithmic Justice League, MIT Tech Review</p>
                </div>
            </footer>
        </div>
    );
};

export default Principal;
