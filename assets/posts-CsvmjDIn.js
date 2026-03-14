import{j as t}from"./vendor-motion-BMzj7qdh.js";import{c as ie}from"./index-BCgAzcFE.js";import{r as Ue}from"./vendor-router-7jSiYg31.js";import{F as ze,a as He}from"./index-BucHDtUe.js";import{B as Me}from"./Button-CZbW1P4_.js";const Ae=e=>{const s=ie.c(28),{parts:o,styles:n}=e;let r,l,i;s[0]!==o?(r=o===void 0?[]:o,l=Ue.useState,i=r?.map(Le).filter(Boolean).reduce(We,{}),s[0]=o,s[1]=r,s[2]=l,s[3]=i):(r=s[1],l=s[2],i=s[3]);const[a,d]=l(i),[c,u]=Ue.useState(!1);let m;s[4]===Symbol.for("react.memo_cache_sentinel")?(m=(v,f)=>{d(C=>({...C,[v]:f}))},s[4]=m):m=s[4];const h=m;let x;if(s[5]!==r||s[6]!==a){const v=()=>r?.map((f,C)=>f.type==="placeholder"?a[C]:f.text).join("");x=async()=>{try{await navigator.clipboard.writeText(v()),u(!0),setTimeout(()=>u(!1),2e3)}catch(f){console.error("Failed to copy:",f)}},s[5]=r,s[6]=a,s[7]=x}else x=s[7];const g=x,S=`relative w-full ${n??""}`,k=`w-full bg-background-surface text-green-400 p-4 rounded-2xl overflow-x-auto whitespace-pre-wrap break-words border border-white/5 shadow-2xl ${n??""}`;let y;s[8]!==r||s[9]!==a?(y=r?.map((v,f)=>v?.type==="placeholder"?t.jsx("input",{value:a[f],onChange:C=>h(f,C.target.value),className:`\r
                    bg-white/5\r
                    text-brand-primary\r
                    font-bold\r
                    px-1\r
                    mx-1\r
                    rounded-md\r
                    border border-white/10\r
                    focus:border-brand-primary/50 \r
                    focus:bg-white/10\r
                    focus:outline-none\r
                    min-w-[2ch]\r
                    transition-all\r
                  `,size:a[f].length||4},f):t.jsx("span",{className:"opacity-90",children:v.text},f)),s[8]=r,s[9]=a,s[10]=y):y=s[10];let b;s[11]!==y?(b=t.jsx("code",{className:"leading-relaxed text-sm sm:text-base md:text-lg",children:y}),s[11]=y,s[12]=b):b=s[12];let j;s[13]!==k||s[14]!==b?(j=t.jsx("pre",{className:k,children:b}),s[13]=k,s[14]=b,s[15]=j):j=s[15];let _;s[16]!==c?(_=c?t.jsx(ze,{className:"text-base sm:text-lg text-green-400"}):t.jsx(He,{className:"cursor-pointer text-base sm:text-lg"}),s[16]=c,s[17]=_):_=s[17];let w;s[18]!==g||s[19]!==_?(w=t.jsx(Me,{onClick:g,className:"absolute top-3 right-3 text-white/50 hover:text-white transition-all p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10",children:_}),s[18]=g,s[19]=_,s[20]=w):w=s[20];let N;s[21]!==c?(N=c&&t.jsx("span",{className:"absolute -bottom-8 right-2 text-[10px] sm:text-xs text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full backdrop-blur-md shadow-xl",children:"Copied!"}),s[21]=c,s[22]=N):N=s[22];let I;return s[23]!==j||s[24]!==w||s[25]!==N||s[26]!==S?(I=t.jsx(t.Fragment,{children:t.jsxs("div",{className:S,children:[j,w,N]})}),s[23]=j,s[24]=w,s[25]=N,s[26]=S,s[27]=I):I=s[27],I};function Le(e,s){return e.type==="placeholder"?{[s]:e.text}:null}function We(e,s){return{...e,...s}}function Ve(e){const s=ie.c(15),{src:o,alt:n,styles:r}=e,[l,i]=Ue.useState(!1);let a,d;s[0]!==l?(a=()=>{const g=document.body.style.overflow;return document.body.style.overflow=l?"hidden":g,()=>{document.body.style.overflow=g}},d=[l],s[0]=l,s[1]=a,s[2]=d):(a=s[1],d=s[2]),Ue.useEffect(a,d);const c=`mt-4 rounded shadow-md w-full max-w-[20rem] md:max-w-md cursor-pointer ${r??""}`;let u;s[3]===Symbol.for("react.memo_cache_sentinel")?(u=()=>i(!0),s[3]=u):u=s[3];let m;s[4]!==n||s[5]!==o||s[6]!==c?(m=t.jsx("img",{src:o,alt:n,className:c,onClick:u,loading:"lazy"}),s[4]=n,s[5]=o,s[6]=c,s[7]=m):m=s[7];let h;s[8]!==n||s[9]!==l||s[10]!==o?(h=l&&t.jsx("div",{className:"fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm mb-0",onClick:()=>i(!1),children:t.jsxs("div",{className:"relative max-w-3xl max-h-[90vh] w-auto",onClick:Je,children:[t.jsx(Me,{onClick:()=>i(!1),className:"absolute -top-3 -right-3 bg-brand-primary/80 text-white px-3 py-1 rounded-full hover:bg-brand-secondary transition cursor-pointer",children:"✕"}),t.jsx("img",{src:o,alt:n,className:"rounded shadow-lg max-w-sm md:max-w-full max-h-[90vh] object-contain",loading:"lazy"})]})}),s[8]=n,s[9]=l,s[10]=o,s[11]=h):h=s[11];let x;return s[12]!==m||s[13]!==h?(x=t.jsxs(t.Fragment,{children:[m,h]}),s[12]=m,s[13]=h,s[14]=x):x=s[14],x}function Je(e){return e.stopPropagation()}const Xe=e=>{const s=ie.c(5),{steps:o}=e;if(!o)return null;const n=Ye;let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsxs("h3",{className:"text-xl font-bold mb-4 text-text-main flex items-center gap-2",children:[t.jsx("span",{className:"w-1.5 h-6 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(129,140,248,0.5)]"}),"Quick Steps"]}),s[0]=r):r=s[0];let l;s[1]!==o?(l=o?.map((a,d)=>{const{name:c}=a;return t.jsxs("div",{className:"flex gap-4 group",children:[t.jsx("span",{className:"text-xs font-bold text-brand-primary/40 group-hover:text-brand-primary transition-colors shrink-0 mt-1.5 font-mono",children:String(d+1).padStart(2,"0")}),t.jsx(Me,{onClick:()=>document.getElementById(`step-${d+1}`).scrollIntoView({behavior:"smooth"}),className:"text-text-muted group-hover:text-text-main hover:cursor-pointer text-left transition-all font-medium text-sm leading-relaxed w-full",children:n(c)})]},d)}),s[1]=o,s[2]=l):l=s[2];let i;return s[3]!==l?(i=t.jsxs("div",{className:"hidden lg:block lg:col-span-4 sticky top-24 space-y-6 h-fit pl-8 border-l border-border-soft",children:[r,t.jsx("div",{className:"space-y-4",children:l})]}),s[3]=l,s[4]=i):i=s[4],i};function Ye(e){return e.replace(/\s+/g," ").toLowerCase()}const Ke=e=>{const s=ie.c(3),{stepNum:o}=e,n=`step-${o}`;let r;return s[0]!==o||s[1]!==n?(r=t.jsxs("h3",{id:n,className:"mt-8 text-2xl font-semibold scroll-mt-24 text-text-main",children:["Step ",o,":"]}),s[0]=o,s[1]=n,s[2]=r):r=s[2],r},qe={Code:Ae,Image:Ve,Sidebar:Xe,Step:Ke},Qe="/blogs/assets/image1-zbsltFLs.png",Ze="/blogs/assets/image2-ieO3mnVY.png",et="/blogs/assets/image3-D8_8r3db.png",{Code:Ge,Image:Ee,Sidebar:tt,Step:st}=qe,rt=[{name:"Create GitHub repository"},{name:"Install gh-pages"},{name:"Update vite.config.js"},{name:"Add deploy scripts"},{name:"Add homepage key"},{name:"Deploy project to github"}],ot=()=>{const e=ie.c(20),s=lt;let o,n,r,l,i,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("h2",{className:"text-3xl font-bold mb-4 text-text-main",children:"Host React App with GitHub"}),n=t.jsx("p",{children:"This blog explains how to deploy a React app using GitHub Pages."}),r=s(1),l=t.jsx("p",{children:"Create a GitHub repository and set it as public."}),i=s(2),a=t.jsx("p",{children:"Now Install gh-pages package:"}),e[0]=o,e[1]=n,e[2]=r,e[3]=l,e[4]=i,e[5]=a):(o=e[0],n=e[1],r=e[2],l=e[3],i=e[4],a=e[5]);let d,c,u,m,h,x,g,S,k,y,b,j;e[6]===Symbol.for("react.memo_cache_sentinel")?(k=t.jsx(Ge,{parts:[{type:"text",text:"npm install gh-pages"}]}),y=s(3),b=t.jsx("p",{children:"Now add your GitHub repository name in the vite.config.js file as base in config method as shown in the image below:"}),j=t.jsx(Ee,{src:Qe,alt:"Vite config"}),d=s(4),c=t.jsx("p",{children:"Now add predeploy and deploy scripts in package.json as shown in image below:"}),u=t.jsx(Ee,{src:Ze,alt:"package.json scripts"}),m=s(5),h=t.jsx("p",{children:"Now add homepage key in the package.json file and here add your github repo link replace username with your github username and github-repo-name with your github repository name:"}),x=t.jsx(Ee,{src:et,alt:"package.json homepage"}),g=s(6),S=t.jsx("p",{children:"After all the above steps now run the command : this command will create the build of the react app and then publish the code to the github pages section wait for few minutes."}),e[6]=d,e[7]=c,e[8]=u,e[9]=m,e[10]=h,e[11]=x,e[12]=g,e[13]=S,e[14]=k,e[15]=y,e[16]=b,e[17]=j):(d=e[6],c=e[7],u=e[8],m=e[9],h=e[10],x=e[11],g=e[12],S=e[13],k=e[14],y=e[15],b=e[16],j=e[17]);let _;e[18]===Symbol.for("react.memo_cache_sentinel")?(_=t.jsx(Ge,{parts:[{type:"text",text:"npm run deploy"}]}),e[18]=_):_=e[18];let w;return e[19]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8",children:[t.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[o,n,r,l,i,a,k,y,b,j,d,c,u,m,h,x,g,S,_,t.jsxs("p",{children:["To access the live url of the web app visit the  ",t.jsx("a",{href:"https://username.github.io/github-repo-name",children:"https://username.github.io/github-repo-name ."}),"Replace the username with your github username and github-repo-name with your github repository name."]})]}),t.jsx(tt,{steps:rt})]}),e[19]=w):w=e[19],w};function lt(e){return t.jsx(st,{stepNum:e})}const nt="/blogs/assets/thumbnail-OmwKpVef.png",at="/blogs/assets/img1-DRbWAA7l.png",it="/blogs/assets/img2-C7k7KnTo.png",ct="/blogs/assets/img3-p04h_RCf.png",mt="/blogs/assets/img4-BdtRDNgC.png",dt="/blogs/assets/img5-wx0Noo05.png",pt="/blogs/assets/img6-Bqy8jWQi.png",xt="/blogs/assets/img7-xCk9zIbi.png",ht="/blogs/assets/img8-C-6OjMyr.png",ut="/blogs/assets/img9-D2mdfoLD.png",{Code:re,Image:ne,Sidebar:ft,Step:gt}=qe,yt=[{name:"Install Node.js"},{name:"Create project directories"},{name:"Initialize node.js project"},{name:"create folder structures"},{name:"install dependencies/packages"},{name:"create db connection file"},{name:"create user model"},{name:"create controller"},{name:"create middleware"},{name:"create routes"},{name:"create index file"},{name:"setup environmental variables"},{name:"run the project"}],ae={versionCheck:`node -v
npm -v
`,connectionFile:`const { connect } = require("mongoose");
    exports.connectDB = async () => {
      try {
        const connectionInstance = await connect(process.env.MONGODB_URI);
        console.log(\` \\n MongoDB connected !! DB HOST: \${connectionInstance.connection.host}\`);
      } catch (error) {console.log("MONGODB connectino error", error);
       process.exit(1);
      }
    };`,modelFile:`const { Schema, model } = require("mongoose");
    const userSchema = new Schema(
      {
        name: { type: String },
        email: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true },
      },
      { timestamps: true }
    );
    module.exports = model("User", userSchema);`,controller:`const bcrypt = require("bcrypt");
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
`,middleware:`const jwt = require("jsonwebtoken");
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
`,routes:`const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private
router.get("/me", protect, getMe);

module.exports = router;
`,indexFile:`require("dotenv").config();
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
`,mongoURI:"mongodb://localhost:27017"},bt=()=>{const e=ie.c(54),s=jt;let o,n,r,l;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("h2",{className:"text-3xl font-bold mb-4 text-text-main",children:"Node.js project structure"}),n=t.jsx("p",{children:"This blog explains how to setup the Node.js project structure."}),r=s(1),l=t.jsx("p",{children:"Install Node.js"}),e[0]=o,e[1]=n,e[2]=r,e[3]=l):(o=e[0],n=e[1],r=e[2],l=e[3]);let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsxs("li",{children:["Download and install",t.jsx("a",{className:"cursor-pointer mx-1 text-brand-primary hover:text-brand-secondary underline decoration-brand-secondary",onClick:_t,children:"Node.js"}),"(LTS version recommended)."]}),e[4]=i):i=e[4];let a,d,c;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs("ul",{className:"list-disc ml-5",children:[i,t.jsxs("li",{children:["Verify installation",t.jsx(re,{parts:[{type:"text",text:ae?.versionCheck}]}),t.jsx(ne,{src:at,alt:"node & npm versions"})]})]}),d=s(2),c=t.jsx("p",{children:"Create a Project Directory."}),e[5]=a,e[6]=d,e[7]=c):(a=e[5],d=e[6],c=e[7]);let u,m,h;e[8]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(re,{parts:[{type:"text",text:"mkdir my-node-app"},{type:"text",text:`
`},{type:"text",text:"cd my-node-app"}]}),h=s(3),u=t.jsx("p",{children:"Initialize Node.js Project:"}),e[8]=u,e[9]=m,e[10]=h):(u=e[8],m=e[9],h=e[10]);let x;e[11]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsxs("li",{children:["Generate package.json (project metadata & dependencies):",t.jsx(re,{parts:[{type:"text",text:"npm init -y"}]})]}),e[11]=x):x=e[11];let g,S;e[12]===Symbol.for("react.memo_cache_sentinel")?(g=t.jsxs("ul",{className:"list-disc ml-5",children:[x,t.jsxs("li",{children:["Verify installation This creates a package.json file with default values and now add the below scripts in the file.",t.jsx(ne,{src:it,alt:"node & npm versions"})]})]}),S=s(4),e[12]=g,e[13]=S):(g=e[12],S=e[13]);let k;e[14]===Symbol.for("react.memo_cache_sentinel")?(k=t.jsx("b",{children:"public (for serving static assets), src"}),e[14]=k):k=e[14];let y;e[15]===Symbol.for("react.memo_cache_sentinel")?(y=t.jsx("b",{children:"src"}),e[15]=y):y=e[15];let b,j,_,w;e[16]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsxs("p",{children:["In the root of the project now create a folder named ",k,", inside ",y," folder create folders named ",t.jsx("b",{children:" config, controllers, services/middlewares, models, routes "})," ."]}),j=t.jsx("p",{children:" Now create a file named index.js inside the src folder this is the entry point of the project."}),_=s(5),w=t.jsx("p",{children:"Now install the required dependencies/packages. "}),e[16]=b,e[17]=j,e[18]=_,e[19]=w):(b=e[16],j=e[17],_=e[18],w=e[19]);let N,I,v,f;e[20]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx(re,{parts:[{type:"text",text:"npm i express mongoose dotenv bcrypt jsonwebtoken"}]}),I=s(6),v=t.jsx("p",{children:"Now create a db.js file inside the config folder and write the below code inside it."}),f=t.jsx(ne,{src:ct,alt:"mongoose connection"}),e[20]=N,e[21]=I,e[22]=v,e[23]=f):(N=e[20],I=e[21],v=e[22],f=e[23]);let C,R,P,T;e[24]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsx(re,{parts:[{type:"text",text:ae?.connectionFile}]}),R=s(7),P=t.jsx("p",{children:"Now create a User.js file inside the models folder."}),T=t.jsx(ne,{src:mt,alt:"User model"}),e[24]=C,e[25]=R,e[26]=P,e[27]=T):(C=e[24],R=e[25],P=e[26],T=e[27]);let D,O,U,q;e[28]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsx(re,{parts:[{type:"text",text:ae?.modelFile}]}),O=s(8),U=t.jsx("p",{children:"Now create a authController.js file inside the controllers folder."}),q=t.jsx(ne,{src:dt,alt:"controllers"}),e[28]=D,e[29]=O,e[30]=U,e[31]=q):(D=e[28],O=e[29],U=e[30],q=e[31]);let E,F,B,M;e[32]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsx(re,{parts:[{type:"text",text:ae?.controller}]}),F=s(9),B=t.jsx("p",{children:"Now create a authMiddleware.js file inside the middleware folder."}),M=t.jsx(ne,{src:pt,alt:"middleware"}),e[32]=E,e[33]=F,e[34]=B,e[35]=M):(E=e[32],F=e[33],B=e[34],M=e[35]);let G,z,H,A;e[36]===Symbol.for("react.memo_cache_sentinel")?(G=t.jsx(re,{parts:[{type:"text",text:ae?.middleware}]}),z=s(10),H=t.jsx("p",{children:"Now create a authRoutes.js file inside the routes folder."}),A=t.jsx(ne,{src:xt,alt:"routes"}),e[36]=G,e[37]=z,e[38]=H,e[39]=A):(G=e[36],z=e[37],H=e[38],A=e[39]);let L,W,V,J;e[40]===Symbol.for("react.memo_cache_sentinel")?(L=t.jsx(re,{parts:[{type:"text",text:ae?.routes}]}),W=s(11),V=t.jsx("p",{children:"Now write the below code inside the inde.jx file."}),J=t.jsx(ne,{src:ht,alt:"routes"}),e[40]=L,e[41]=W,e[42]=V,e[43]=J):(L=e[40],W=e[41],V=e[42],J=e[43]);let X,Y,K;e[44]===Symbol.for("react.memo_cache_sentinel")?(X=t.jsx(re,{parts:[{type:"text",text:ae?.indexFile}]}),Y=s(12),K=t.jsx("p",{children:"Now create a .env file in the root of the project with below variables."}),e[44]=X,e[45]=Y,e[46]=K):(X=e[44],Y=e[45],K=e[46]);let Q,Z;e[47]===Symbol.for("react.memo_cache_sentinel")?(Q=t.jsxs("ul",{className:" list-disc ml-5",children:[t.jsx("li",{children:"PORT=3000 # or any port of your choice"}),t.jsx("li",{children:'JWT_EXPIRES_IN="7d"  # or any duration of your choice'}),t.jsx("li",{children:" JWT_SECRET='#GY6890rf3' # or any secret of your choice "}),t.jsx("li",{children:'MONGODB_URI="mongodb://localhost:27017/dbName" #get the db connection string either from the mongodb Atlas or from the local machine (Compass).'})]}),Z=t.jsx(ne,{src:ut,alt:"routes"}),e[47]=Q,e[48]=Z):(Q=e[47],Z=e[48]);let ee,te,se;e[49]===Symbol.for("react.memo_cache_sentinel")?(ee=t.jsx(re,{parts:[{type:"text",text:`${ae?.mongoURI}/`},{type:"placeholder",text:"dbName"}]}),te=s(13),se=t.jsx("p",{children:"Now run the below command to run the project"}),e[49]=ee,e[50]=te,e[51]=se):(ee=e[49],te=e[50],se=e[51]);let oe;e[52]===Symbol.for("react.memo_cache_sentinel")?(oe=t.jsx(re,{parts:[{type:"text",text:"npm run dev"}]}),e[52]=oe):oe=e[52];let le;return e[53]===Symbol.for("react.memo_cache_sentinel")?(le=t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8",children:[t.jsxs("div",{className:"col-span-12 lg:col-span-8 space-y-6",children:[o,n,r,l,a,d,c,m,h,u,g,S,b,j,_,w,N,I,v,f,C,R,P,T,D,O,U,q,E,F,B,M,G,z,H,A,L,W,V,J,X,Y,K,Q,Z,ee,te,se,oe,t.jsxs("p",{children:["Now you can access your project over the ",t.jsx("span",{onClick:wt,className:"text-brand-primary hover:text-brand-secondary cursor-pointer",children:"http://localhost:3000"})," URL"]})]}),t.jsx(ft,{steps:yt})]}),e[53]=le):le=e[53],le};function jt(e){return t.jsx(gt,{stepNum:e})}function _t(){return window.open("https://nodejs.org/en","_blank")}function wt(){return window.open("http://localhost:3000","_blank")}const St="/blogs/assets/thumbnail-D7LF9_-8.png",kt="/blogs/assets/img1-BWEMyH3F.png",Nt="/blogs/assets/img2-Sm8dx4Pe.png",vt="/blogs/assets/img3-DtWt-fVO.png",{Code:p,Image:Fe,Sidebar:Ct,Step:$t}=qe,It=[{name:"Install docker"},{name:"Check installed docker version"},{name:"Create docker image of project"},{name:"Push image to the docker hub"},{name:"Docker container commands"},{name:"Docker images commands"}],Be={dockerFile:`# Use official Python 3.13 slim image
FROM python:3.13-slim

# Set working directory
WORKDIR /app

# Upgrade pip
RUN pip install --upgrade pip

# Copy project files
COPY pyproject.toml ./
COPY main.py ./

# Install dependencies directly in final image
RUN pip install --no-cache-dir fastapi[standard] uvicorn

# Expose FastAPI port
EXPOSE 8000

# Start the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,dockerCmd:`docker pull yourusername/fastapi-backend:latest
docker run -d -p 8000:8000 yourusername/fastapi-backend:latest
`,containerStarts:`docker stop CONTAINER_ID
docker start CONTAINER_ID
docker restart CONTAINER_ID
`},Rt=()=>{const e=ie.c(79),s=Pt;let o,n,r;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("h2",{className:"text-3xl font-bold mb-4 text-text-main",children:"Get started with docker"}),n=t.jsx("p",{children:"This blog explains how to setup docker."}),r=s(1),e[0]=o,e[1]=n,e[2]=r):(o=e[0],n=e[1],r=e[2]);let l,i,a;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsxs("p",{children:["Install the docker from ",t.jsx("a",{href:"https://docs.docker.com/desktop",className:"text-brand-primary hover:text-brand-secondary",target:"_blank",children:"https://docs.docker.com/desktop"})," for your desired platform."]}),i=s(2),a=t.jsx("p",{children:"Now check if docker is installed successfully."}),e[3]=l,e[4]=i,e[5]=a):(l=e[3],i=e[4],a=e[5]);let d,c,u;e[6]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx(p,{parts:[{type:"text",text:"docker -v"}]}),c=s(3),u=t.jsx("h3",{className:"text-2xl font-semibold text-text-main",children:" Create a docker image of the project"}),e[6]=d,e[7]=c,e[8]=u):(d=e[6],c=e[7],u=e[8]);let m;e[9]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsxs("p",{children:["Create Docker image, first of all create a ",t.jsx("b",{children:"Dockerfile"})," in the root of the project"]}),e[9]=m):m=e[9];let h,x;e[10]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsxs("li",{children:[m,t.jsx(p,{parts:[{type:"text",text:Be?.dockerFile}]})]}),x=t.jsx("p",{children:"Now run the below command to make a docker Image file in which we have to pass our desired tag name"}),e[10]=h,e[11]=x):(h=e[10],x=e[11]);let g,S;e[12]===Symbol.for("react.memo_cache_sentinel")?(g=t.jsxs("li",{children:[x,t.jsx(p,{parts:[{type:"text",text:"docker build -t "},{type:"placeholder",text:"tag-name"},{type:"text",text:" ."}]})]}),S=t.jsx("p",{children:"After successful execution of the command it will create a docker image to view the image you can run the below command"}),e[12]=g,e[13]=S):(g=e[12],S=e[13]);let k;e[14]===Symbol.for("react.memo_cache_sentinel")?(k=t.jsx(p,{parts:[{type:"text",text:"docker images"}]}),e[14]=k):k=e[14];let y,b;e[15]===Symbol.for("react.memo_cache_sentinel")?(y=t.jsxs("li",{children:[S,k,t.jsxs("p",{children:["It will dispaly all the images in the system and i just made the image with tag ",t.jsx("b",{children:"fastapi-backend"})," as shown. "]}),t.jsx(Fe,{src:kt,alt:"docker images"})]}),b=t.jsx("p",{children:"Now run the below command to run the docker image."}),e[15]=y,e[16]=b):(y=e[15],b=e[16]);let j;e[17]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx("b",{children:"5001"}),e[17]=j):j=e[17];let _;e[18]===Symbol.for("react.memo_cache_sentinel")?(_=t.jsx("b",{children:"8000"}),e[18]=_):_=e[18];let w;e[19]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsxs("p",{children:[" ",j," is your system port and ",_," is the port which we defined in our project, and ",t.jsx("b",{children:"fastapi-backend"})," is the tag name of the image. "]}),e[19]=w):w=e[19];let N;e[20]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx(p,{parts:[{type:"text",text:"docker run -p 5001:8000 fastapi-backend"}]}),e[20]=N):N=e[20];let I;e[21]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsxs("li",{children:[b,w,N,t.jsxs("p",{children:["Now you can access the project in ",t.jsx("a",{href:"http:localhost:5001",target:"_blank",children:"http:localhost:5001"})," url"]})]}),e[21]=I):I=e[21];let v;e[22]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsxs("p",{children:["To run the docker image in the background mode run the below command, we just have to add the  ",t.jsx("b",{children:"-d"})," flag which means detach mode"]}),e[22]=v):v=e[22];let f,C;e[23]===Symbol.for("react.memo_cache_sentinel")?(f=t.jsxs("ul",{className:"list-decimal ml-5",children:[h,g,y,I,t.jsxs("li",{children:[v,t.jsx(p,{parts:[{type:"text",text:"docker run -d -p 5001:8000 fastapi-backend"}]})]})]}),C=t.jsx("h3",{className:"mt-8 text-2xl font-semibold scroll-mt-24",id:"step-4",children:"Push the image to the docker hub."}),e[23]=f,e[24]=C):(f=e[23],C=e[24]);let R,P,T,D,O,U,q;e[25]===Symbol.for("react.memo_cache_sentinel")?(R=t.jsxs("li",{children:["Go to ",t.jsx("a",{href:"https://hub.docker.com",target:"_blank",className:"text-brand-primary hover:text-brand-secondary",children:"https://hub.docker.com"})," ."]}),P=t.jsx("li",{children:"Log in."}),T=t.jsx("li",{children:"Click “Create Repository”."}),D=t.jsx("li",{children:"Give it a name (e.g., fastapi-backend)."}),O=t.jsx("li",{children:"Choose Public or Private."}),U=t.jsx("li",{children:"Click Create."}),q=t.jsx(Fe,{src:Nt,alt:"create repo in docker hub"}),e[25]=R,e[26]=P,e[27]=T,e[28]=D,e[29]=O,e[30]=U,e[31]=q):(R=e[25],P=e[26],T=e[27],D=e[28],O=e[29],U=e[30],q=e[31]);let E;e[32]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsxs("li",{className:"mt-5",children:["Now login to the Docker using the below command.",t.jsx(p,{parts:[{type:"text",text:"docker login"}]})]}),e[32]=E):E=e[32];let F;e[33]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsxs("li",{children:["Suppose your Docker Hub username is yourusername and your repo is fastapi-backend.",t.jsx(p,{parts:[{type:"text",text:"docker tag "},{type:"placeholder",text:"local-image-name"},{type:"text",text:" "},{type:"placeholder",text:"yourusername"},{type:"text",text:"/"},{type:"placeholder",text:"repo-name"},{type:"text",text:":"},{type:"placeholder",text:"tag"}]})]}),e[33]=F):F=e[33];let B;e[34]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsxs("li",{children:["Push the image using below command.",t.jsx(p,{parts:[{type:"text",text:"docker push yourusername/fastapi-backend:latest"}]})]}),e[34]=B):B=e[34];let M;e[35]===Symbol.for("react.memo_cache_sentinel")?(M=t.jsx("a",{href:"https://hub.docker.com/repositories",target:"_blank",className:"text-brand-primary hover:text-brand-secondary",children:"https://hub.docker.com/repositories"}),e[35]=M):M=e[35];let G,z;e[36]===Symbol.for("react.memo_cache_sentinel")?(G=t.jsxs("li",{children:["Go to ",M," → you should see your fastapi-backend repo with the latest tag.",t.jsx(Fe,{src:vt,alt:"docker repository"})]}),z=t.jsx("h2",{children:"Run from anywhere"}),e[36]=G,e[37]=z):(G=e[36],z=e[37]);let H,A,L;e[38]===Symbol.for("react.memo_cache_sentinel")?(H=t.jsx("p",{children:t.jsxs("ul",{className:"list-decimal ml-5",children:[R,P,T,D,O,U,q,E,F,B,G,t.jsxs("li",{children:[z,"On any system with Docker installed, you (or anyone) can now do:",t.jsx(p,{parts:[{type:"text",text:Be?.dockerCmd}]})]})]})}),A=t.jsx("h3",{className:"mt-8 text-2xl font-semibold scroll-mt-24 text-text-main",id:"step-5",children:"Container commands"}),L=t.jsx("p",{children:"To view all the running containers."}),e[38]=H,e[39]=A,e[40]=L):(H=e[38],A=e[39],L=e[40]);let W,V;e[41]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsx(p,{parts:[{type:"text",text:"docker ps"}]}),V=t.jsx("p",{children:"To view all the containers including stopped ones."}),e[41]=W,e[42]=V):(W=e[41],V=e[42]);let J,X;e[43]===Symbol.for("react.memo_cache_sentinel")?(J=t.jsx(p,{parts:[{type:"text",text:"docker ps -a"}]}),X=t.jsx("p",{children:"Stop a specific container."}),e[43]=J,e[44]=X):(J=e[43],X=e[44]);let Y,K;e[45]===Symbol.for("react.memo_cache_sentinel")?(Y=t.jsx(p,{parts:[{type:"text",text:"docker stop <container_id>"}]}),K=t.jsx("p",{children:"Remove a specific container."}),e[45]=Y,e[46]=K):(Y=e[45],K=e[46]);let Q,Z;e[47]===Symbol.for("react.memo_cache_sentinel")?(Q=t.jsx(p,{parts:[{type:"text",text:"docker rm <container_id>"}]}),Z=t.jsx("p",{children:"View logs of a running container."}),e[47]=Q,e[48]=Z):(Q=e[47],Z=e[48]);let ee,te;e[49]===Symbol.for("react.memo_cache_sentinel")?(ee=t.jsx(p,{parts:[{type:"text",text:"docker logs -f <container_id>"}]}),te=t.jsx("p",{children:"Remove all stopped containers."}),e[49]=ee,e[50]=te):(ee=e[49],te=e[50]);let se,oe;e[51]===Symbol.for("react.memo_cache_sentinel")?(se=t.jsx(p,{parts:[{type:"text",text:"docker container prune"}]}),oe=t.jsx("p",{children:"Stop / Start / Restart containers"}),e[51]=se,e[52]=oe):(se=e[51],oe=e[52]);let le,me,de;e[53]===Symbol.for("react.memo_cache_sentinel")?(le=t.jsx(p,{parts:[{type:"text",text:Be?.containerStarts}]}),me=t.jsx("h3",{className:"mt-8 text-2xl font-semibold scroll-mt-24 text-text-main",id:"step-6",children:"Images commands"}),de=t.jsx("p",{children:"To view all the running images."}),e[53]=le,e[54]=me,e[55]=de):(le=e[53],me=e[54],de=e[55]);let pe;e[56]===Symbol.for("react.memo_cache_sentinel")?(pe=t.jsx(p,{parts:[{type:"text",text:"docker images"}]}),e[56]=pe):pe=e[56];let xe,he;e[57]===Symbol.for("react.memo_cache_sentinel")?(xe=t.jsx(p,{parts:[{type:"text",text:"docker image ls"}]}),he=t.jsx("p",{children:"Build an image."}),e[57]=xe,e[58]=he):(xe=e[57],he=e[58]);let ue,fe;e[59]===Symbol.for("react.memo_cache_sentinel")?(ue=t.jsx(p,{parts:[{type:"text",text:"docker build -t myimage:tag ."}]}),fe=t.jsx("p",{children:"Tag an image."}),e[59]=ue,e[60]=fe):(ue=e[59],fe=e[60]);let ge,ye;e[61]===Symbol.for("react.memo_cache_sentinel")?(ge=t.jsx(p,{parts:[{type:"text",text:"docker tag source-image:tag target-image:tag"}]}),ye=t.jsx("p",{children:"Remove an image."}),e[61]=ge,e[62]=ye):(ge=e[61],ye=e[62]);let be;e[63]===Symbol.for("react.memo_cache_sentinel")?(be=t.jsx(p,{parts:[{type:"text",text:"docker rmi image_id"}]}),e[63]=be):be=e[63];let je,_e;e[64]===Symbol.for("react.memo_cache_sentinel")?(je=t.jsx(p,{parts:[{type:"text",text:"docker image rm image_id"}]}),_e=t.jsx("p",{children:"Force remove (if container is using it):"}),e[64]=je,e[65]=_e):(je=e[64],_e=e[65]);let we,Se;e[66]===Symbol.for("react.memo_cache_sentinel")?(we=t.jsx(p,{parts:[{type:"text",text:"docker rmi -f image_id"}]}),Se=t.jsx("p",{children:"Inspect an image"}),e[66]=we,e[67]=Se):(we=e[66],Se=e[67]);let ke,Ne;e[68]===Symbol.for("react.memo_cache_sentinel")?(ke=t.jsx(p,{parts:[{type:"text",text:"docker inspect image_id"}]}),Ne=t.jsx("p",{children:"Push an image to Docker Hub"}),e[68]=ke,e[69]=Ne):(ke=e[68],Ne=e[69]);let ve,Ce;e[70]===Symbol.for("react.memo_cache_sentinel")?(ve=t.jsx(p,{parts:[{type:"text",text:"docker push username/repo:tag"}]}),Ce=t.jsx("p",{children:"Pull an image from Docker Hub"}),e[70]=ve,e[71]=Ce):(ve=e[70],Ce=e[71]);let $e;e[72]===Symbol.for("react.memo_cache_sentinel")?($e=t.jsx(p,{parts:[{type:"text",text:"docker pull username/repo:tag"}]}),e[72]=$e):$e=e[72];let Ie;e[73]===Symbol.for("react.memo_cache_sentinel")?(Ie=t.jsx("span",{className:"block",children:"Remove all dangling images (not tagged, not used):"}),e[73]=Ie):Ie=e[73];let Re,Pe;e[74]===Symbol.for("react.memo_cache_sentinel")?(Re=t.jsx(p,{parts:[{type:"text",text:"docker image prune"}]}),Pe=t.jsx("span",{children:"Remove all unused images:"}),e[74]=Re,e[75]=Pe):(Re=e[74],Pe=e[75]);let Te,De;e[76]===Symbol.for("react.memo_cache_sentinel")?(Te=t.jsxs("p",{children:["Prune unused images",Ie,Re,Pe,t.jsx(p,{parts:[{type:"text",text:"docker image prune -a"}]})]}),De=t.jsx("p",{children:"🔹 Remove everything unused."}),e[76]=Te,e[77]=De):(Te=e[76],De=e[77]);let Oe;return e[78]===Symbol.for("react.memo_cache_sentinel")?(Oe=t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8",children:[t.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[o,n,r,l,i,a,d,c,u,f,C,H,A,L,W,V,J,X,Y,K,Q,Z,ee,te,se,oe,le,me,de,pe,"OR",xe,he,ue,fe,ge,ye,be,"OR",je,_e,we,Se,ke,Ne,ve,Ce,$e,Te,De,t.jsx(p,{parts:[{type:"text",text:"docker system prune -a"}]})]}),t.jsx(Ct,{steps:It})]}),e[78]=Oe):Oe=e[78],Oe};function Pt(e){return t.jsx($t,{stepNum:e})}const Tt="/blogs/assets/thumbnail-CT0Rhm6n.png",{Code:$,Sidebar:Dt,Step:Ot}=qe,Ut=[{name:"Install Node.js"},{name:"Install Nginx"},{name:"Environment & PM2"},{name:"Nginx Backend Proxy"},{name:"Nginx Frontend Static"},{name:"SSL (HTTPS)"}],ce={installNode:`# Using NodeSource (example for Node 20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs`,installNginx:"sudo apt update",installNginx2:"sudo apt install nginx",installNginx3:"sudo systemctl status nginx",installNginx4:"sudo ufw allow 'Nginx Full",sslSetup1:"sudo apt install certbot python3-certbot-nginx -y"},qt=()=>{const e=ie.c(52),s=Et;let o,n,r,l,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("h2",{className:"text-3xl font-bold mb-4 text-text-main",children:"Project Deployment Guide"}),n=t.jsx("p",{className:"text-gray-400",children:"This guide covers manual VPS deployment with Nginx, PM2, and SSL, as well as an alternative deployment using Docker."}),r=s(1),l=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Install Node.js"}),i=t.jsx("p",{children:"Ensure you have Node.js installed on your server."}),e[0]=o,e[1]=n,e[2]=r,e[3]=l,e[4]=i):(o=e[0],n=e[1],r=e[2],l=e[3],i=e[4]);let a,d,c,u;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx($,{parts:[{type:"text",text:ce?.installNode}]}),d=s(2),c=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Install Nginx"}),u=t.jsx("p",{children:"Update packages and install Nginx, then allow it through the firewall."}),e[5]=a,e[6]=d,e[7]=c,e[8]=u):(a=e[5],d=e[6],c=e[7],u=e[8]);let m;e[9]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx($,{parts:[{type:"text",text:ce?.installNginx}]}),e[9]=m):m=e[9];let h;e[10]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsx($,{parts:[{type:"text",text:ce?.installNginx2}]}),e[10]=h):h=e[10];let x;e[11]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx($,{parts:[{type:"text",text:ce?.installNginx3}]}),e[11]=x):x=e[11];let g,S,k,y,b;e[12]===Symbol.for("react.memo_cache_sentinel")?(g=t.jsx($,{parts:[{type:"text",text:ce?.installNginx4}]}),S=s(3),k=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Environment & PM2"}),y=t.jsx("p",{children:"Set up your environment variables and use PM2 to keep your application running in the background."}),b=t.jsx("p",{children:"Install pm2 globally"}),e[12]=g,e[13]=S,e[14]=k,e[15]=y,e[16]=b):(g=e[12],S=e[13],k=e[14],y=e[15],b=e[16]);let j,_;e[17]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx($,{parts:[{type:"text",text:"npm install pm2 -g"}]}),_=t.jsx("p",{className:"mt-4",children:"Create or update your .env file"}),e[17]=j,e[18]=_):(j=e[17],_=e[18]);let w,N;e[19]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx($,{parts:[{type:"text",text:"nano .env"}]}),N=t.jsx("p",{className:"mt-4",children:"Start your project and configure PM2 to restart on reboot"}),e[19]=w,e[20]=N):(w=e[19],N=e[20]);let I,v,f,C;e[21]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsx($,{parts:[{type:"text",text:"pm2 start "},{type:"placeholder",text:"index.js"},{type:"text",text:" --name "},{type:"placeholder",text:"project-name"},{type:"text",text:`
pm2 save
pm2 startup`}]}),v=s(4),f=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Nginx Configuration (Backend Proxy)"}),C=t.jsx("p",{children:"First, check if your domain is pointing to the server IP."}),e[21]=I,e[22]=v,e[23]=f,e[24]=C):(I=e[21],v=e[22],f=e[23],C=e[24]);let R,P;e[25]===Symbol.for("react.memo_cache_sentinel")?(R=t.jsx($,{parts:[{type:"text",text:"ping "},{type:"placeholder",text:"example.com"}]}),P=t.jsx("p",{className:"mt-4",children:"Create a new site configuration:"}),e[25]=R,e[26]=P):(R=e[25],P=e[26]);let T,D;e[27]===Symbol.for("react.memo_cache_sentinel")?(T=t.jsx($,{parts:[{type:"text",text:"sudo nano /etc/nginx/sites-available/"},{type:"placeholder",text:"example.com"}]}),D=t.jsx("p",{className:"mt-4",children:"Paste the following configuration (adjust the port):"}),e[27]=T,e[28]=D):(T=e[27],D=e[28]);let O,U,q;e[29]===Symbol.for("react.memo_cache_sentinel")?(O=t.jsx($,{parts:[{type:"text",text:`server {
    listen 80;
    server_name `},{type:"placeholder",text:"example.com"},{type:"text",text:`;

    location / {
        proxy_pass http://127.0.0.1:`},{type:"placeholder",text:"8000"},{type:"text",text:`;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Optional: allow larger uploads
    client_max_body_size 50M;
}`}]}),U=t.jsx("p",{className:"mt-4",children:"Save (Ctrl + O, Enter) and Exit (Ctrl + X)."}),q=t.jsx("p",{className:"mt-4",children:"Enable the site by creating a symbolic link:"}),e[29]=O,e[30]=U,e[31]=q):(O=e[29],U=e[30],q=e[31]);let E,F;e[32]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsx($,{parts:[{type:"text",text:"sudo ln -s /etc/nginx/sites-available/"},{type:"placeholder",text:"example.com"},{type:"text",text:" /etc/nginx/sites-enabled/"}]}),F=t.jsx("p",{className:"mt-4",children:"Test the configuration and reload Nginx:"}),e[32]=E,e[33]=F):(E=e[32],F=e[33]);let B;e[34]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx($,{parts:[{type:"text",text:"sudo nginx -t"}]}),e[34]=B):B=e[34];let M,G,z,H;e[35]===Symbol.for("react.memo_cache_sentinel")?(M=t.jsx($,{parts:[{type:"text",text:"sudo systemctl reload nginx"}]}),G=s(5),z=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Nginx Configuration (Frontend Static)"}),H=t.jsx("p",{children:"For frontend applications, use this configuration:"}),e[35]=M,e[36]=G,e[37]=z,e[38]=H):(M=e[35],G=e[36],z=e[37],H=e[38]);let A,L;e[39]===Symbol.for("react.memo_cache_sentinel")?(A=t.jsx($,{parts:[{type:"text",text:"sudo nano /etc/nginx/sites-available/"},{type:"placeholder",text:"example.com"}]}),L=t.jsx("p",{className:"mt-4",children:"Paste the static site configuration:"}),e[39]=A,e[40]=L):(A=e[39],L=e[40]);let W,V;e[41]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsx($,{parts:[{type:"text",text:`server {
    listen 80;
    server_name `},{type:"placeholder",text:"example.com"},{type:"text",text:`;

    root /var/www/`},{type:"placeholder",text:"project-path"},{type:"text",text:"/"},{type:"placeholder",text:"buildFolder"},{type:"text",text:`;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # Optional: increase upload size limit if needed
    client_max_body_size 50M;
}`}]}),V=t.jsx("p",{className:"mt-4",children:"Enable the site, test, and reload Nginx:"}),e[41]=W,e[42]=V):(W=e[41],V=e[42]);let J,X;e[43]===Symbol.for("react.memo_cache_sentinel")?(J=t.jsx($,{parts:[{type:"text",text:"sudo ln -s /etc/nginx/sites-available/"},{type:"placeholder",text:"example.com"},{type:"text",text:" /etc/nginx/sites-enabled/"}]}),X=t.jsx("p",{children:"Test the configuration and reload Nginx:"}),e[43]=J,e[44]=X):(J=e[43],X=e[44]);let Y;e[45]===Symbol.for("react.memo_cache_sentinel")?(Y=t.jsx($,{parts:[{type:"text",text:"sudo nginx -t"}]}),e[45]=Y):Y=e[45];let K,Q,Z,ee;e[46]===Symbol.for("react.memo_cache_sentinel")?(K=t.jsx($,{parts:[{type:"text",text:"sudo systemctl reload nginx"}]}),Q=s(6),Z=t.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Setup SSL (HTTPS)"}),ee=t.jsx("p",{children:"Use Certbot to automatically configure SSL for your domain."}),e[46]=K,e[47]=Q,e[48]=Z,e[49]=ee):(K=e[46],Q=e[47],Z=e[48],ee=e[49]);let te;e[50]===Symbol.for("react.memo_cache_sentinel")?(te=t.jsx($,{parts:[{type:"text",text:ce?.sslSetup1}]}),e[50]=te):te=e[50];let se;return e[51]===Symbol.for("react.memo_cache_sentinel")?(se=t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8",children:[t.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[o,n,r,l,i,a,d,c,u,m,h,x,g,S,k,y,b,j,_,w,N,I,v,f,C,R,P,T,D,O,U,q,E,F,B,M,G,z,H,A,L,W,V,J,X,Y,K,Q,Z,ee,te,t.jsx($,{parts:[{type:"text",text:"sudo certbot --nginx -d "},{type:"placeholder",text:"example.com"}]})]}),t.jsx(Dt,{steps:Ut})]}),e[51]=se):se=e[51],se};function Et(e){return t.jsx(Ot,{stepNum:e})}const Ft="/blogs/assets/thumbnail-FRAXpH_o.png",At=[{id:"deployment",title:"Project deployment",date:"2026-02-15",image:Ft,component:qt},{id:"docker-basics",title:"Basics of docker",date:"2025-09-29",image:Tt,component:Rt},{id:"node-js-project-structure",title:"Node.js project structure",date:"2025-09-22",image:St,component:bt},{id:"host-react-app-with-github",title:"Host react web app with github",date:"2025-09-03",image:nt,component:ot}];export{At as p};
