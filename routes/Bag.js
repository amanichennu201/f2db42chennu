var express = require('express');
var router = express.Router();

class Bag {
  constructor(Bag_type, Bag_Name, Bag_cost){
    this.Bag_type=Bag_type;
    this.Bag_Name=Bag_Name;
    this.Bag_cost=Bag_cost;
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let S1=new Bag('safari',1200,'plastic');
  let K1=new Bag('sky',1300,'cloth');
  let A1=new Bag('American Tourister',1400,'Smooth');
  res.render('Bag', { title: 'Search Results Bag',Bag : [S1,K1,A1] });
});

module.exports = router;
