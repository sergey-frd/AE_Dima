// //===================================================
// function handleXML() 
// {
// 
//     // //readFile();
//     // //fileData =readTxt();
//     // //fileData = readJson();
// 
//     // fileData =readXml();
//     // lg.writeln(fileData);
//     // handleData(fileData);
// 
// 
//     fileData =readXmlPr();
//     lg.writeln(fileData);
//     var lenFileList = showFileList(fileData);
//     filecomp = createFileComp(fileData.pathurl[0]);
// 
//      compbe_220209_1 = findItem("be_220209_1.jpg","FtgItm")
//      if(compbe_220209_1 !=null )  { compbe_220209_1.parentFolder = compF_FTG_GRP_1; }
// 
//      compFileComp_1  = findItem("FileComp_1","CmpItm");
//      if(compFileComp_1 !=null )  { compFileComp_1.parentFolder  = compPRECOMP_GRP_1; }
// 
//      return filecomp
// }
// 
// //===================================================
// function createFileComp(fileCurrent)
// {
// 
// 
// 
//     var compName = "FileComp_1";
//     var filecomp = app.project.items.addComp(compName, 3840, 2160, 1.0, 25, 25);
// 
//     //var newpath = fileCurrent.replace("file://localhost/","").replace('/','\\');
// 
//     //file://localhost/E%3a/SF/Nave/img/spr/220209_1_1-spr.jpeg
//     //var newpath = "E:\\SF\\Nave\\img\\spr\\220209_1_1-spr.jpeg"
//     var newpath = fileCurrent
// 
//     lg.writeln(newpath);
// 
//     var videoFile = File(newpath);
//     var videoItem = app.project.importFile(new ImportOptions(videoFile));
// 
// 
//     var videoLayer = filecomp.layers.add(videoItem);
// 
//     return filecomp
// 
// }
// 



// //===================================================
// function fixScale(comp) {
//             // fixes incorrectly scaled imgs properly to comp
// 			var myRect = comp.layer(1).sourceRectAtTime(0, false);
// 			var myScale = comp.layer(1).property("Scale").value;
// 			var myNewScale = myScale * Math.min (comp.width / myRect.width, comp.height / myRect.height);
// 			comp.layer(1).property("Scale").setValue(myNewScale);
// }
// 
//===================================================
function createNewCompHvrAll()
{
    var prefixList = [
    'H_Be22',
    'H_Fe22',
    'H_Sr22',
    'H_Wi22',
    'H_Yh22',
    'H_Yr22'
    ];
    prefixListLength = prefixList.length;
    var folderList = [
    'F_Be',
    'F_Fe',
    'F_Sr',
    'F_Wi',
    'F_Yh',
    'F_Yr'
    ];
    createNewComp_and_Add(prefixList,folderList);
}

//===================================================
function createNewCompSlava()
{
    var prefixList = [
        'aeSlava4'
    ];
    var folderList = [
        '02_FOOTAGES3'
    ];
    createNewComp_and_Add(prefixList,folderList);
}

//===================================================
function createNewCompHvWi_2()
{
    var prefixList = [
        'HvrWilli_2'
    ];
    var folderList = [
        'F_Willi_2'
    ];
    createNewComp_and_Add(prefixList,folderList);
}

//===================================================
function show_all() 
{


    var project = app.project;
    var items   = project.items;
    var length =  items.length;


    lg.writeln('project= ' +  String(project)  );
    lg.writeln('items= ' +  String(items)  );
    lg.writeln('length= ' +  String(length)  );
    lg.writeln('-------------');

    var activeItem = app.project.activeItem;
    lg.writeln('activeItem= ' +  String(activeItem)  );
    var activeItem_length =  activeItem.length;
    lg.writeln('activeItem_length= ' +  String(activeItem_length)  );
    lg.writeln('-------------');


    lg.writeln('rootFolder= ' +  String(app.project.rootFolder)  );
    lg.writeln('-------------');

    lg.writeln('rootFolder.name= ' +  String(app.project.rootFolder.name)  );
    lg.writeln('-------------');



    var activeItem = app.project.activeItem;

    var itemCollection = app.project.items;
    lg.writeln('itemCollection= ' +  String(itemCollection)  );

    var itemCollection_length = itemCollection.length;
    lg.writeln('itemCollection_length= ' +  String(itemCollection_length)  );

    for (var i = 1; i <= itemCollection.length; i++) {
            lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );

            var comp = itemCollection[i]; 

            if( itemCollection[i] instanceof CompItem) {
                lg.writeln('comp= ' +  String(comp)  );
                lg.writeln('    width: ' +   String(comp.width) + '  height: ' + String(comp.height) + '  duration: ' + String(comp.duration) );
            }
             if (itemCollection[i] instanceof FolderItem) {
                lg.writeln('FolderItem typeName= ' +  String(itemCollection[i].typeName)  );
             }


             if (itemCollection[i] instanceof FootageItem) {
                lg.writeln('FootageItem typeName= ' +  String(itemCollection[i].typeName)  );
             }


            for (var j = 1; j <= itemCollection[i].numLayers; j++) {
                    lg.writeln('    numLayer: ' +   String(j) + ' layer: ' +   itemCollection[i].layer[j]);
             }
    }

}



//===================================================
function readFile() 
{

    var inputFile = File("e:\\Setup\\!AE\\ae_scripts\\!NTProductions\\reading-files-script-master\\tutorial.json");
    var inputData;
    inputFile.open("r");
    inputData = inputFile.read();
    inputFile.close();

    lg.writeln(inputData);

}


//===================================================
function readJson() {

    var currentLine;
    var jsonStuff = [];
    var file = File("e:\\Setup\\!AE\\ae_scripts\\!NTProductions\\reading-files-script-master\\tutorial.json");
    file.open("r");

    parsedJson = JSON.parse(file.read());


    //while(!file.eof) {
    //        currentLine = file.readln();
    //        jsonStuff.push(currentLine);
    //}

    file.close();

    //jsonStuff = jsonStuff.join("");
    //var parsedJson = JSON.parse(jsonStuff);

    //lg.writeln(parsedJson);
    return parsedJson;
}

//===================================================
function readFile() 
{

    var inputFile = File("e:\\Setup\\!AE\\ae_scripts\\!NTProductions\\reading-files-script-master\\tutorial.json");
    var inputData;
    inputFile.open("r");
    inputData = inputFile.read();
    inputFile.close();

    return inputData;

}

//===================================================
function handleData(data) {


    lg.writeln('data.compName= ' +  data.compName  );
    lg.writeln('data.bgColour= ' +   data.bgColour.toString()  );
    lg.writeln('data.lensFlare= ' +  data.lensFlare  );

}



//===================================================
function readXml() {
    var file = File("e:\\Setup\\!AE\\ae_scripts\\!NTProductions\\reading-files-script-master\\tutorial.xml");

    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}

//===================================================
function readTxt() {
    var txtArray = [];
    var currentLine;
    var file = File("e:\\Setup\\!AE\\ae_scripts\\!NTProductions\\reading-files-script-master\\tutorial.txt");
    file.open("r");
                while(!file.eof){
                        currentLine = file.readln();
                        txtArray.push(currentLine);
                    }
                file.close();
    
    var txtObj = {
            compName: txtArray[0],
            bgColour: txtArray[1],
            lensFlare: txtArray[2]
        };

    return txtObj;
    }



//===================================================
function showFileList(fileData) {

    //lg.writeln(fileData);
    // var buf_len = fileData.pathurl.length
    // lg.writeln("====================");
    // //lg.writeln("length: " +String(pathurl.length));
    // lg.writeln("length: " +String(buf_len));
    // lg.writeln(fileData.pathurl);
    lg.writeln("====================");

    var i = 0; 
    while(fileData.pathurl[i] != undefined) {

        lg.writeln(' i= '+ String(i+1) +' => '+ fileData.pathurl[i]);
        i++;
    }
    lg.writeln("====================");
    lg.writeln("i length: " +String(i-1));
    lg.writeln("====================");

    return i-1;
}



//===================================================
function showFileList2(fileData) {

    //lg.writeln(fileData);
    // var buf_len = fileData.pathurl.length
    // lg.writeln("====================");
    // //lg.writeln("length: " +String(pathurl.length));
    // lg.writeln("length: " +String(buf_len));
    // lg.writeln(fileData.pathurl);
    lg.writeln("====================");

    var i = 0; 
    while(fileData.pathurl[i] != undefined) {

        lg.writeln(' i= '+ String(i+1) +' => '+ fileData.pathurl[i]);
        i++;
    }
    lg.writeln("====================");
    lg.writeln("i length2: " +String(i-1));
    lg.writeln("====================");

    return i-1;
}



//===================================================
function showFileList3(fileData) {

    //lg.writeln(fileData);
    // var buf_len = fileData.pathurl.length
    // lg.writeln("====================");
    // //lg.writeln("length: " +String(pathurl.length));
    // lg.writeln("length: " +String(buf_len));
    // lg.writeln(fileData.pathurl);
    lg.writeln("====================");

    var i = 0; 
    while(fileData.pathurl[i] != undefined) {

        lg.writeln(' i= '+ String(i+1) +' => '+ fileData.pathurl[i]);
        i++;
    }
    lg.writeln("====================");
    lg.writeln("i length2: " +String(i-1));
    lg.writeln("====================");

    return i-1;
}


//===================================================

//console.log(extractInteger(str))
function extractInteger(str) {
  var result = 0;
  var factor = 1

  for (var i = str.length; i > 0; i--) {
    if (isNaN(str[i - 1])) return NaN ;
    result += parseInt(str[i - 1]) * factor
    factor *= 10
  }

  return result
}

//===================================================



//===================================================



//===================================================



//===================================================



//===================================================



//===================================================



//===================================================



