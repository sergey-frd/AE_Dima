
//===================================================
function readXmlPr1_1() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_1.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }
function readXmlPr1_2() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_2.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }
function readXmlPr1_3() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_3.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }
function readXmlPr1_4() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_4.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }
function readXmlPr1_5() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_5.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }
function readXmlPr1_6() { var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_1_6.xml");    file.open("r");     var xmlString = file.read();     var myXml = new XML(xmlString);  file.close();   return myXml; }


//===================================================
function getFons() {

    ftgSystem_1_1     = findItem("System_1_1.mp4"   ,"FtgItm"); 
    ftgSystem_tr_1_1  = findItem("System_tr_1_1.mp4","FtgItm"); 
    ftgMP_LL_01       = findItem("MP_LL_01.mov"     ,"FtgItm"); 
    ftgMP_LL_08       = findItem("MP_LL_08.mov"     ,"FtgItm"); 

}

//===================================================
function readXmlTest_1() {
    var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\test_1.xml");
    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}

//===================================================
function readXmlPr2() {
    var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_2.xml");
    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}

//===================================================
function readXmlPr3() {
    var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\hwr_file_list_6_3.xml");
    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}



