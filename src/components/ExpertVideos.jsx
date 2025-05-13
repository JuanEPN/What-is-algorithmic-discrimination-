import React from 'react';

const ExpertVideos = () => {
    const videos = [
        {
            titulo: 'Charla virtual "Ética y Discriminación algorítmica" Universidad de los Andes',
            url: 'https://www.youtube.com/embed/t9mtbslF8ms'
        },
        {
            titulo: 'Sesgos de Automatización y Discriminación Algorítmica: una Mirada Interseccional. Ponencia de Pilar Rivas Vallejo, catedrática de Derecho del Trabajo',
            url: 'https://youtube.com/embed/b4TV97Xxk_4'
        },
        {
            titulo: 'INTELIGENCIA ARTIFICIAL, SESGO ALGORÍTMICO Y VIOLENCIA',
            url: 'https://youtube.com/embed/c6gfYaxqLmo'
        },
        {
            titulo: '¿Cómo discrimina la inteligencia artificial? ¿Quiénes son sus víctimas?',
            url: 'https://youtube.com/embed/mWGzicjqAc0'
        }
    ];

    return (
        <section className='expert-videos'>
            <h2 className='text-2xl font-bold mb-4'>Entrevistas con expertos y demostraciones de sesgos en IA</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {videos.map((video, idx) => (
                    <div key={idx} className='video-card shadow-lg p-4 bg-white rounded-2xl'>
                        <h3 className='text-xl font-semibold mb-2'>{video.titulo}</h3>
                        <iframe
                            className='w-full h-64 rounded-lg mb-2'
                            src={video.url}
                            title={video.titulo}
                            frameBorder="0"
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
}; 

export default ExpertVideos;