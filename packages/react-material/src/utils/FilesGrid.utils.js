const isBrowserImage = function (filename) {
    switch (filename.split('.').pop().toLowerCase()) {
        case 'png':
        case 'jpeg':
        case 'jpg':
        case 'gif':
        case 'img':
        case 'svg':
        case 'bmp':
            return true;
        default:
            return false;
    }
};

const isPDF = function (filename) {
    return filename.split('.').pop().toLowerCase() === 'pdf';
};

const getFileType = function (filename) {
    return filename.split('.').pop().toLowerCase();
};

export {
    isBrowserImage,
    isPDF,
    getFileType
};
