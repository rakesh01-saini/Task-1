/* =========================================================
   THEME
========================================================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("light")) {
        icon.textContent = "☀";
    } else {
        icon.textContent = "☾";
    }
}


/* =========================================================
   CONTACT FORM
========================================================= */

function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you for your message! I will get back to you soon."
    );

    event.target.reset();
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    chess: {
        icon: "♟",
        title: "Chess Game",

        description:
            "Interactive web-based chess game with rule-based game logic, AI opponent, timers, move history, responsive UI.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },


    network: {
        icon: "◎",
        title: "Network Topologies Visualizer",

        description:
            "Interactive visualizer for Bus, Star, Ring, Mesh, Tree, Hybrid topologies with animated data flow.",

        technologies: [
            "PYTHON"
        ]
    },


    nirabot: {
        icon: "◇",
        title: "NiRaBot-X",

        description:
            "Humanoid AI robot combining Gemini AI, ESP32, IoT, surveillance, voice interaction, expressive robotic movement.",

        technologies: [
            "ESP32",
            "Embedded C/C++",
            "PYTHON",
            "Gemini API",
            "ESP32-CAM"
        ]
    },


    calculator: {
        icon: "＋",
        title: "Calculator",

        description:
            "Simple responsive calculator with clean interactive interface.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },


    portfolio: {
        icon: "⌘",
        title: "Personal Portfolio",

        description:
            "Personal portfolio website showcasing projects, skills, education and development journey.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }

};


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectName) {

    const project = projectData[projectName];

    if (!project) return;


    const modal = document.getElementById("projectModal");

    const title = document.getElementById("modalTitle");

    const icon = document.getElementById("modalIcon");

    const description =
        document.getElementById("modalDescription");

    const tech =
        document.getElementById("modalTech");

    const animation =
        document.getElementById("projectAnimation");


    title.textContent = project.title;

    icon.textContent = project.icon;

    description.textContent = project.description;


    tech.innerHTML = "";

    project.technologies.forEach(function(item) {

        const span = document.createElement("span");

        span.textContent = item;

        tech.appendChild(span);

    });


    animation.innerHTML = "";


    createProjectAnimation(
        projectName,
        animation
    );


    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    const animation =
        document.getElementById("projectAnimation");

    modal.classList.remove("show");

    animation.innerHTML = "";

    document.body.style.overflow = "";
}


/* =========================================================
   PROJECT ANIMATION ROUTER
========================================================= */

function createProjectAnimation(
    projectName,
    container
) {

    if (projectName === "chess") {
        createChessAnimation(container);
    }

    else if (projectName === "network") {
        createNetworkAnimation(container);
    }

    else if (projectName === "nirabot") {
        createRobotAnimation(container);
    }

    else if (projectName === "calculator") {
        createCalculatorAnimation(container);
    }

    else if (projectName === "portfolio") {
        createPortfolioAnimation(container);
    }
}


/* =========================================================
   CHESS ANIMATION
========================================================= */

function createChessAnimation(container) {

    const grid =
        document.createElement("div");

    grid.className = "animation-grid";

    container.appendChild(grid);


    const board =
        document.createElement("div");

    board.className = "modal-chess";


    const pieces = [

        "♜","♞","♝","♛","♚","♝","♞","♜",

        "♟","♟","♟","♟","♟","♟","♟","♟",

        "","","","","","","","",

        "","","","","","","","",

        "","","","♘","","","","",

        "","","","","","","","",

        "♙","♙","♙","♙","♙","♙","♙","♙",

        "♖","♘","♗","♕","♔","♗","♘","♖"

    ];


    pieces.forEach(function(piece) {

        const cell =
            document.createElement("span");

        cell.textContent = piece;

        board.appendChild(cell);

    });


    container.appendChild(board);


    const terminal =
        document.createElement("div");

    terminal.className =
        "animation-terminal";


    terminal.innerHTML = `
        <div class="line active">
            CHESS ENGINE INITIALIZED
        </div>

        <div class="line">
            &gt; loading board...
        </div>

        <div class="line">
            &gt; analyzing legal moves...
        </div>

        <div class="line active">
            &gt; AI MOVE: Bb5
        </div>

        <div class="line">
            &gt; move history updated
        </div>
    `;


    container.appendChild(terminal);
}


/* =========================================================
   NETWORK ANIMATION
========================================================= */

function createNetworkAnimation(container) {

    const grid =
        document.createElement("div");

    grid.className = "animation-grid";

    container.appendChild(grid);


    const network =
        document.createElement("div");

    network.className = "modal-network";


    const center =
        document.createElement("div");

    center.className =
        "node center-node";

    center.textContent = "SERVER";


    const n1 =
        document.createElement("div");

    n1.className = "node n1";

    n1.textContent = "NODE A";


    const n2 =
        document.createElement("div");

    n2.className = "node n2";

    n2.textContent = "NODE B";


    const n3 =
        document.createElement("div");

    n3.className = "node n3";

    n3.textContent = "NODE C";


    const line1 =
        document.createElement("div");

    line1.className = "connection";


    const line2 =
        document.createElement("div");

    line2.className = "connection two";


    const line3 =
        document.createElement("div");

    line3.className = "connection three";


    const packet =
        document.createElement("div");

    packet.className =
        "data-packet";


    network.appendChild(line1);
    network.appendChild(line2);
    network.appendChild(line3);

    network.appendChild(center);
    network.appendChild(n1);
    network.appendChild(n2);
    network.appendChild(n3);

    network.appendChild(packet);


    container.appendChild(network);
}


/* =========================================================
   ROBOT ANIMATION
========================================================= */

function createRobotAnimation(container) {

    const grid =
        document.createElement("div");

    grid.className = "animation-grid";

    container.appendChild(grid);


    const robot =
        document.createElement("div");

    robot.className = "modal-robot";


    const head =
        document.createElement("div");

    head.className =
        "modal-robot-head";


    const eye1 =
        document.createElement("div");

    eye1.className =
        "modal-robot-eye";


    const eye2 =
        document.createElement("div");

    eye2.className =
        "modal-robot-eye";


    head.appendChild(eye1);
    head.appendChild(eye2);


    const body =
        document.createElement("div");

    body.className =
        "modal-robot-body";


    const core =
        document.createElement("div");

    core.className =
        "modal-robot-core";

    core.textContent = "AI";


    body.appendChild(core);


    robot.appendChild(head);
    robot.appendChild(body);


    container.appendChild(robot);


    const terminal =
        document.createElement("div");

    terminal.className =
        "animation-terminal";


    terminal.innerHTML = `
        <div class="line active">
            NIRABOT-X SYSTEM
        </div>

        <div class="line">
            AI STATUS ........ READY
        </div>

        <div class="line">
            CAMERA .......... STREAMING
        </div>

        <div class="line">
            VOICE ........... ACTIVE
        </div>

        <div class="line active">
            SYSTEM .......... ONLINE
        </div>
    `;


    container.appendChild(terminal);
}


/* =========================================================
   CALCULATOR ANIMATION
========================================================= */

function createCalculatorAnimation(container) {

    const grid =
        document.createElement("div");

    grid.className =
        "animation-grid";

    container.appendChild(grid);


    const calculator =
        document.createElement("div");

    calculator.className =
        "modal-calculator";


    const screen =
        document.createElement("div");

    screen.className =
        "modal-calc-screen";


    screen.innerHTML = `
        <small>RESULT</small>
        <span id="modalCalcValue">25 × 4</span>
    `;


    calculator.appendChild(screen);


    const keys =
        document.createElement("div");

    keys.className =
        "modal-calc-keys";


    const values = [
        "AC", "±", "%", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "−",
        "1", "2", "3", "+",
        "0", ".", "="
    ];


    values.forEach(function(value) {

        const key =
            document.createElement("span");

        key.textContent = value;

        keys.appendChild(key);

    });


    calculator.appendChild(keys);

    container.appendChild(calculator);


    let count = 0;

    const result =
        document.getElementById("modalCalcValue");


    const calculations = [
        "25 × 4",
        "100"
    ];


    const interval =
        setInterval(function() {

            result.textContent =
                calculations[count % 2];

            count++;

        }, 1100);


    container.dataset.timer = interval;
}


/* =========================================================
   PORTFOLIO ANIMATION
========================================================= */

function createPortfolioAnimation(container) {

    const grid =
        document.createElement("div");

    grid.className =
        "animation-grid";

    container.appendChild(grid);


    const browser =
        document.createElement("div");

    browser.className =
        "modal-browser";


    const top =
        document.createElement("div");

    top.className =
        "modal-browser-top";


    browser.appendChild(top);


    const body =
        document.createElement("div");

    body.className =
        "modal-browser-body";


    const sidebar =
        document.createElement("div");

    sidebar.className =
        "modal-browser-sidebar";


    const main =
        document.createElement("div");

    main.className =
        "modal-browser-main";


    const lines = [
        "green-line",
        "medium",
        "",
        "short",
        "medium",
        "short"
    ];


    lines.forEach(function(type) {

        const line =
            document.createElement("div");

        line.className =
            "code-line " + type;

        main.appendChild(line);

    });


    body.appendChild(sidebar);
    body.appendChild(main);

    browser.appendChild(body);

    container.appendChild(browser);
}


/* =========================================================
   MODAL OUTSIDE CLICK
========================================================= */

document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeProject();
        }

    });


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeProject();
        }

    }
);


/* =========================================================
   CALCULATOR CLEANUP
========================================================= */

document
    .getElementById("projectModal")
    .addEventListener("click", function() {

        const animation =
            document.getElementById("projectAnimation");

        if (animation.dataset.timer) {

            clearInterval(
                Number(animation.dataset.timer)
            );

            delete animation.dataset.timer;
        }

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".side-nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
