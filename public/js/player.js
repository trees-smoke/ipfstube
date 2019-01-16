(function() {
        queries = {}
        $.each(document.location.search.substr(1).split('&'),function(q){
           console.log(q);var i = q.split('=')
           queries[i[0].toString()] = i[1].toString()
        })  
 
        var hash = queries.v
        try {
                var subs = JSON.parse(decodeURIComponent(queries.subs))
        } catch(e) {
                var subs = {}
        }
         // hash = '';
         /*subs = {
                "en": "",
                "es": ""
         }*/
 
        var playerHolder = $('#player__holder');
        var player = $('#player');
        var sources = [
                'ipfs:', // Browser handler
                'http://127.0.0.1:8080', // User's own IPFS daemon
                'https://smoketube.witness.pw', // Us
                'https://gateway.ipfs.io' // Official gateway
        ];
        var urls = sources.map(function(prefix) {
                return prefix + hashToPath(hash);
        });
       player.on('error', function(e) {
                console.log('video error', e);
                tryNextUrl();
        });

        Object.keys(subs).forEach((sub) => {

                // Sliced 'ipfs:' handler because Firefox doesn't support it for video tracks
                let urls = sources.slice(1).map((prefix) => {
                        return prefix + hashToPath(subs[sub]);
                });

                let tryNextUrl = (track) => {
                        let url = urls.shift();
                        if (url) {
                                track.get(0).src = url
                        }
                }

                let track = $('<track kind="subtitles" label="'+sub+'" srclang="'+sub+'"></track>')
                track.on('error', function() {
                        console.log("error")
                        tryNextUrl($(this));
                })

                player.append(track)
                tryNextUrl(track)
        })

        tryNextUrl();

        function tryNextUrl() {
                var url = urls.shift();
                if(url) {
                        console.log('Trying url', url);
                        player.get(0).src = url;
                } else {
                        playerHolder.empty().append($('<p>Unable to load video</p>'));
                }
        }

        function hashToPath(hash) {
                if(
                        hash.indexOf('/ipfs/') === -1 &&
                        hash.indexOf('/ipns/') === -1
                ) {
                        return '/ipfs/' + hash;
                } else {
                        return hash;
                }
        }
})();
