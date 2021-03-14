const fs = require('fs')

const buildFolder = `${__dirname}/../out/`
const oldFolderName = `${buildFolder}_next`
const newFolderName = `${buildFolder}next`

function getHtmlFiles(files) {
  return (htmlFiles = files
    .map((file) => {
      if (file.includes('.html')) {
        return file
      }
    })
    .filter((file) => file !== undefined))
}

fs.readdir(buildFolder, (err, folderFiles) => {
  if (err) {
    console.log('\x1b[31m', '🚨 Ha ocurrido un error al escanear la carpeta')
    console.log('Error: ', err)
    return
  }
  const htmlFiles = getHtmlFiles(folderFiles)

  htmlFiles.forEach((currentFile) => {
    const filePath = `${buildFolder}${currentFile}`

    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) console.log(err)

      const newData = data.replace(/\/_next/g, 'next')

      fs.writeFile(filePath, newData, 'utf8', function (err) {
        if (err) return console.log(err)
      })
    })
  })

  console.log('\x1b[32m', `✓ ${htmlFiles.length} Files modified`)

  fs.rename(oldFolderName, newFolderName, () =>
    console.log(
      '\x1b[32m',
      `✓ Folder ${oldFolderName} renamed to ${newFolderName} sucess`
    )
  )
})
