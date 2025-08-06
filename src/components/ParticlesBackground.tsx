import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  color?: string;
  type?: "links" | "dots" | "bubbles";
}

export default function ParticlesBackground({ type = "links" }: ParticlesBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // let options;
  
  if (type === "links") {
    // options = {
    //   particles: {
    //     number: {
    //       value: 60,
    //       density: {
    //         enable: true,
    //         value_area: 800
    //       }
    //     },
    //     color: {
    //       value: color
    //     },
    //     line_linked: {
    //       enable: true,
    //       distance: 150,
    //       color: color,
    //       opacity: 0.2,
    //       width: 1
    //     },
    //     move: {
    //       enable: true,
    //       speed: 1,
    //       direction: "none",
    //       random: true,
    //       straight: false,
    //       out_mode: "out",
    //       bounce: false,
    //     },
    //     size: {
    //       value: 3,
    //       random: true,
    //       anim: {
    //         enable: false,
    //         speed: 40,
    //         size_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     opacity: {
    //       value: 0.3,
    //       random: true,
    //       anim: {
    //         enable: false,
    //         speed: 1,
    //         opacity_min: 0.1,
    //         sync: false
    //       }
    //     }
    //   },
    //   interactivity: {
    // detect_on: "canvas", // تأكد أنها قيمة صحيحة
    //     events: {
    //       onhover: {
    //         enable: true,
    //         mode: "grab"
    //       },
    //       onclick: {
    //         enable: true,
    //         mode: "push"
    //       },
    //       resize: true
    //     },
    //     modes: {
    //       grab: {
    //         distance: 140,
    //         line_linked: {
    //           opacity: 0.8
    //         }
    //       }
    //     }
    //   },
    //   retina_detect: true
    // };
  } else if (type === "bubbles") {
    // options = {
    //   particles: {
    //     number: {
    //       value: 20,
    //       density: {
    //         enable: true,
    //         value_area: 800
    //       }
    //     },
    //     color: {
    //       value: color
    //     },
    //     shape: {
    //       type: "circle",
    //     },
    //     opacity: {
    //       value: 0.2,
    //       random: true,
    //       anim: {
    //         enable: true,
    //         speed: 1,
    //         opacity_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     size: {
    //       value: 50,
    //       random: true,
    //       anim: {
    //         enable: true,
    //         speed: 5,
    //         size_min: 10,
    //         sync: false
    //       }
    //     },
    //     line_linked: {
    //       enable: false,
    //     },
    //     move: {
    //       enable: true,
    //       speed: 2,
    //       direction: "none",
    //       random: true,
    //       straight: false,
    //       out_mode: "out",
    //       bounce: false,
    //     }
    //   },
    //   interactivity: {
    //     // detect_on: "canvas",
    //     events: {
    //       onhover: {
    //         enable: true,
    //         mode: "bubble"
    //       },
    //       onclick: {
    //         enable: true,
    //         mode: "repulse"
    //       },
    //       resize: true
    //     }
    //   },
    //   retina_detect: true
    // };
  } else {
    // options = {
    //   particles: {
    //     number: {
    //       value: 80,
    //       density: {
    //         enable: true,
    //         value_area: 800
    //       }
    //     },
    //     color: {
    //       value: color
    //     },
    //     shape: {
    //       type: "circle",
    //     },
    //     opacity: {
    //       value: 0.3,
    //       random: true,
    //     },
    //     size: {
    //       value: 3,
    //       random: true,
    //     },
    //     line_linked: {
    //       enable: false,
    //     },
    //     move: {
    //       enable: true,
    //       speed: 1,
    //       direction: "none",
    //       random: true,
    //       straight: false,
    //       out_mode: "out",
    //       bounce: false,
    //     }
    //   },
    //   interactivity: {
    //     detect_on: "canvas",
    //     events: {
    //       onhover: {
    //         enable: true,
    //         mode: "bubble"
    //       },
    //       onclick: {
    //         enable: true,
    //         mode: "push"
    //       },
    //       resize: true
    //     }
    //   },
    //   retina_detect: true
    // };
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
      />
    </div>
    
  );
}
