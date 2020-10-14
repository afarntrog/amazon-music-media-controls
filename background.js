
  chrome.commands.onCommand.addListener(function (command) {

    chrome.tabs.query({},function(tabs){     
        tabs.forEach(function(tab){
            if (tab.url.includes("https://music.amazon.com/")){
                if (command === "prev-song")
                    chrome.tabs.executeScript(tab.id, {file: "prevSong.js"});
                else if (command === "next-song")
                    chrome.tabs.executeScript(tab.id, {file: "nextSong.js"});
            }
  
        });
    });

  });  
