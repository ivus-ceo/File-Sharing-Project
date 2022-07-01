const bcrypt = require('bcrypt')
const File = require('../models/File')

module.exports = class UploadService {
  /**
  * Uploads file.
  *
  * @return Object
  */
  static async save(host, file, password = null) {
    password = (password !== null && password !== '') ? await bcrypt.hash(password, 10) : null 

    file = await File.create({
      path: file.path,
      originalName: file.originalname,
      password: password
    })

    return {
      link: `http://${ host }/download/${ file.id }`
    }
  }

  /**
  * Downloads file.
  *
  * @return Object
  */
  static async download(fileId, password = null) {
    const file = await File.findById(fileId);

    if (file.password !== null) {
      if (password === null || password === '') return { error: 'You need to type a password to download this file.' }

      if (!(await bcrypt.compare(password, file.password))) return { error: 'Wrong password' } 
    } 

    file.downloads++
    
    await file.save()

    return {
      path: file.path,
      name: file.originalName
    }
  }
}