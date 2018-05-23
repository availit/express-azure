module.exports = (app, pool, sql) => {
 	app.get('/', (req, res) => {
 		res.render('index', { title: 'Main Event Express REST API on Azure!' });
 	});

  app.post('/create', (req, res) => {
    console.log(req.body);
 		res.send('Hello');
 	});

  app.get('/CustomerId', (req, res) => {
    pool.request()
    .input('emailaddress', sql.VarChar(100), req.query.user_email)
    //.input('datestart', sql.Date, '2018-05-15')
    //.input('dateend', sql.Date, '2018-05-19')
    .execute('pega.GetCustomerId')
    .then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.json({CustomerId: result.recordset[0].CustomerId});
      console.log('record set: %j', result.recordset[0]);

      //close connection
      //sql.close();
    }).catch(err => {
        console.log(err);
        //sql.close();
    })
  })

}
