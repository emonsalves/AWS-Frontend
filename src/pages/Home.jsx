const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Main content section with fireflies */}
            <div className="w-full relative">
                {/* Fireflies */}
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                <div className="firefly"></div>
                
                {/* Text content */}
                <div className="relative z-10">
                    <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-center text-white`}>
                        ¡Bienvenido a MNSLVS Solutions! <br />
                    </h1>
                    <p className={`text-xl md:text-2xl text-center text-gray-300`}>
                        Impulsando el Éxito de las PYMES a través de Soluciones Tecnológicas
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;