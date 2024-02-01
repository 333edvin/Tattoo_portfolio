document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("image-gallery");

    const imagePaths = [ 
        "images/w.jpg",
        "images/pic9.jpg",
        "images/pic8.jpg",
        "images/pic6.jpg",
        "images/pic5.jpg",
        "images/pic5.2.jpg",
        "images/pic4.jpg",
        "images/pic3.1.jpg",
        "images/pic2.jpg",
        "images/pic1.jpg",
        "images/pic0.jpg",
        "images/pic0.1.jpg",
        "images/pic-1.1.jpg",
        "images/pic_1.jpg",
        "images/pic 7.jpg",
        "images/pic 3.2.jpg",
        "images/IMG_20231208_133920-01.jpg",
        "images/IMG_20230806_222041.jpg",
        "images/IMG_20230606_174443-01.jpg",
        "images/IMG_20230603_181619-01.jpg",
        "images/IMG_20230508_230643-01---Copy.jpg",
        "images/IMG_20230108_173113-01---Copy.jpg",
        "images/IMG_20230107_223509-01---Copy.jpg",
        "images/IMG_20230107_223438-01---Copy.jpg",
        "images/IMG_20221227_161954-01---Copy.jpg",
        "images/IMG_20221227_161949-01---Copy.jpg",
        "images/IMG_20221225_172946-01---Copy.jpg",
        "images/IMG_20221225_061805-01---Copy.jpg",
        "images/IMG_2275-01.jpg",
        "images/20220624_123447.jpg",
        "images/20220604_224036.jpg",
        "images/20210830_165751.jpg",
        "images/20210310_185127.jpg",
        "images/20210302_160019.jpg",
        "images/20210207_171852.jpg",
        "images/20210104_200602.jpg",
        "images/20201220_202412.jpg",
        "images/20201122_142508.jpg",
        "images/20201027_162552.jpg"
        
    ];

    imagePaths.forEach((path, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.className = "col-md-3 col-6 mb-4"; // Updated class for 4 columns per row
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
// function aboutBtn(){

//     const divelemnett = document.getElementById("about");
//           divelemnett.innerHTML = `
//             <object type="text/html" data="about.html" width="100%" height="500px"></object>
            
//             `;
//             const objectTag = divelemnett.querySelector('object');
//   objectTag.addEventListener('load', function () {
//     const contentDocument = objectTag.contentDocument;
//     contentDocument.body.style.overflow = 'hidden';
//   });
          
  
 
//   }

//   const aboutElement = document.getElementById("about");
//   let originalContent = aboutElement.innerHTML;

//   function aboutBtn() {
//     aboutElement.innerHTML = ` <object type="text/html" data="about.html" width="100%" height="700px"></object>`;
//   }

//   function showNormalPage() {
//     location.reload(true)
//   }


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