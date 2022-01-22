// Start Load
var appData = { youtube: {} };

// Start Document
console.groupCollapsed('App Information');
console.log(`Name: ${storyCfg.title}`);
console.log(`Description: ${storyCfg.description}`);
console.log(`Author: ${storyCfg.creator}`);
console.log(`Author Page: ${storyCfg.creator_url}`);
console.log(`Age Rating: ${storyCfg.ageRating}`);
console.log(`Github Repository: https://github.com/${storyCfg.github_repository}`);
console.log(`Tags`, storyCfg.tags);
console.log(`NSFW`, true);
console.groupEnd();

// Start App
$(function() {
    console.log('Starting App...');
    storyData.start(function(fn, readme) {

        // Convert Data
        readme = marked.parse(readme);

        // Insert CID
        $('#info-base').append(
            $('<br/>'),
            $('<small>').text('CID: ' + storyData.cid),
            $('<br/>'),
            $('<a>', { class: 'small', href: `https://${storyData.cid32}.ipfs.dweb.link/` }).text('CID32: ' + storyData.cid32)
        )

        // Insert Readme
        $('#app').append(
            $('<hr>', { class: 'my-5' }),
            $('<div>', { id: 'readme', class: 'container' }).html(readme)
        );

        console.log(storyData);
        fn();

    });
});

/* 

    Music
    storyData.youtube.play('vwsRv0Rqncw')
    storyData.youtube.player.playVideo()
    storyData.youtube.player.pauseVideo()
    storyData.youtube.player.stopVideo()

    storyData.youtube.player.mute()
    storyData.youtube.player.unMute()
    storyData.youtube.player.isMuted()

    storyData.youtube.player.setVolume(100)

    player.getDuration()
    player.getVideoUrl()

    appData.youtube.onPlaying = function() {
        console.log(storyData.youtube.currentTime);
    };

*/