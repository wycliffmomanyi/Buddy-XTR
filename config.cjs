// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VU2Y6jRhT9l3pta2x2sNRSWLyANzDGbjvKQxkKDDaLqwpsPPJonkbznD/IfEfyL1FL+Y8Id/dMS5NMOjwVtZx7zr3n3vcgy2OCRqgG3fegwHEFKWqWtC4Q6AKtDEOEQQsEkELQBaXV2Z1Eect0JtEqkW0hb5eSK8ABCpOFQGTLm3Eiwvs+G92DawsU5fYQ+z8AHGWmKWF2ebJ6o2iyTpjFDq4iBa/dxA7GU6VUVXXhpJBdevfg2iDCGMdZ1Ct2KEUYHkaotmGM30aftZlgNu8sRsibieekzbgiqcckiS3ouUdhJfbtOnT8/pyZvI1+MvPbepaaUmTVdik/sMUJ2Xa2XhQya8VtePYE/oyknpGQJ/okjjIUmAHKaEzrN+cdTepFERIxtQezucUOs0sbriDZzOlyr+UH6Bg4GSasoR74txHf1fONmlX5YDa043WNRYZZPAhVnkTrvD7dVZAIk3aZzZSHzmviNn7xyv7/5H1kTY+pMJe1tpE60azNndeSttuazvLO7+cXwRkaYrXe7R8Y723093lxPjxg9pQIl6kameWAWP5mrAcRZUtinPbJGdahFeun0zf6kJb4Ryx9Z+NYtrSXUZG65briHdGbnhejuTa4c+SBiTk/q6XLJt0sS0vtDPgB4u8YlVddrxjPd5zkRt6CWTt9ZdivVHdhzQ6xFt3fFO1RbQagy1xbAKMoJhRDGufZbY8TWgAGlYt8jOgtvWCxNaWKp9VmlaHeJj/PsHdZllDzS1FUChJujH5ad1DlLp170AIFzn1ECAqGMaE5rieIEBghAro/3yrViMYozSmy4qDpA4GXFJ7jeZ5VfiLvTjtICSyKdxmioAVCnKcTBLoUl6gFbg+MniEJqtxjxb7E6ZrWY1SGlzhdFg2h12f1RmL6FHQRp4hQmBagy0gCI/ESIynXX1ogQ2f65J9GNce0QBhjQr2sLA45DF7M9XIIfT8vM+rWma83C4RB99U2ojTOItIoKzOI/V1cIb3RAbohPBD0NdEIo+BFy/Pw0PPgVn+J4zbjMQMa7g3Qd7npMtL36clgcxt8+OuP3x4/f7JgHaDs8eMXCz9+/vTn778+fvwCWuBww2IYSWE6XEcSBUZQhAauObh+ldFEDRCF8YGALtDHD3PpuO71xsgryGQwUKNI1SMVfJP9YuMnm7jF9lgt46hjpMypvR1OyRD31T7te/MdP8hFe+SnPKeaZjN+vgcBXUBdylTHzcIb6sZymkuKEqJxQOSyjOnBMQeUvQRuX9mSwQkhecrPE+OIpcIN5CIRbQES6Nl2L7Plh3yJlAKeotFWc+6baAGqYh+9DuY61JlNzM3CPxfDZWRNhbHU1nuTVU8zU1te9TGeSl4SiP5dtc6MULMFUiIfc5feFhoXe1va86isrNOIBuyypl6w3RvPDXZr8MPzYI2frR/ffsMY3ebUc+H+s8BPxBsfdq6tVxjPk+9fpofmHVciZtb5VBWob7Pny1YTz462nS97a6QdZ0mdWeX0pOumBK5NQxQHSMMcp6ALSLqFoAVwXjauNrMw/0EkXfVMXX2SfYCEqt865R+ar5kuzS0b58UQkh3oAm6ubDilsX2tFoVLIX1pPKA237jogOvf/mZr+xsIAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Carl William",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254794344429",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
