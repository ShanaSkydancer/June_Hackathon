var vidUploadBtn = document.querySelector('#vidUploadBtn');
var uploadInput = document.querySelector('#uploadInput');
var vidzOutput = document.querySelector('.vidzOutput');
var vidHbs = document.querySelector('.vidHbs');
var vidHbsInstance = Handlebars.compile(vidHbs.innerHTML);

vidUploadBtn.addEventListener('click', function() {
    // checking if my inputs are not empty and if they are the users inputed info must be -
    // rendered on the DOM
    if (uploadInput !== undefined) {

        var reader = new FileReader();

        reader.addEventListener("load", function() {
          vidzOutput.innerHTML = vidHbsInstance({
            videoUpload:
            videoUpload: reader.result
          });


        }, false);
        reader.readAsDataURL(image.files[0]);

    }
    orderOutput.classList.remove("hidden")
})
