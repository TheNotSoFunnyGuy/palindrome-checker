var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco cat"
  });
});

module.exports = router;
router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})


function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  flip = temp.reverse();

  if (phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") === temp.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")) {
    return true
    return `${flip}`
  }
  else {
    return false
  }

}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}

