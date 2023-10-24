const Pizza = require('../model/pizza');
const pizza = require('../model/pizza')

//create pizza
const createPizza = (req,res) => {
    res.render('create', {title : 'Create new Items'});
}
const createPizzaPost = (req,res) => {
    const pizza = new Pizza(req.body);
  
    pizza.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
}
module.exports={
    createPizzaPost
};