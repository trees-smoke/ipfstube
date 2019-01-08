(function() {
        Dropzone.options.uploader = false;

        var dropzone = new Dropzone('#uploader', {
                url: 'https://smoketube.witness.pw/upload',
                uploadMultiple: false,
                parallelUploads: 1,
                dictDefaultMessage: 'Drop video here or click to upload',
                acceptedFiles: 'video/*'
        });

        dropzone.on('error', function() {
                console.log('upload error', arguments);
        });

        dropzone.on('success', function(file, response) {
                console.log('upload success', response);
                setTimeout(function() {
                        location.assign('player.html?v=' + response.Hash);
                }, 500);
        });
})();
