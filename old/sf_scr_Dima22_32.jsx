
#include "sf_scr_global_1.jsx"
#include "json2.js"
#include "sf_scr_lib_1.jsx"
#include "sf_scr_lib_4.jsx"
#include "sf_scr_lib_5.jsx"
#include "sf_scr_lib_dima_1.jsx"

//#include "sf_scr_lib_vika_1.jsx"

// global vars
var durationSec     = 5;
var rotationEnable  = 1;
var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";

// global vars
//var location = "C:\\data";
var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";
var scr_name = "sf_scr_Dima22_32";

//===================================================
function main() 
{

    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());

    handleFolders() ;
    handleXmlDima_1();

    handleNewComposit2();

    var compFinalName = "aeFinalDima_1";
    finalComp = handleFinalComp4(compFinalName);

    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

