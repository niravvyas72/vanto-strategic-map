// CONFIG
var CLIENT_ID    = '569636278695-rf4palrjq7mtbkdn3socphh5h1dftrd5.apps.googleusercontent.com';
var FOLDER_ID    = '1WKkJpprL2GENFHOux7Whut7LuRy_im8V';
var REDIRECT     = location.origin + location.pathname;
var TOKEN_PROXY  = 'https://vanto-auth-proxy.vercel.app/api/token';
var SCOPES       = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
var INDEX_FILE   = 'vanto_sm_index.json';
var INDIA_ADMINS = ["nirav.hiral@gmail.com"];

// LOOKUP TABLES
var ATT=[{v:-4,s:'O/C Opp',l:'Overtly/Covertly Opposed'},{v:-3,s:'H.Res',l:'Highly Resistant'},{v:-2,s:'Subm',l:'Submissive'},{v:-1,s:'Unint',l:'Uninterested'},{v:1,s:'Accpt',l:'Accepting'},{v:2,s:'Agree',l:'In Agreement'},{v:3,s:'Supp',l:'Supportive'},{v:4,s:'Def',l:'Enthusiastic Defender'}];

var PART=[{c:'G',l:'Growth',d:'Developing positively — active investment in relationship',col:'#2a7d4f'},{c:'S',l:'Stable',d:'Neutral — no particular issues or growth',col:'#1a6b7a'},{c:'P',l:'Problematic',d:'Active issues or barriers undermining the relationship',col:'#c8382b'},{c:'EC',l:'Excess Confidence',d:'Overconfidence — risk of complacency on either side',col:'#e67e22'}];

var ITYPES=[{c:'E',l:'Economic / Financial',d:'Controls budget & final sign-off'},{c:'T',l:'Technical',d:'Evaluates fit, specs, compliance'},{c:'P',l:'Pragmatic',d:'Day-to-day user of the solution'},{c:'G',l:'Guardian Angel',d:'Internal champion on your side'}];

var GAUGE=['Euphoria','Enthusiasm','Security','Comfort','OK','Concern','Discomfort','Worry','Fear','Panic'];
var ALERTS=['Lacking Basic Information','Uncertainty about Info','Unidentified Influence','Market Situation / Changes','New People','Reorganisation or Other Circumstances','Excess Confidence (EC)'];

console.log("Loaded: config_settings.js");
