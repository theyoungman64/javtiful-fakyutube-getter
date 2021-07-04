let fakyutubeGetter = () => {
    if (window.location.origin === 'https://javtiful.com') {
        let ouoUrl = Array.from(document.querySelectorAll("#video-main .dropdown-menu.dropdown-menu-right > a"))
            .filter(item => { return item.href.includes('ouo') })[0]
            .href;
        let vidUrl = new URL(ouoUrl)
            .searchParams
            .get('s');
        window.open(vidUrl);
    } else {
        alert('not javtiful page : ' + window.location.origin);
    }
}

let updateIcon = () => {
    console.log('update item')
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fakyutubeGetter
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeinfo, tab) => {
    let hostname = new URL(tab.url).hostname;
    console.log(hostname)
    if (hostname != 'javtiful.com') {
        chrome.action.setIcon({
            path: {
                "16": "javtiful_icon_16_off.png",
                "48": "javtiful_icon_48_off.png",
                "128": "javtiful_icon_128_off.png",
            }
        })
    }else{
        chrome.action.setIcon({
            path: {
                "16": "javtiful_icon_16.png",
                "48": "javtiful_icon_48.png",
                "128": "javtiful_icon_128.png",
            }
        })
    }
})