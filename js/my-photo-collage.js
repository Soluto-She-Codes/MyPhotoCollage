
var photoCollage = {
    displayImages: function (images, gridSize) {        
        this.setImages(images, gridSize);
        $('#playPanel').show();
    },
    setImages: function (images, gridSize) {
        var imageIndex = 0;
        for (var i = 0; i < gridSize * gridSize; i++) {      
            // if will display all photos already piack a random picture
            if(imageIndex < images.length){
                var image = images[imageIndex];
                imageIndex++;
                
            }
            //  take photo that we didnt display yet
            else {
                var image = images[Math.floor(Math.random() * images.length)];
            }
            var li = $('<li class="item" onclick=window.location.href="' +(image.link) + '" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image.src + ')',
                'width': 600 / gridSize - 20,
                'height': 600 / gridSize - 20,
                'margin': '10px',
            });
            $('#images-view').append(li);
        }
       
    }
};

