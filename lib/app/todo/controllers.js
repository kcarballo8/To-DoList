

function goTodo(req, res){
  res.render('to_do.hbs', req.session);
}
function adding(req, res){
 
  if(req.session.items){
    req.session.items.push({item : req.body.item, done : false});
  }
  else{
    req.session.items = [req.body];
  }

  req.session.save(() => {
    res.redirect(303, 'list');  
  });
}

function saving(req, res){

  for(let i = 0; i < req.session.items.length; i++){
      req.session.items[i].done = (req.body['item-' + i]== 'done');   
  }

  req.session.save(() => {
    res.redirect(303, '/todo/list');  
  });
}

function removing(req, res){
  
  for(let i = req.session.items.length-1; i >=0; i--){
    if((req.body['item-' + i]== 'done')){
      req.session.items.splice(i,1);
    }
  }
  req.session.save(() => {
    res.redirect(303, '/todo/list');  
  });
}
module.exports= { adding, saving, removing, goTodo};