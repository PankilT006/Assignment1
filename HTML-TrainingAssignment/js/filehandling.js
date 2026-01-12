document.getElementById('file-upload').addEventListener('change', function (e) {
    const fileNameElement = this.parentElement.querySelector('.file-name');
    const fileName = e.target.files.length > 0
        ? e.target.files[0].name
        : 'No item Selected';
    fileNameElement.textContent = fileName;



})