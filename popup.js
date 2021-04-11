const uri = "ytdl";

document.addEventListener('DOMContentLoaded', () => {
    for (const a of document.getElementsByTagName('a'))
        a.onclick = () => {
            if (a.href && a.href.length > 0)
                chrome.tabs.create({ active: true, url: a.href });
        }

    document.getElementById("downloadMp3").onclick = async () => download("mp3");
    document.getElementById("downloadMp4").onclick = async () => download("mp4");
});

const download = async (type) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.create({ active: true, url: uri + ":" + tab.url + ";" + type });
}
