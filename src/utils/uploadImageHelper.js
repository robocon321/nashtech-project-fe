class UploadImageHelper {
  constructor(loader) {
    this.loader = loader;
  }
  // Starts the upload process.

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            resolve({
              default: reader.result
            });
          };
          reader.onerror = function (error) {
            reject(error);
          };
        })
    );
  }
}

export default UploadImageHelper;