const theForm = document.getElementById("upload-form");
const imageUpload = document.getElementById("image-upload");

const onUploadImage = (event) => {
    event.preventDefault();

}

const onImageChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", (loadEv) => {
        console.log(loadEv.target.result);
    });
    fileReader.readAsArrayBuffer(file);
}

theForm.addEventListener("submit", onUploadImage);
imageUpload.addEventListener("change", onImageChange);