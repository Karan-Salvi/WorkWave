const jwt = require("jsonwebtoken");

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({
//         message: "User not authenticated",
//         success: false,
//       });
//     }
//     const decode = await jwt.verify(token, process.env.SECRET_KEY);
//     if (!decode) {
//       return res.status(401).json({
//         message: "Invalid token",
//         success: false,
//       });
//     }
//     req.id = decode.userId;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

function isAuthenticated() {
  return async (req, res, next) => {
    try {
      const token = req.cookies["token"];
      console.log("Our token is : ", token);
      if (!token) {
        return res.status(401).json({
          message: "User not authenticated",
          success: false,
        });
      }
      const decode = await jwt.verify(token, process.env.SECRET_KEY);
      console.log("Our payload is : ", decode);
      if (!decode) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
      req.id = decode.userId;
      return next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong..",
      });
    }
  };
}
module.exports = isAuthenticated;
