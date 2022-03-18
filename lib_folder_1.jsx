
//===================================================
function handleFolders() 
{


    comp_PRJ   = findItem("_PRJ","FldItm");
    compCOMPS  = findItem("COMPS","FldItm");
    compPRECMP = findItem("_PRECMPS","FldItm");
    compFTG    = findItem("02_FOOTAGES","FldItm");

    compF_COMP_FINAL   = findItem("COMP_FINAL","FldItm");
    if(compF_COMP_FINAL !=null )  { compF_COMP_FINAL.remove(); }

    compF_FTG_GRP_1   = findItem("FTG_GRP_1","FldItm");
    if(compF_FTG_GRP_1 !=null )  { compF_FTG_GRP_1.remove(); }

    var compPRECOMP_GRP_1      = findItem("PRECOMP_GRP_1","FldItm");
    var compPRECOMP_GRPBI1_1   = findItem("PRECOMP_GRPBI1_1","FldItm");
    var compPRECOMP_GRPALL_1   = findItem("PRECOMP_GRPALL_1","FldItm");

    if(compPRECOMP_GRP_1    !=null )  { compPRECOMP_GRP_1.remove(); }
    if(compPRECOMP_GRPBI1_1 !=null )  { compPRECOMP_GRPBI1_1.remove(); }
    if(compPRECOMP_GRPALL_1 !=null )  { compPRECOMP_GRPALL_1.remove(); }


    var compF_FTG_GRP_1     = app.project.items.addFolder("FTG_GRP_1");
    var compPRECOMP_GRP_1   = app.project.items.addFolder("PRECOMP_GRP_1");
    var compPRECOMP_GRPBG_1 = app.project.items.addFolder("PRECOMP_GRPBG_1");
    var compPRECOMP_GRPBI1_1  = app.project.items.addFolder("PRECOMP_GRPBI1_1");
    var compPRECOMP_GRPALL_1  = app.project.items.addFolder("PRECOMP_GRPALL_1");
    var compF_COMP_FINAL    = app.project.items.addFolder("COMP_FINAL");

    compF_COMP_FINAL   = findItem("COMP_FINAL","FldItm");
    if(compF_COMP_FINAL !=null )  { compF_COMP_FINAL.parentFolder = compCOMPS; }

    compFTG    = findItem("02_FOOTAGES","FldItm");
    if(compF_FTG_GRP_1 !=null )  { compF_FTG_GRP_1.parentFolder = compFTG; }

    compPRECMP = findItem("_PRECMPS","FldItm");
    if(compPRECOMP_GRP_1     !=null )  { compPRECOMP_GRP_1.parentFolder    = compPRECMP;  }
    if(compPRECOMP_GRPBG_1   !=null )  { compPRECOMP_GRPBG_1.parentFolder  = compPRECMP;  }
    if(compPRECOMP_GRPBI1_1  !=null )  { compPRECOMP_GRPBI1_1.parentFolder  = compPRECMP; }
    if(compPRECOMP_GRPALL_1  !=null )  { compPRECOMP_GRPALL_1.parentFolder  = compPRECMP; }

}


//=============================================================================

function handleParentFoldersAll(compNameAll)
{

    var compPRECOMP_GRPALL_1   = findItem("PRECOMP_GRPALL_1","FldItm");
    itmCompNameAll = findItem(compNameAll,"CmpItm");
    if(itmCompNameAll  !=null )  { itmCompNameAll.parentFolder  = compPRECOMP_GRPALL_1}

}

//=============================================================================

function handleParentFolders(videoFileItem,compName,compNameBg,compNameBi1)
{

    compF_FTG_GRP_1   = findItem("FTG_GRP_1","FldItm");
    //if(videoFileItem !=null )  { videoFileItem.parentFolder = compF_FTG_GRP_1; }
    if(compF_FTG_GRP_1 !=null && videoFileItem !=null)  {videoFileItem.parentFolder = compF_FTG_GRP_1; }

    compPRECOMP_GRP_1 = findItem("PRECOMP_GRP_1","FldItm");
    itmCompName  = findItem(compName,"CmpItm");
    if(itmCompName !=null )  { itmCompName.parentFolder  = compPRECOMP_GRP_1; }

    compPRECOMP_GRPBG_1   = findItem("PRECOMP_GRPBG_1","FldItm");
    itmCompNameBg  = findItem(compNameBg,"CmpItm");
    if(itmCompNameBg !=null )  { itmCompNameBg.parentFolder  = compPRECOMP_GRPBG_1; }

    var compPRECOMP_GRPBI1_1   = findItem("PRECOMP_GRPBI1_1","FldItm");
    itmCompNameBi1 = findItem(compNameBi1,"CmpItm");
    if(itmCompNameBi1  !=null )  { itmCompNameBi1.parentFolder  = compPRECOMP_GRPBI1_1}

    //var compPRECOMP_GRPALL_1   = findItem("PRECOMP_GRPALL_1","FldItm");
    //itmCompNameAll = findItem(compNameAll,"CmpItm");
    //if(itmCompNameAll  !=null )  { itmCompNameAll.parentFolder  = compPRECOMP_GRPALL_1}

}


//===================================================
function findItemDbg(valItem, typeInst) {


    //lg.writeln('findItem valItem= ' + valItem );
    var itemCollection = app.project.items;

    for (var i = 1; i <= itemCollection.length; i++) {
        var comp = itemCollection[i]; 

        if(typeInst == "CmpItm" && comp instanceof CompItem){
            lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
            if (comp.name == valItem) {
                lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                return comp;
            }
        } else if(typeInst == "FldItm" && comp instanceof FolderItem){
            lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
              if (comp.name == valItem) {
                lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                return comp;
            }
        } else if(typeInst == "FtgItm" && comp instanceof FootageItem){
            lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
            if (comp.name == valItem) {
                lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                //lg.writeln('FolderItem typeName= ' +  String(comp.name)  );
                return comp;
            }
        }

    }

    lg.writeln('!! Not found findItem valItem= ' + valItem );
    return null;
}

//===================================================
function findItem(valItem, typeInst) {


    //lg.writeln('findItem valItem= ' + valItem );
    var itemCollection = app.project.items;

    for (var i = 1; i <= itemCollection.length; i++) {
        var comp = itemCollection[i]; 

        if(typeInst == "CmpItm"){
            if(comp instanceof CompItem){
                if (comp.name == valItem) {
                    //lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                    //lg.writeln('    width: ' +   String(comp.width) + '  height: ' + String(comp.height) + '  duration: ' + String(comp.duration) );
                    return comp;
                }
            }
        } else if(typeInst == "FldItm" ){
            if(comp instanceof FolderItem){
                if (comp.name == valItem) {
                    //lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                    return comp;
                }
            }

        } else if(typeInst == "FtgItm" && comp instanceof FootageItem){
            if(comp instanceof FootageItem){
                if (comp.name == valItem) {
                    //lg.writeln('item: ' +  String(i) + ' name: ' +   itemCollection[i].name + '  value: ' + String(itemCollection[i].value) + ' numLayers= ' + String(itemCollection[i].numLayers)  + '  typeName: ' + String(itemCollection[i].typeName) + '  parentFolder.name: ' + String(itemCollection[i].parentFolder.name)  );
                    return comp;
                }
            }
        }

    }

    // lg.writeln('!! Not found findItem valItem= ' + valItem );
    lg.writeln('!! Not found findItem ');
    return null;
}



