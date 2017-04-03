var expressJTW = require("express-jwt");
var jwt = require("jsonwebtoken");

module.exports = function (app) {

  /**
   * Add JWT middleware
   */
  app.use(expressJTW({secret : "www.jobs.af"}).unless({ path : ['/login', '/logout']}))

  var UserModel = app.models.User;

    app.post('/login', function (req, res) {

        const userCredentials = {
            "email": req.body.email,
            "password": req.body.password,
            "ttl" : 2*60
        }
        UserModel.login(userCredentials, 'user', function (err, token) {
            if (err) {
                //custom logger
                res.status(401).json({"error": "login failed"});
                return;
            }

            //transform response to only return the token and ttl
          token.user.exp = token.ttl
            res.json({
                "token_api": token.id,
                "ttl": token.ttl,
                "user" : token.user,
                "token_jwt": jwt.sign({email: req.body.email,exp:token.ttl, userId : token.userId,realm : token.user.realm},"www.jobs.af")
            });
        });
    });

    app.post('/logout', function (req, res, next) {
        const access_token = req.query.access_token;
        if (!access_token) {
            res.status(400).json({"error": "access token required"});
            return;
        }
        UserModel.logout(access_token, function (err) {
            if (err) {
                res.status(404).json({"error": "logout failed"});
                return;
            }
            res.status(204);
        });
    });
}
