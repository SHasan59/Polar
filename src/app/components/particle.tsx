import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticleBackground = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // Initialize the tsParticles instance here
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            {isClient && (
                <Particles
                    id="tsparticles"
                    url="http://foo.bar/particles.json"
                    init={particlesInit}
                    loaded={particlesLoaded}
                />
            )}
        </>
    );
};

export default ParticleBackground;
