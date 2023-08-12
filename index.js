particlesJS("background",{
    particles: {
        number: {
            value: 15, // Number particles (count)
            density: {
                enable: true,
                value_area: 300, //area where partcles will be distributed
            },
        },

        color: {
            value: '#ffffff', //partcles color
        },
        shape: {
            type: "triangle", //shape type
        },
        opacity: {
            value: 0.8, //Base opacity of particles
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim:  {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        //Connection lines
        line_linked: {
            enable: true,
            distance: 150, // max distance between linked partcles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        // Partcles movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior when particles move out of the canvas
        },
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                 enable: true, // Enable hover interactivity
                 mode: "repulse",
            },
            onclick: {
                enable: true, // Enable for click
                mode: "push",
            },
            resize: true,
        },
    },
    // Detect retina displays
    retina_detect: true,
});