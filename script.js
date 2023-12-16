document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("image-gallery");

    const imagePaths = [ 
        "./images/20220217_233811-01.jpeg.jpg",
        "./images/IMG_20221125_235257.jpg",
        "./images/IMG_20221126_214030.jpg",
        "./images/IMG_20221129_190251.jpg",
        "./images/IMG_20221130_194815.jpg",
        "./images/IMG_20221201_150535.jpg",
        "./images/IMG_20221202_000106.jpg",
        "./images/IMG_20221202_221728.jpg",
        "./images/IMG_20221203_151327.jpg",
        "./images/IMG_20221203_151331.jpg",
        "./images/IMG_20221203_215745.jpg",
        "./images/IMG_20221204_023012.jpg",
        "./images/IMG_20221204_023017.jpg",
        "./images/IMG_20221204_132824.jpg",
        "./images/IMG_20221204_205824.jpg",
        "./images/IMG_20221207_162219.jpg",
        "./images/IMG_20221207_222313.jpg",
        "./images/IMG_20221207_222321.jpg",
        "./images/IMG_20221208_202700.jpg",
        "./images/IMG_20221209_150659.jpg",
        "./images/IMG_20221210_151629.jpg",
        "./images/IMG_20221210_195234.jpg",
        "./images/IMG_20221211_184004.jpg",
        "./images/IMG_20221211_230408.jpg",
        "./images/IMG_20221211_230413.jpg",
        "./images/IMG_20221212_152408.jpg",
        "./images/IMG_20221217_134239.jpg",
        "./images/IMG_20221217_192200.jpg",
        "./images/IMG_20221225_061805-01.jpeg.jpg",
        "./images/IMG_20221225_061805.jpg",
        "./images/IMG_20221225_172506.jpg",
        "./images/IMG_20221227_161949-01.jpeg.jpg",
        "./images/IMG_20221229_194853-01.jpeg.jpg",
        "./images/IMG_20221230_013323-01.jpeg.jpg",
        "./images/IMG_20230107_223347.jpg",
        "./images/IMG_20230107_223438-01.jpeg.jpg",
        "./images/IMG_20230107_223509-01.jpeg.jpg",
        "./images/IMG_20230108_173113-01.jpeg.jpg",
        "./images/IMG_20230108_173332.jpg",
        "./images/IMG_20230112_143335.jpg",
        "./images/IMG_20230117_222915.jpg",
        "./images/IMG_20230121_185408-01.jpeg.jpg",
        "./images/IMG_20230128_175207-01-01.jpeg.jpg",
        "./images/IMG_20230129_215540-01.jpeg.jpg",
        "./images/IMG_20230204_181539.jpg",
        "./images/IMG_20230206_164058.jpg",
        "./images/IMG_20230206_164416.jpg",
        "./images/IMG_20230212_160222.jpg",
        "./images/IMG_20230212_190007.jpg",
        "./images/IMG_20230219_181959.jpg",
        "./images/IMG_20230222_145759.jpg",
        "./images/IMG_20230227_164515.jpg",
        "./images/IMG_20230304_223952.jpg",
        "./images/IMG_20230310_201024.jpg",
        "./images/IMG_20230319_224208.jpg",
        "./images/IMG_20230418_192844-01.jpeg.jpg",
        "./images/IMG_20230419_171148.jpg",
        "./images/IMG_20230423_204344.jpg",
        "./images/IMG_20230426_204232.jpg",
        "./images/IMG_20230426_204253.jpg",
        "./images/IMG_20230501_153611.jpg",
        "./images/IMG_20230504_155454.jpg",
        "./images/IMG_20230508_230400.jpg",
        "./images/IMG_20230508_230643.jpg",
        "./images/IMG_20230510_170449.jpg",
        "./images/IMG_20230512_132447.jpg",
        "./images/IMG_20230512_191520.jpg",
        "./images/IMG_20230512_201301.jpg",
        "./images/IMG_20230514_165551.jpg",
        "./images/IMG_20230514_165625.jpg",
        "./images/IMG_20230514_180117.jpg",
        "./images/IMG_20230515_120337.jpg",
        "./images/IMG_20230515_120353.jpg",
        "./images/IMG_20230523_192153.jpg",
        "./images/IMG_20230524_164929.jpg",
        "./images/IMG_20230602_204642.jpg",
        "./images/IMG_20230603_181418.jpg",
        "./images/IMG_20230603_181613.jpg",
        "./images/IMG_20230605_161417.jpg",
        "./images/IMG_20230606_174314.jpg",
        "./images/IMG_20230610_194624.jpg",
        "./images/IMG_20230718_230327.jpg",
        "./images/IMG_20230730_163238.jpg",
        "./images/IMG_20230731_212336.jpg",
        "./images/IMG_20230803_003754.jpg",
        "./images/IMG_20230806_222041.jpg",
        "./images/IMG_20230810_235335.jpg",
        "./images/IMG_20231020_210701.jpg",
        "./images/IMG_20221130_194825.jpg",
        "./images/IMG_20221225_172908.jpg",
        "./images/IMG_20221007_182651.jpg",
        "./images/IMG_20221202_000045.jpg",
        
    ];

    imagePaths.forEach((path, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.className = "col-md-4 col-6 mb-4"; // Adjusted class for mobile view
        thumbnail.innerHTML = `
            <img src="${path}" alt="Image ${index + 1}" class="img-fluid thumbnail " data-index="${index}">
        `;
        galleryContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", displayImage);
    });

    function displayImage(event) {
        const index = event.target.dataset.index;
        const imagePath = imagePaths[index];
    
        const modalContent = `
            <div class="modal-content rounded-5">
            <div class="modal-body bg-dark rounded-4 p-2">
            <img src="${imagePath}" alt="Image ${parseInt(index) + 1}" class="img-fluid rounded-3" id="modalImage">
            </div>
            <div class="modal-icons px-3">
            <a href="${imagePath}" download="Image_${parseInt(index) + 1}.jpg" class="btn downloadd"><i class="fa-solid fa-circle-down" style="color: #e3e3e3;"></i></a>
            <button type="button" class="btn downloadd" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark" style="color: #ffffff;"></i></button>
                </div>
            </div>
        `;

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal", "fade");
        modalContainer.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                ${modalContent}
            </div>
        `;

        document.body.appendChild(modalContainer);

        const modal = new bootstrap.Modal(modalContainer);
        modal.show();

       

        // Ensure proper cleanup when modal is closed=======================
        modalContainer.addEventListener('hidden.bs.modal', function () {
            document.body.removeChild(modalContainer);
        });
    }
});




// page shifting ===========================================================
function aboutBtn(){

    const divelemnett = document.getElementById("about");
          divelemnett.innerHTML = `
            <object type="text/html" data="about.html" width="100%" height="500px"></object>
            
            `;
            const objectTag = divelemnett.querySelector('object');
  objectTag.addEventListener('load', function () {
    const contentDocument = objectTag.contentDocument;
    contentDocument.body.style.overflow = 'hidden';
  });
          
  
 
  }

  const aboutElement = document.getElementById("about");
  let originalContent = aboutElement.innerHTML;

  function aboutBtn() {
    aboutElement.innerHTML = ` <object type="text/html" data="about.html" width="100%" height="700px"></object>`;
  }

  function showNormalPage() {
    location.reload(true)
  }


//   message sending and custom alert message =========================================
function sendmsg(){

    var Name = document.getElementById("fname").value
    var email = document.getElementById("lname").value
    var subject = document.getElementById("subject").value
    if(!Name || !email || !subject){
        fillform('Fill all fields 🌝', 'danger')
    }else{
    
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxWAQHmhhl7o2xoDYku-PT32kQpkz6cPsu0KFn7HPGp430IxFOADmdQGaW1D5qkd4KSbQ/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                  send('Done 🌝', 'success')
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
        
                }
            })
        })
    }
}

function send(message, alertType) {
    // Create a custom alert box
    var alertBox = document.createElement('div');
    alertBox.className = 'custom-alert alert alert-' + alertType + ' alert-dismissible fade show';
    alertBox.innerHTML =
        message +' <button type="button" class="close btn " data-dismiss="alert">&times;</button>' 
      ;

    // Append(add) the alert box to the document body
    document.body.appendChild(alertBox);

    // Show the alert box
    alertBox.style.display = 'block';

    // Automatically close the alert after 3 seconds (adjust as needed)
    setTimeout(function () {
        alertBox.remove();
    }, 3000);
}

function fillform(message, alertType){
    var alertBox = document.createElement('div');
    alertBox.className = 'custom-alert alert alert-' + alertType + ' alert-dismissible fade show';
    alertBox.innerHTML =
        message +' <button type="button" class="close btn " data-dismiss="alert">&times;</button>' 
      ;

    // Append the alert box to the document body
    document.body.appendChild(alertBox);

    // Show the alert box
    alertBox.style.display = 'block';

    // Automatically close the alert after 3 seconds (adjust as needed)
    setTimeout(function () {
        alertBox.remove();
    }, 3000);
}