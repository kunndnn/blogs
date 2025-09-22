import Code from "../../components/Code";
import Image from '../../components/Image';
import Sidebar from "../../components/Sidebar";
import Step from "../../components/Step";

import img1 from '../../assets/images/blogs/nodejs/img1.png';
import img2 from '../../assets/images/blogs/nodejs/img2.png';
import img3 from '../../assets/images/blogs/nodejs/img3.png';
import img4 from '../../assets/images/blogs/nodejs/img4.png';
import img5 from '../../assets/images/blogs/nodejs/img5.png';
import img6 from '../../assets/images/blogs/nodejs/img6.png';
import img7 from '../../assets/images/blogs/nodejs/img7.png';
import img8 from '../../assets/images/blogs/nodejs/img8.png';
import img9 from '../../assets/images/blogs/nodejs/img9.png';

const steps = [
    { name: 'Install Node.js' },
    { name: 'Create project directories' },
    { name: 'Initialize node.js project' },
    { name: 'create folder structures' },
    { name: 'install dependencies/packages' },
    { name: 'create db connection file' },
    { name: 'create user model' },
    { name: 'create controller' },
    { name: 'create middleware' },
    { name: 'create routes' },
    { name: 'create index file' },
    { name: 'setup environmental variables' },
    { name: 'run the project' },
];

const codes = {
    versionCheck: `node -v\nnpm -v\n`,
    connectionFile: `const { connect } = require("mongoose");
    exports.connectDB = async () => {
      try {
        const connectionInstance = await connect(process.env.MONGODB_URI);
        console.log(\` \\n MongoDB connected !! DB HOST: \${connectionInstance.connection.host}\`);
      } catch (error) {console.log("MONGODB connectino error", error);
       process.exit(1);
      }
    };`,
    modelFile: `const { Schema, model } = require("mongoose");
    const userSchema = new Schema(
      {
        name: { type: String },
        email: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true },
      },
      { timestamps: true }
    );
    module.exports = model("User", userSchema);`,
    controller: `const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// @desc Register user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });
    const data = {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    };

    res.status(201).json({
      status: true,
      message: "user register successfully",
      data,
    });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ message: err.message });
  }
};

// @desc Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const data = {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      };

      res.status(200).json({
        status: true,
        message: "user loggedin successfully",
        data,
      });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get current user
exports.getMe = async (req, res) => {
  res
    .status(200)
    .json({ status: true, message: "user details", data: req.user });
};
`,
    middleware: `const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) return res.status(401).json({ message: "User not found" });

      return next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });
};
`,
    routes: `const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private
router.get("/me", protect, getMe);

module.exports = router;
`,
    indexFile: `require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// routes
const v1 = \`/api/v1\`;
app.use(\`\${v1}/auth\`, authRoutes);

const PORT = process.env.PORT ?? 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
  })
  .catch((err) => {
    console.error("DB connect error", err);
    process.exit(1);
  });
`,
    mongoURI: `mongodb://localhost:27017`,
}


const NodeProject = () => {
    const step = (num) => <Step stepNum={num} />;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl font-bold mb-4">Node.js project structure</h2>
                <p>This blog explains how to setup the Node.js project structure.</p>

                {step(1)}
                <p>Install Node.js</p>
                <ul className="list-disc ml-5">
                    <li>Download and install
                        <a
                            className="cursor-pointer mx-1 text-green-700"
                            onClick={() => window.open("https://nodejs.org/en", "_blank")}
                        >Node.js</a>
                        (LTS version recommended).</li>
                    <li>Verify installation
                        <Code parts={[{ type: 'text', text: codes.versionCheck }]} />
                        <Image src={img1} alt="node & npm versions" />
                    </li>
                </ul>

                {step(2)}
                <p>Create a Project Directory.</p>
                <Code parts={[{ type: 'text', text: 'mkdir my-node-app' }, { type: 'text', text: '\n' }, { type: 'text', text: 'cd my-node-app' }]} />

                {step(3)}
                <p>Initialize Node.js Project:</p>
                <ul className="list-disc ml-5">
                    <li>Generate package.json (project metadata & dependencies):
                        <Code parts={[{ type: 'text', text: 'npm init -y' }]} />
                    </li>
                    <li>Verify installation
                        This creates a package.json file with default values and now add the below scripts in the file.
                        <Image src={img2} alt="node & npm versions" />
                    </li>
                </ul>

                {step(4)}
                <p>In the root of the project now create a folder named <b>public (for serving static assets), src</b>, inside <b>src</b> folder create folders named <b> config, controllers, services/middlewares, models, routes </b> .</p>
                <p> Now create a file named index.js inside the src folder this is the entry point of the project.</p>

                {step(5)}
                <p>Now install the required dependencies/packages. </p>
                <Code parts={[{ type: 'text', text: 'npm i express mongoose dotenv bcrypt jsonwebtoken' }]} />

                {step(6)}
                <p>Now create a db.js file inside the config folder and write the below code inside it.</p>
                <Image src={img3} alt="mongoose connection" />
                <Code parts={[{
                    type: 'text', text: codes.connectionFile
                }]} />

                {step(7)}
                <p>Now create a User.js file inside the models folder.</p>
                <Image src={img4} alt="User model" />
                <Code parts={[{
                    type: 'text', text: codes.modelFile
                }]} />

                {step(8)}
                <p>Now create a authController.js file inside the controllers folder.</p>
                <Image src={img5} alt="controllers" />
                <Code parts={[{
                    type: 'text', text: codes.controller
                }]} />

                {step(9)}
                <p>Now create a authMiddleware.js file inside the middleware folder.</p>
                <Image src={img6} alt="middleware" />
                <Code parts={[{
                    type: 'text', text: codes.middleware
                }]} />

                {step(10)}
                <p>Now create a authRoutes.js file inside the routes folder.</p>
                <Image src={img7} alt="routes" />
                <Code parts={[{
                    type: 'text', text: codes.routes
                }]} />

                {step(11)}
                <p>Now write the below code inside the inde.jx file.</p>
                <Image src={img8} alt="routes" />
                <Code parts={[{
                    type: 'text', text: codes.indexFile
                }]} />

                {step(12)}
                <p>Now create a .env file in the root of the project with below variables.</p>
                <ul className=" list-disc ml-5">
                    <li>PORT=3000 # or any port of your choice</li>
                    <li>JWT_EXPIRES_IN="7d"  # or any duration of your choice</li>
                    <li> JWT_SECRET='#GY6890rf3' # or any secret of your choice </li>
                    <li>MONGODB_URI="mongodb://localhost:27017/dbName" #get the db connection string either from the mongodb Atlas or from the local machine (Compass).</li>
                </ul>
                <Image src={img9} alt="routes" />
                <Code parts={[
                    { type: 'text', text: `${codes.mongoURI}/` },
                    { type: 'placeholder', text: 'dbName' },
                ]} />

                {step(13)}
                <p>Now run the below command to run the project</p>
                <Code parts={[{ type: 'text', text: 'npm run dev' }]} />
                <p>Now you can access your project over the <span
                    onClick={() => window.open("http://localhost:3000", "_blank")}
                    className="text-blue-500 cursor-pointer">http://localhost:3000</span> URL</p>
            </div>

            {/* Sidebar */}
            <Sidebar steps={steps} />
        </div>
    )
}

export default NodeProject