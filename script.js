let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

let qrInput = document.getElementById("qrInput");

const generateQR = () => {
    if (qrInput.value.length > 0) {
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
        imgBox.classList.add("show-img");
    }else{
        qrInput.classList.add("error");
        setTimeout(() => {
            qrInput.classList.remove("error");
        },1000);
    }
};
