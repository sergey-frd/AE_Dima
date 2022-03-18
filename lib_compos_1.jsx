

//===================================================
function createNewComp(Prefix,Prefix_NN)
{
    var compName = Prefix + "_" + String(durationSec) + "_" + String(Prefix_NN);
    //var newComp = app.project.items.addComp(compName, width, height, 1.0, durationSec, frameRate);
    var newComp = app.project.items.addComp(compName, 3840, 2160, 1.0, durationSec, 25);
    return newComp;
}

//===================================================
function createNewComp_and_Add(prefixList,folderList)
{

    // var prefixList = ["H_Wi", "H_Yr"];
    // var folderList = ["F_Wi", "F_Yr"];

    var FlagBigLitle  = 1;        
    prefixListLength = prefixList.length;


    folderListLength = folderList.length;

    lg.writeln('folderListLength= ' +  String(folderListLength)  );

    for (var ii = 0; ii <= folderListLength; ii++ ) {

        var Prefix       = prefixList[ii]; 
        var Folder       = folderList[ii]; 

        var nn           = 0;        
        var Prefix_NN    = 0;        
        //var durationSec  = 5;
        //var Prefix       = "H_Wi"; 
        // var Prefix      = "H_Yair"; 


        var itemCollection = app.project.items;
        var itemCollection_length = itemCollection.length;

        for (var i = 1; i <= itemCollection.length; i++) {
             var curItem = itemCollection[i];

             //if (String(itemCollection[i].parentFolder.name) == "F_Yr") {
             //if (String(itemCollection[i].parentFolder.name) == "F_Wi") {
             if (String(itemCollection[i].parentFolder.name) == Folder) {
                 if (curItem instanceof FootageItem) {
                    nn = nn + 1;
                    var Prefix_NN_nn    = Prefix_NN+nn;        
                    var newComp = createNewComp(Prefix,Prefix_NN_nn);
                    if(newComp!=null) 
                    {
                        var videoItem = itemCollection[i];
                        var videoLayerBg = newComp.layers.add(videoItem);
                        createPropertyBg(newComp, videoLayerBg, curItem)

                        var videoLayer = newComp.layers.add(videoItem);

                        if  (FlagBigLitle  == 0) {
                            FlagBigLitle  = 1; 
                        } else {
                            FlagBigLitle  = 0; 
                        }
                        createProperty(newComp, videoLayer, curItem, FlagBigLitle)

                     }
                 }
             }
             //break;
       }  // for (var i

    } // for (var ii


}



//===================================================
function handleCurrentCompAll(indx,Prefix,FlagBigLitle,videoFileItem)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_" + String(indx+1);
    var compName    = Prefix + "_" + String(indx+1);

    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);

    var videoLayerAll = newCompAll.layers.add(videoFileItem);
    createEffectsProperty(videoLayerAll);
    //CurvesEffect = videoLayerAll.Effects.addProperty("ADBE CurvesCustom");
    //lumetriEffect = videoLayerAll.Effects.addProperty("ADBE Lumetri");

    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))

    videoLayerAll.property("Scale").setValue([scr_scaleMax*3,scr_scaleMax*3]);
    videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    createRotationProperty(videoLayerAll);



   var videoLayerBg = newCompAll.layers.add(videoFileItem);
   var posHoris =  newCompAll.width/2  
   var posVert  =  newCompAll.height/2 
   videoLayerBg.property("Position").setValue([posHoris,posVert]);

   blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
   blurEffect.property(1).setValue(bgGaussianBlur);
   videoLayerBg.property("Opacity").setValue(bgOpacity); 

   var videoLayer = newCompAll.layers.add(videoFileItem);
   createProperty(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
   //lumetriMainEffect = videoLayer.Effects.addProperty("ADBE Lumetri");

   handleParentFoldersAll(compNameAll);
   //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

}

//===================================================
function handleNewCompositions()
{
    getFons();

    rotationEnable  = 1;
    fileData =readXmlPr1_1(); lenFileList = handleNewComp(fileData,"HwGrp_1_1");
    fileData =readXmlPr1_2(); lenFileList = handleNewComp(fileData,"HwGrp_1_2");
    fileData =readXmlPr1_3(); lenFileList = handleNewComp(fileData,"HwGrp_1_3");
    fileData =readXmlPr1_4(); lenFileList = handleNewComp(fileData,"HwGrp_1_4");
    fileData =readXmlPr1_5(); lenFileList = handleNewComp(fileData,"HwGrp_1_5");
    fileData =readXmlPr1_6(); lenFileList = handleNewComp(fileData,"HwGrp_1_6");

    rotationEnable  = 0;
    fileData =readXmlPr2();   lenFileList = handleNewComp(fileData,"HwGrp_2"  );
    fileData =readXmlPr3();   lenFileList = handleNewComp(fileData,"HwGrp_3"  );
}

//===================================================
function handleNewComp(fileData,Prefix)
{

    var lenFileList = showFileList(fileData);
    //filecomp = createFileComp(fileData.pathurl[0]);

    //var Prefix       = "HwGrp_1"; 
    var nn           = 1;        
    var Prefix_NN    = 0;   

    for (var ii = 0; ii <= lenFileList; ii++ ) {

        nn  = 1+ii;        
        var fileCurrent = fileData.pathurl[ii]
        var FlagBigLitle  = 1;        

        //var newpath = "E:\\SF\\Nave\\img\\spr\\220209_1_1-spr.jpeg"
        var newpath = fileCurrent
        lg.writeln(newpath);
        var videoFile = File(newpath);
        var videoFileItem = app.project.importFile(new ImportOptions(videoFile));


        var Prefix_NN_nn    = Prefix_NN+nn;        
        var compName = Prefix + "_" + String(durationSec) + "_" + String(Prefix_NN+nn);
        var newComp = createNewComp(Prefix,Prefix_NN_nn);

        // var compName = "FileComp_1";
        // var newComp  = app.project.items.addComp(compName, 3840, 2160, 1.0, durationSec, 25);



        //videoItem  = findItem("FileComp_1","CmpItm");
        if(videoFileItem !=null )  { 

            if(ftgMP_LL_01      !=null )  {var vidSystem_1_1    = newComp.layers.add(ftgMP_LL_01);       vidSystem_1_1.property("Opacity").setValue(30);     vidSystem_1_1.property("Scale").setValue([210,210]);       }
            if(ftgMP_LL_08      !=null )  {var vidSystem_tr_1_1 = newComp.layers.add(ftgMP_LL_08);       vidSystem_tr_1_1.property("Opacity").setValue(30);  vidSystem_tr_1_1.property("Scale").setValue([210,210]);    }
            //if(ftgSystem_tr_1_1 !=null )  {var vidMP_LL_01      = newComp.layers.add(ftgSystem_tr_1_1);vidMP_LL_01.property("Opacity").setValue(20);vidMP_LL_01.property("Scale").setValue([120,120]);}
            if(ftgSystem_1_1    !=null )  {var vidMP_LL_08      = newComp.layers.add(ftgSystem_1_1);     vidMP_LL_08.property("Opacity").setValue(30); }

            var videoLayerBg = newComp.layers.add(videoFileItem);
            createPropertyBg(newComp, videoLayerBg, videoFileItem)
            videoLayerBg.property("Opacity").setValue(30); 

            var videoLayer = newComp.layers.add(videoFileItem);

            if  (FlagBigLitle  == 0) {
                FlagBigLitle  = 1; 
            } else {
                FlagBigLitle  = 0; 
            }
            createProperty(newComp, videoLayer, videoFileItem, FlagBigLitle)

            compF_FTG_GRP_1   = findItem("FTG_GRP_1","FldItm");
            if(videoFileItem !=null )  { videoFileItem.parentFolder = compF_FTG_GRP_1; }
            
            compPRECOMP_GRP_1 = findItem("PRECOMP_GRP_1","FldItm");
            itmCompName  = findItem(compName,"CmpItm");
            if(itmCompName !=null )  { itmCompName.parentFolder  = compPRECOMP_GRP_1; }


         }  // videoFileItem !=null

    } // for (var ii = 0; ii <= folderListLength; ii++ ) {
    
    return lenFileList;

} // handleNewComp


//===================================================
function handleNewComposit()
{

    var FlagBigLitle  = 1;        
    var Prefix       = "Grp_1"; 

    //lg.writeln(' handleNewComposit filePathUrl.length => ' + filePathUrl.length.toString());

    for(var i = 0; i < filePathUrl.length; i++) {

        //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);

        //nn  = 1+i;        
        //var Prefix_NN_nn    = Prefix_NN+nn;  
             

        var videoFile = File(filePathUrl[i]);
        var videoFileItem = app.project.importFile(new ImportOptions(videoFile));
        
        if(videoFileItem !=null )  { 
         
            var compNameBg = Prefix + "_BG_" + String(i+1);
            var newCompBg  = app.project.items.addComp(compNameBg, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBg = newCompBg.layers.add(videoFileItem);
            createPropertyBg(newCompBg, videoLayerBg, videoFileItem);
             
            var compName = Prefix + "_" + String(i+1);
            var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayer = newComp.layers.add(videoFileItem);
            if  (FlagBigLitle  == 0) {
                FlagBigLitle  = 1; 
            } else {
                FlagBigLitle  = 0; 
            }
            createProperty(newComp, videoLayer, videoFileItem, FlagBigLitle);

            compF_FTG_GRP_1   = findItem("FTG_GRP_1","FldItm");
            if(videoFileItem !=null )  { videoFileItem.parentFolder = compF_FTG_GRP_1; }

            compPRECOMP_GRP_1 = findItem("PRECOMP_GRP_1","FldItm");
            itmCompName  = findItem(compName,"CmpItm");
            if(itmCompName !=null )  { itmCompName.parentFolder  = compPRECOMP_GRP_1; }

            compPRECOMP_GRPBG_1   = findItem("PRECOMP_GRPBG_1","FldItm");
            itmCompNameBg  = findItem(compNameBg,"CmpItm");
            if(itmCompNameBg !=null )  { itmCompNameBg.parentFolder  = compPRECOMP_GRPBG_1; }

            // if(i>5){break;}
            //

        } //  if(videoFileItem !=null )  

    } //    for(var i = 0; i < filePathUrl.length; i++) 

}
//===================================================
function handleNewComposit2()
{

    var FlagBigLitle  = 1;        
    var Prefix       = "Grp_1"; 

    //lg.writeln(' handleNewComposit filePathUrl.length => ' + filePathUrl.length.toString());

    for(var i = 0; i < filePathUrl.length; i++) {

        //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);

        //nn  = 1+i;        
        //var Prefix_NN_nn    = Prefix_NN+nn;  


        var videoFile = File(filePathUrl[i]);
        var videoFileItem = app.project.importFile(new ImportOptions(videoFile));

        if(videoFileItem !=null )  {

            if  (FlagBigLitle  == 0) {
                FlagBigLitle  = 1; 
            } else {
                FlagBigLitle  = 0; 
            }             
            //handleNewCompositAll(i,videoFileItem,FlagBigLitle);
            handleCurrentCompAll(i,"Grp_All",FlagBigLitle,videoFileItem)

            var compNameBi1 = Prefix + "_BI1_" + String(i+1);
            var newCompBi1  = app.project.items.addComp(compNameBi1, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBi1 = newCompBi1.layers.add(videoFileItem);
            //createPropertyBi1(newCompBi1, videoLayerBi1, videoLayerBi1);
            createPropertyBi1(newCompBi1, videoLayerBi1, videoFileItem);


            var compNameBg = Prefix + "_BG_" + String(i+1);
            var newCompBg  = app.project.items.addComp(compNameBg, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBg = newCompBg.layers.add(videoFileItem);
            createPropertyBg(newCompBg, videoLayerBg, videoFileItem);


            var compName = Prefix + "_" + String(i+1);
            var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
            var videoLayer = newComp.layers.add(videoFileItem);


            createProperty(newComp, videoLayer, videoFileItem, FlagBigLitle);

            handleParentFolders(videoFileItem,compName,compNameBg,compNameBi1);
            //if ( i > 10 ){break;}

        } //  if(videoFileItem !=null )  

    } //    for(var i = 0; i < filePathUrl.length; i++) 
}


