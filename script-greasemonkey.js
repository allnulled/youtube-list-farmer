// ==UserScript==
// @name     Listas de Youtube
// @version  1
// @grant    none
// ==/UserScript==

if (!window.location.href.startsWith("https://www.youtube.com/")) {
    return;
}

const obtener_todos_los_videos = function () {
    return Array.from(document.querySelectorAll("ytd-playlist-panel-video-renderer > a")).map(a => {
        return {
            name: a.querySelector("#container #meta h4").textContent.trim(),
            link: a.href.replace(/\&list=.*/g, "")
        };
    });
};

const al_clicar_el_boton = async function () {
    try {
        const todos_los_videos = obtener_todos_los_videos();
        console.log(todos_los_videos);
        const todos_los_videos_en_json = JSON.stringify(todos_los_videos);
        const nombre_de_autor = window.document.querySelector(".publisher[has-link-only_='']").textContent;
        const respuesta = await window.fetch("http://127.0.0.1:9095/" + nombre_de_autor, {
            method: "POST",
            cors: true,
            body: todos_los_videos_en_json,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const respuesta_en_texto = await respuesta.text();
        console.log(respuesta_en_texto);
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("load", () => {
    const boton = document.createElement("button");
    boton.textContent = "Imprimir links";
    Object.assign(boton.style, {
        padding: 0,
        top: 0,
        bottom: "auto",
        left: "auto",
        right: 0,
        position: "fixed",
        zIndex: 9999
    });
    boton.onclick = al_clicar_el_boton;
    document.body.appendChild(boton);
});