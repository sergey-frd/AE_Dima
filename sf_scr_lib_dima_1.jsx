//===================================================
// function handleNewComp2(compName)
// {
//     //var compName = Prefix;
//     var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
//     return newComp;
// 
// }

//===================================================
function readXmlae_Dima22_3_1(pathRrXml) 
{
    //var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\xml\\ae_dima_kids22_10_1.xml");
    var file = File(pathRrXml);
    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}


//===================================================
function  handleXmlDima_1()
{

    myXml = readXmlae_Dima22_3_1();
    var i = 0; 
    while(myXml.media.video.track.clipitem.file[i] != undefined) {

        if (myXml.media.video.track.clipitem.file[i].pathurl) {

            filePathUrl.push(myXml.media.video.track.clipitem.file[i].pathurl);
            var w = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.width;
            fileWidth.push(parseIntSmarter(w));
            var h = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.height;
            fileHeight.push(parseIntSmarter(h));

        } // if (myXml.media.video.track.clipitem.file[i].pathurl) != undefined) 
        i++;
    }

    // lg.writeln("====================");
    // lg.writeln(" i length: " +String(i-1));
    // lg.writeln(" i filePathUrl.length: " +String(filePathUrl.length));
    // lg.writeln(" i fileWidth.length:   " +String(fileWidth.length));
    // lg.writeln(" i fileHeight.length:  " +String(fileHeight.length));
    // lg.writeln("====================");

    for(var i = 0; i < filePathUrl.length; i++) {
        //lg.writeln(' i= '+ String(i+1) +'  => ' + filePathUrl[i]);

        //var fp1 = filePathUrl[i].replace("file:\/\/localhost\/","");
        //var fp2 = fp1.replace("E%3a","E:");

        var fpList = filePathUrl[i].split('\/');

        var winPath = '';
        for(var ii = 0; ii < fpList.length; ii++) {

            if(fpList[ii] == "file:")     {continue;}
            if(fpList[ii] == "localhost") {continue;}
            if(fpList[ii] == "E%3a")    {winPath += "E:\\\\"; continue;}

            winPath += fpList[ii];
            if (ii < fpList.length -1 && ii > 3) {winPath += "\\\\";}
            
        }
        // lg.writeln(' i= '+ String(i+1) +'   winPath=> ' + winPath);
        filePathUrl[i] = winPath

        fileName.push(fpList[fpList.length-1])
        // lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);
        //lg.writeln(' i= '+ String(i+1) +'  fileName=> '    + fileName[i]);
        //
        //lg.writeln(' i= '+ String(i+1) +'   fileWidth[i]=> '  + fileWidth[i].toString());
        //lg.writeln(' i= '+ String(i+1) +'   fileHeight[i]=> ' + fileHeight[i].toString());

        var mi = Math.min(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])
        var ma = Math.max(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])

        //lg.writeln(' i= '+ String(i+1) +'   mi=> '  + mi.toString());
        //lg.writeln(' i= '+ String(i+1) +'   ma=> '  + ma.toString());

        //var mi = Math.min (compHeight*100/fileHeight[i]),(Math.round(compHeight*100/fileWidth[i]))
        //var ma = Math.max (compHeight*100/fileHeight[i]),(Math.round(compHeight*100/fileWidth[i]))

        scaleMin.push(Math.round(mi,2));
        scaleMax.push(Math.round(ma,2));
        
        //lg.writeln(' i= '+ String(i+1) +'   scaleMin[i]=> '  + scaleMin[i].toString());
        //lg.writeln(' i= '+ String(i+1) +'   scaleMax[i]=> '  + scaleMax[i].toString());


    }

}


//===================================================

//===================================================
function  handleXmlDima_2(myXml)
{

    var i = 0; 
    while(myXml.media.video.track.clipitem.file[i] != undefined) {

        if (myXml.media.video.track.clipitem.file[i].pathurl) {

            filePathUrl.push(myXml.media.video.track.clipitem.file[i].pathurl);
            var w = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.width;
            fileWidth.push(parseIntSmarter(w));
            var h = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.height;
            fileHeight.push(parseIntSmarter(h));

        } // if (myXml..
        i++;
    }

    for(var i = 0; i < filePathUrl.length; i++) {

        var fpList = filePathUrl[i].split('\/');
        var winPath = '';
        for(var ii = 0; ii < fpList.length; ii++) {

            if(fpList[ii] == "file:")     {continue;}
            if(fpList[ii] == "localhost") {continue;}
            if(fpList[ii] == "E%3a")      {winPath += "E:\\\\"; continue;}

            winPath += fpList[ii];
            if (ii < fpList.length -1 && ii > 3) {winPath += "\\\\";}

        }
        filePathUrl[i] = winPath
        fileName.push(fpList[fpList.length-1])
        var mi = Math.min(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])
        var ma = Math.max(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])
        scaleMin.push(Math.round(mi,2));
        scaleMax.push(Math.round(ma,2));

    }
}

//===================================================


//===================================================

