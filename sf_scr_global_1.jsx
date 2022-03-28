
var lg = new File(location + "log_" + scr_name + ".txt");
var user_log_file = lg;

var ftgSystem_1_1     // "ftgSystem_1_1.mp4"
var ftgSystem_tr_1_1  // "ftgSystem_tr_1_1.mp4"
var ftgMP_LL_01       // "ftgMP_LL_01.mov"
var ftgMP_LL_08       // "ftgMP_LL_08.mov"

var filePathUrl = [];
var fileName    = [];

var fileWidth   = [];
var fileHeight  = [];

var scaleMin  = [];
var scaleMax  = [];

var compWidth   = 3840;
var compHeight  = 2160;

var bgGaussianBlur  = 200;
var bgOpacity       = 25; // 50;

var addOpacityKeys = [
    0,
    0.9,
    4,
    4.1];

var addOpacityVal = [
    25,
    100,
    100,
    25];


var addOpacityBi1Keys = [
    0,
    0.9,
    1,
    4,
    4.1,
    4.24];

var addOpacityBi1Val = [
    100,
    100,
    0,
    0,
    100,
    100];



var propRotExp = "Math.sin(time%900*2)*-0.31"


var addropertyKeys=[
0,
0.5,
1,
1.5,
2,
2.5,
3,
3.5,
4,
4.5,
5];




//===============================================
var addropertyKeysLb=[
0,     
2.5,   
5];    

var addropertyValLb=[
1   ,
1.4 ,
1.62];


var addropertyKeysBl=[ 
0,    
3.5,  
5];   


var addropertyValBl=[
1.62,
1.4,
1.0];
//===============================================

// //===============================================
// var addropertyKeysLb=[
// 0,     
// 2,   
// 2.5,   
// 3,   
// 5];    
// 
// var addropertyValLb=[
// 1   ,
// 1.37,
// 1.4 ,
// 1.43,
// 1.62];
// 
// 
// var addropertyKeysBl=[ 
// 0,    
// 3,  
// 3.5,  
// 4,  
// 5];   
// 
// 
// var addropertyValBl=[
// 1.62,
// 1.43,
// 1.4,
// 1.37,
// 1.0];
//===============================================
//===============================================
var addropertyKeysLb2=[
0,     
2.5,   
5];    

var addropertyValLb2=[
1   ,
1.4 ,
1.62];


var addropertyKeysBl2=[ 
0,    
3.5,  
5];   


var addropertyValBl2=[
1.62,
1.4,
1.0];
//===============================================


//===============================================
var addropertyKeysLb1=[
0,     
1,     
2,     
2.5,   
3,     
3.5,   
4,     
4.5,   
5];    

var addropertyValLb1=[
1   ,
1.04,
1.37,
1.4 ,
1.43,
1.48,
1.51,
1.59,
1.62];


var addropertyKeysBl1=[ 
0,    
0.5,  
1,    
1.5,  
2,    
2.5,  
3.5,  
4,    
5];   


var addropertyValBl1=[
1.62,
1.59,
1.58,
1.48,
1.43,
1.37,
1.14,
1.04,
1.000];
//===============================================

// var addropertyValLb_0=[
// 1,
// 1.9,
// 2.4,
// 2.6,
// 2.73,
// 2.76,
// 2.79,
// 2.84,
// 2.87,
// 2.95,
// 2.98];
// 
// 
// var addropertyValLb=[
// 1   ,
// 1.1 ,
// 1.04,
// 1.24,
// 1.37,
// 1.4 ,
// 1.43,
// 1.48,
// 1.51,
// 1.59,
// 1.62];

// var addropertyValLb=[
// 1.000,
// 1.011,
// 1.104,
// 1.124,
// 1.137,
// 1.114,
// 1.143,
// 1.148,
// 1.158,
// 1.159,
// 1.162];
// 
// var addropertyValLb=[
// 1.0000,
// 1.0001,
// 1.0004,
// 1.0024,
// 1.0037,
// 1.0014,
// 1.0043,
// 1.0048,
// 1.0058,
// 1.0059,
// 1.0068];


// var addropertyValBl=[
// 1.0062,
// 1.0059,
// 1.0058,
// 1.0048,
// 1.0043,
// 1.0037,
// 1.0024,
// 1.0014,
// 1.0004,
// 1.0001,
// 1.0000];

// var addropertyValBl=[
// 1.162,
// 1.159,
// 1.158,
// 1.148,
// 1.143,
// 1.137,
// 1.124,
// 1.114,
// 1.104,
// 1.101,
// 1.000];

// var addropertyValBl=[
// 1.62,
// 1.59,
// 1.58,
// 1.48,
// 1.43,
// 1.37,
// 1.24,
// 1.14,
// 1.04,
// 1.01,
// 1.000];


//===================================================
function parseIntSmarter(str) {
    return isNaN(Number(str)) ? NaN  : parseInt(str, 10);
}


//===================================================
function getRandomInt(min, max) { 
  return Math.round(Math.random() * (max - min) + min);
}


//===================================================
function readXmlaeGenXml(pathXml) 
{
    var file = File(pathXml);
    
    file.open("r");
    var xmlString = file.read();
    var genXml = new XML(xmlString);
    file.close();
    return genXml;
}

//===================================================
function readXmlaeGenXml_1() 
{
    var file = File("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Dima\\xml\\gen_parm_1.xml");
    file.open("r");
    var xmlString = file.read();
    var genXml = new XML(xmlString);
    file.close();
    return genXml;
}


//===================================================
function readXmlae_Dima_22_7_br_1(pathRrXml) 
{
    //var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\xml\\ae_dima_kids22_10_1.xml");
    //var file = File("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Dima\\xml\\ae_dima_br_22_7_1.xml");
    var file = File(pathRrXml);
    file.open("r");
    var xmlString = file.read();
    //var myXml = new XML(xmlString);
    file.close();
    //return myXml;
    return xmlString;
}

