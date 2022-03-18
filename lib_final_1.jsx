

//===================================================
function createFinalComp_OLD()
{
    var compName = "aeHvrAll_1";
    //var newComp = app.project.items.addComp(compName, width, height, 1.0, durationSec, frameRate);
    //var newComp = app.project.items.addComp(compName, 3840, 2160, 1.0, durationSec, 25);
    var finalComp = app.project.items.addComp(compName, 3840, 2160, 1.0, 25, 25);

    var itemCollection = app.project.items;
    var itemCollection_length = itemCollection.length;

    var time = 0;
    for (var i = 1; i <= itemCollection.length; i++) {
        //
        var curItem = itemCollection[i];
        var comp    = itemCollection[i];

        // initial time (in seconds)

        if( comp instanceof CompItem) {
            if( comp.name == "H_Be_5_1") {

                lg.writeln('item: ' +  String(i) + ' name: ' +   comp.name + '  value: ' + String(comp.value) + ' numLayers= ' + String(comp.numLayers)  + '  typeName: ' + String(comp.typeName) + '  parentFolder.name: ' + String(comp.parentFolder.name)  );
                lg.writeln('comp= ' +  String(comp)  );
                lg.writeln('    width: ' +   String(comp.width) + '  height: ' + String(comp.height) + '  duration: ' + String(comp.duration) );

                var curComp = finalComp.layers.add(comp);
                lg.writeln('curComp= ' +  String(curComp)  );
                curComp.startTime = time;
                time += durationSec;
                continue;
            }
            if( comp.name == "H_Be_5_2") {

                lg.writeln('item: ' +  String(i) + ' name: ' +   comp.name + '  value: ' + String(comp.value) + ' numLayers= ' + String(comp.numLayers)  + '  typeName: ' + String(comp.typeName) + '  parentFolder.name: ' + String(comp.parentFolder.name)  );
                lg.writeln('comp= ' +  String(comp)  );
                lg.writeln('    width: ' +   String(comp.width) + '  height: ' + String(comp.height) + '  duration: ' + String(comp.duration) );

                var curComp = finalComp.layers.add(comp);
                lg.writeln('curComp= ' +  String(curComp)  );
                curComp.startTime = time;
                time += durationSec;
                continue;
            }
            if( comp.name == "H_Be_5_3") {

                lg.writeln('item: ' +  String(i) + ' name: ' +   comp.name + '  value: ' + String(comp.value) + ' numLayers= ' + String(comp.numLayers)  + '  typeName: ' + String(comp.typeName) + '  parentFolder.name: ' + String(comp.parentFolder.name)  );
                lg.writeln('comp= ' +  String(comp)  );
                lg.writeln('    width: ' +   String(comp.width) + '  height: ' + String(comp.height) + '  duration: ' + String(comp.duration) );

                var curComp = finalComp.layers.add(comp);
                lg.writeln('curComp= ' +  String(curComp)  );
                curComp.startTime = time;
                time += durationSec;
                continue;
            }
        }
    }

    return finalComp;
}



//===================================================
function handleFinalComp()
{
    
    var inCompListHwGrp_1_1 = [
        'HwGrp_1_1_5_1',
        'HwGrp_1_1_5_2',
        'HwGrp_1_1_5_3'
    ];
    var inCompListHwGrp_1_2 = [
        'HwGrp_1_2_5_1',
        'HwGrp_1_2_5_2',
        'HwGrp_1_2_5_3'
    ];
    var inCompListHwGrp_1_3 = [
        'HwGrp_1_3_5_1',
        'HwGrp_1_3_5_2',
        'HwGrp_1_3_5_3'
    ];
    var inCompListHwGrp_1_4 = [
        'HwGrp_1_4_5_1',
        'HwGrp_1_4_5_2',
        'HwGrp_1_4_5_3'
    ];
    var inCompListHwGrp_1_5 = [
        'HwGrp_1_5_5_1',
        'HwGrp_1_5_5_2',
        'HwGrp_1_5_5_3'
    ];
    var inCompListHwGrp_1_6 = [
        'HwGrp_1_6_5_1',
        'HwGrp_1_6_5_2',
        'HwGrp_1_6_5_3',
        'HwGrp_1_6_5_4'
    ];
    var compName = "aecompHwGrp_1_1"; finalComp = createFinalComp(compName,inCompListHwGrp_1_1,15)
    var compName = "aecompHwGrp_1_2"; finalComp = createFinalComp(compName,inCompListHwGrp_1_2,15)
    var compName = "aecompHwGrp_1_3"; finalComp = createFinalComp(compName,inCompListHwGrp_1_3,15)
    var compName = "aecompHwGrp_1_4"; finalComp = createFinalComp(compName,inCompListHwGrp_1_4,15)
    var compName = "aecompHwGrp_1_5"; finalComp = createFinalComp(compName,inCompListHwGrp_1_5,15)
    var compName = "aecompHwGrp_1_6"; finalComp = createFinalComp(compName,inCompListHwGrp_1_6,20)


    var inCompListHwGrp_2_1 = [
        'HwGrp_2_5_1',
        'HwGrp_3_5_1',
        'aecompHwGrp_1_1'
    ];


    var inCompListHwGrp_2_2 = [
        'HwGrp_2_5_2',
        'HwGrp_3_5_2',
        'aecompHwGrp_1_2'
    ];


    var inCompListHwGrp_2_3 = [
        'HwGrp_2_5_3',
        'HwGrp_3_5_3',
        'aecompHwGrp_1_3'
    ];


    var inCompListHwGrp_2_4 = [
        'HwGrp_2_5_4',
        'HwGrp_3_5_4',
        'aecompHwGrp_1_4'
    ];


    var inCompListHwGrp_2_5 = [
        'HwGrp_2_5_5',
        'HwGrp_3_5_5',
        'aecompHwGrp_1_5'
    ];


    var inCompListHwGrp_2_6 = [
        'HwGrp_2_5_6',
        'HwGrp_3_5_6',
        'aecompHwGrp_1_6'
    ];


    var compName = "aecompHwGrp_2_1"; finalComp = createFinalComp(compName,inCompListHwGrp_2_1,25)
    var compName = "aecompHwGrp_2_2"; finalComp = createFinalComp(compName,inCompListHwGrp_2_2,25)
    var compName = "aecompHwGrp_2_3"; finalComp = createFinalComp(compName,inCompListHwGrp_2_3,25)
    var compName = "aecompHwGrp_2_4"; finalComp = createFinalComp(compName,inCompListHwGrp_2_4,25)
    var compName = "aecompHwGrp_2_5"; finalComp = createFinalComp(compName,inCompListHwGrp_2_5,25)
    var compName = "aecompHwGrp_2_6"; finalComp = createFinalComp(compName,inCompListHwGrp_2_6,30)


    var inCompListHwGrp_3_1 = [
        "aecompHwGrp_2_1",
        "aecompHwGrp_2_2",
        "aecompHwGrp_2_3",
        "aecompHwGrp_2_4",
        "aecompHwGrp_2_5",
        "aecompHwGrp_2_6"
        ];
    var compName = "aecompHwGrp_3_1"; finalComp = createFinalComp(compName,inCompListHwGrp_3_1,155)

    compF_COMP_FINAL   = findItem("COMP_FINAL","FldItm");
    
    itm = findItem("aecompHwGrp_1_1","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_1_2","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_1_3","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_1_4","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_1_5","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_1_6","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_1","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_2","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_3","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_4","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_5","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_2_6","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }
    itm = findItem("aecompHwGrp_3_1","CmpItm"); if(itm !=null )  { itm.parentFolder  = compF_COMP_FINAL; }

    return finalComp
}


//===================================================
function handleFinalComp2()
{
    var compFinalName = "aeFinalVika_1";
    handleFinalComp3(compFinalName);
}

//===================================================
function createFinalComp(compName,inCompList,compDuration)
{
    //var compName = "aecompHwGrp_1_1";
    var finalComp = app.project.items.addComp(compName, 3840, 2160, 1.0, compDuration, 25);
    var time = 0;

    var c1  = findItem(inCompList[0],"CmpItm");
    var c2  = findItem(inCompList[1],"CmpItm");
    var c3  = findItem(inCompList[2],"CmpItm");

    if(c1 !=null )  {p1 = finalComp.layers.add(c1); p1.startTime = time; time += c1.duration; }  
    if(c2 !=null )  {p2 = finalComp.layers.add(c2); p2.startTime = time; time += c2.duration; }  
    if(c3 !=null )  {p3 = finalComp.layers.add(c3); p3.startTime = time; time += c3.duration; }  

    if  (inCompList.length > 3) {
        var c4  = findItem(inCompList[3],"CmpItm");
        if(c4 !=null )  {p4 = finalComp.layers.add(c4); p4.startTime = time; time += c4.duration; }  
    }

    if  (inCompList.length > 4) {
        var c5  = findItem(inCompList[4],"CmpItm");
        if(c5 !=null )  {p5 = finalComp.layers.add(c5); p5.startTime = time; time += c5.duration; }  
    }

    if  (inCompList.length > 5) {
        var c6  = findItem(inCompList[5],"CmpItm");
        if(c6 !=null )  {p6 = finalComp.layers.add(c6); p6.startTime = time; time += c6.duration; }  
    }

    return finalComp;
}


//===================================================
function handleFinalComp3(compFinalName)
{
    //var compFinalName = "aeFinalVika_1";
    var Prefix       = "Grp_1"; 
    var time = 0;

    var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, filePathUrl.length*durationSec, 25);
    for(var i = 0; i < filePathUrl.length; i++) {
      

        var compName = Prefix + "_" + String(i+1);
        var compNameBg = Prefix + "_BG_" + String(i+1);

        var c1  = findItem(compNameBg,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            //time += c1.duration;
        } // if(c1 !=null )

        var c1  = findItem(compName,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            time += c1.duration;
        } // if(c1 !=null )

    } //    for(var i = 0; i < filePathUrl.length; i++) 


}



//===================================================
function handleFinalCompBase(compFinalName)
{
    var Prefix       = "Grp_1"; 
    var time = 0;

    var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, filePathUrl.length*durationSec, 25);
    for(var i = 0; i < filePathUrl.length; i++) {


        var compName    = Prefix   + "_"   + String(i+1);
        var c1  = findItem(compName,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            time += c1.duration;
        } // if(c1 !=null )

    } //    for(var i = 0; i < filePathUrl.length; i++) 


}

//===================================================
function handleFinalCompAll(compFinalName)
{
    //var compFinalName = "aeFinalVika_1";
    var Prefix       = "Grp_All"; 
    var time = 0;

    var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, filePathUrl.length*durationSec, 25);
    for(var i = 0; i < filePathUrl.length; i++) {


        var compNameAll = Prefix + "_All_" + String(i+1);

        var c1  = findItem(compNameAll,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time;  time += c1.duration; 
            //time += c1.duration;
        } // if(c1 !=null )

    } //    for(var i = 0; i < filePathUrl.length; i++) 


}


//===================================================
function handleFinalCompBaseBg(compFinalName)
{
    //var compFinalName = "aeFinalVika_1";
    var Prefix       = "Grp_1"; 
    var time = 0;

    var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, filePathUrl.length*durationSec, 25);
    for(var i = 0; i < filePathUrl.length; i++) {


        var compName    = Prefix   + "_"   + String(i+1);
        var compNameBg  = Prefix + "_BG_"  + String(i+1);


        var c1  = findItem(compNameBg,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            //time += c1.duration;
        } // if(c1 !=null )

        var c1  = findItem(compName,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            time += c1.duration;
        } // if(c1 !=null )

    } //    for(var i = 0; i < filePathUrl.length; i++) 


}

//===================================================
function handleFinalComp4(compFinalName)
{
    //var compFinalName = "aeFinalVika_1";
    var Prefix       = "Grp_1"; 
    var time = 0;

    var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, filePathUrl.length*durationSec, 25);
    for(var i = 0; i < filePathUrl.length; i++) {


        var compName    = Prefix   + "_"   + String(i+1);
        var compNameBg  = Prefix + "_BG_"  + String(i+1);
        var compNameBi1 = Prefix + "_BI1_" + String(i+1);

        var c1  = findItem(compNameBi1,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            //time += c1.duration;
        } // if(c1 !=null )

        var c1  = findItem(compNameBg,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            //time += c1.duration;
        } // if(c1 !=null )

        var c1  = findItem(compName,"CmpItm");
        if(c1 !=null ) {  
            p1 = finalComp.layers.add(c1); p1.startTime = time; 
            time += c1.duration;
        } // if(c1 !=null )

    } //    for(var i = 0; i < filePathUrl.length; i++) 


}

