const UploadService = require('../services/UploadService');

module.exports = class UploadController {   
  /**
  * Store a newly created resource in storage.
  *
  * @return Response
  */
  static async store(req, res) {
    const data = await UploadService.save(req.headers.host, req.file, req.body.password)
    res.render('index', data)
  }
 
  /**
  * Display the specified resource.
  *
  * @param  int  $id
  * @return Response
  */
  static async show(req, res) {
    const data = await UploadService.download(req.params.id, req.body.password)

    if (data.error !== undefined)
    {
      res.render('password', data)
      return
    }

    res.download(data.path, data.name)
  }
 
  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return Response
  */
  static edit(req, res) {
    //
  }
 
  /**
  * Update the specified resource in storage.
  *
  * @param  int  $id
  * @return Response
  */
  static update(req, res) {
    //
  }
 
  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return Response
  */
  static delete(req, res) {
    //
  }
};