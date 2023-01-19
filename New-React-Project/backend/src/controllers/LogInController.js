module.exports= ((req,res) => {
    const uid=req.body.uid;
    const pwd=req.body.pwd;
 
     if (uid === 'deepinslg@gmail.com'&& pwd==='12345678')
             res.json({name:'Deep Dutta'});
      else
             res.send('Invalid uid or pwd') ;      
     res.send("Welcome");
 });
