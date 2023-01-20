window.obtener_todos_los_videos = function() {
    return Array.from(document.querySelectorAll("ytd-playlist-panel-video-renderer > a")).map(a => {
        return {
            name: a.querySelector("#container #meta h4").textContent.trim(),
            link: a.href.replace(/\&list=.*/g, "")
        };
    });
};
window.todos_los_videos = window.obtener_todos_los_videos();
window.todos_los_videos_en_json = JSON.stringify(window.todos_los_videos);
console.log(window.todos_los_videos_en_json);
navigator.clipboard.writeText(window.todos_los_videos_en_json);