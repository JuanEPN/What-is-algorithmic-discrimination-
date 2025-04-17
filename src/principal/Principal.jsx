import "./Principal.css";
import React, { useEffect, useState } from "react";


const Principal = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

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
                }
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

            <div className="contenedor-tarjetas">
                {secciones.map((seccion, index) => (
                    <div
                        key={seccion.id}
                        className={`tarjeta ${isVisible ? 'visible' : ''}`}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                            backgroundColor: seccion.colorFondo,
                        }}
                    >
                        <h2>{seccion.titulo}</h2>
                        <p>{seccion.contenido}</p>
                        <div className="subtemas">
                            {seccion.subtemas.map((subtema, i) => (
                                <details key={i} className="subtema">
                                    <summary>{subtema.titulo}</summary>
                                    <p>{subtema.contenido}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="seccion-interactiva">
                <h2>Explora nuestro contenido interactivo</h2>
                <div className="contenido-interactivo">
                    <div className="interactivo-placeholder">
                        <h3>Modelos 3D</h3>
                        <p>Próximamente: Visualización interactiva del impacto de sesgos algorítmicos</p>
                    </div>
                    <div className="interactivo-placeholder">
                        <h3>Videos</h3>
                        <p>Próximamente: Entrevistas con expertos y demostraciones de sesgos en IA</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 - Proyecto de Investigación sobre Sesgos Raciales en IA</p>
                <div className="referencias">
                    <p>
                        Fuentes: MIT Media Lab, Stanford NLP Group, AI Now Institute, ProPublica, NIST, Brookings Institution, IEEE, Algorithmic Justice League, MIT Tech Review
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Principal;