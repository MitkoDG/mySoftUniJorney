function extract(text) {
    let index = text.lastIndexOf('\\')
    let fileName = text.substring(index + 1).split('.')
    let extension = fileName.pop()
    let template = fileName.join('.')

    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);

}
extract('C:\\Internal\\training-internal\\Template.pptx')