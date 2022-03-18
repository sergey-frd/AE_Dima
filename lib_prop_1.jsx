

//===================================================
function createScaleProperty2(comp, videoLayer, curItem, FlagBigLitle)
{

    var keyProperty = videoLayer.property("Scale")
    var scr_scale = Math.min ((Math.round(comp.height*100/curItem.height,2)),(Math.round(comp.width*100/curItem.width,2)))
    var max_scale = scr_scale * 1.68;

    if  (FlagBigLitle  == 0) {

        for (var i = 0; i < addropertyKeys.length; i++ ) {

            //lg.writeln(String(i) + ' addropertyKeysLb: ' +   String(addropertyKeysLb[i])  + ' addropertyValLb[i]: ' +   String(addropertyValLb[i])  );
            //lg.writeln(String(i) + ' addropertyKeysLb: ' +   String(addropertyKeysLb[i])  + ' addropertyValLb[i]*scr_scale: ' +   String(addropertyValLb[i]*scr_scale)  );

            if(addropertyKeysLb[i] != undefined && addropertyValLb[i] != undefined ){
                varKeyProp = videoLayer.property("Scale").setValueAtTime(addropertyKeysLb[i], [addropertyValLb[i]*scr_scale*1,addropertyValLb[i]*scr_scale*1]);
            }
        } //    for (var i = 0; i <= addropertyKeys.length; i++ ) {

    } else {

        for (var i = 0; i < addropertyKeys.length; i++ ) {
            //lg.writeln(String(i) + ' addropertyKeysBl: ' +   String(addropertyKeysBl[i])  + ' addropertyValBl[i] ' +   String(addropertyValBl[i])  );
            //lg.writeln(String(i) + ' addropertyKeysBl: ' +   String(addropertyKeysBl[i])  + ' addropertyValBl[i]*max_scale: ' +   String(addropertyValBl[i]*max_scale)  );
            if(addropertyKeysBl[i] != undefined && addropertyValBl[i] != undefined ){
                varKeyProp = videoLayer.property("Scale").setValueAtTime(addropertyKeysBl[i], [addropertyValBl[i]*max_scale,addropertyValBl[i]*max_scale]);
            }
        } //    for (var i = 0; i <= addropertyKeys.length; i++ ) {
    }
}

//===================================================
function createScaleProperty(comp, videoLayer, curItem, FlagBigLitle)
{


    var scr_scale = Math.min ((Math.round(comp.height*100/curItem.height,2)),(Math.round(comp.width*100/curItem.width,2)))
    //var max_scale = scr_scale * 1.68;
    var max_scale = scr_scale * 1.62;


    // lg.writeln(String(scr_scale) + ' (comp.height) : ' +   String(comp.height)  + ' curItem.height: ' +   String(curItem.height)  );
    // lg.writeln(String(scr_scale) + ' (comp.width)  : ' +   String(comp.width)   + ' curItem.width:  ' +   String(curItem.width)  );


        var addTimeKeys = [
            0,
            0.25,
            0.5,
            0.75,
            1, 
            1.25, 
            1.5, 
            1.75, 
            2, 
            2.25, 
            2.5, 
            2.75, 
            3,
            3.25,
            3.5,
            3.75,
            4,
            4.24,
            4.5,
            4.75,
            durationSec];

    
        addTimeKeysLength = addTimeKeys.length;

    	var keyProperty = videoLayer.property("Scale")
        var prev_val = 0


    if  (FlagBigLitle  == 0) {
        var ampl = 100.0;
        var freq = 0.1;
        var decMs = 0.5;
        var norm = scr_scale;
        var t_offset = 0.;
        var tm  = 0.;
        var val = 0.;
        var varKeyProp;



        for (var i = 0; i <= addTimeKeysLength; i++ ) {

            tm = addTimeKeys[i];
            val = Math.round(ampl*Math.sin(freq * (tm - t_offset) * 2 * Math.PI)/Math.exp((tm - t_offset)*decMs)+ norm );

            if (val <= prev_val)
            {
                 break;
             }   
                    
             varKeyProp = keyProperty.setValueAtTime(addTimeKeys[i], [val,val]);
             prev_val = val
         } // for
         varKeyProp = keyProperty.setValueAtTime(durationSec, [max_scale,max_scale]);

      } else {

        var ampl = 70.0;
        var freq = 0.1;
        var decMs = 0.5;
        var norm = max_scale;
        var t_offset = -0.31;
        var tm  = 0.;
        var val = 0.;
        var varKeyProp;


        for (var i = 0; i <= addTimeKeysLength; i++ ) {

            tm = addTimeKeys[i];

            if (tm > 3.14) { break; }
            

            val = Math.round(ampl*Math.sin(freq * (tm - t_offset) * 2 * Math.PI)/Math.exp((tm - t_offset)*decMs)+ norm );
            //lg.writeln(String(i) + ' (1) : ' +   String(tm)  + ': ' +   String(val)  );

    
             varKeyProp = keyProperty.setValueAtTime(addTimeKeys[i], [val,val]);
         } // for

         varKeyProp = keyProperty.setValueAtTime(durationSec, [scr_scale,scr_scale]);


      }

}

//===================================================
function createPositionProperty(comp, videoLayer, FlagBigLitle)
{

    var posHoris =  comp.width/2;
    var posVert  =  comp.height/2; 
    var keyProperty = videoLayer.property("Position")

    if  (FlagBigLitle  == 0) {
        //videoLayer.property("Position").setValue([posHoris,posVert]);
        //varKey = videoLayer.property("Position").addKey( 0 );
        varKeyProp = keyProperty.setValueAtTime(0, [posHoris,posVert]);

      } else {
          varKeyProp = keyProperty.setValueAtTime(durationSec, [posHoris,posVert]);
    }
    //videoLayer.property("Position").setSpatialAutoBezierAtKey(varKey, true);
}


//===================================================
function createEffectsProperty(videoLayer)
{
    var EffAutoColor      = videoLayer.property("Effects").addProperty("Auto Color");
    var EffAutoContrast   = videoLayer.property("Effects").addProperty("Auto Contrast");
    var EffAutoLevels     = videoLayer.property("Effects").addProperty("Auto Levels");
    var EffBrContr        = videoLayer.property("Effects").addProperty("Brightness & Contrast");
}

//===================================================
function createRotationProperty(videoLayer)
{
    videoLayer.property("Rotation").expressionEnabled = true;
    //videoLayer.property("Rotation").expression = "Math.sin(time%900*2)*-0.62"
    videoLayer.property("Rotation").expression = propRotExp
        
}

//===================================================
function createOpacityProperty(videoLayer)
{
    //videoLayer.property("Opacity").setValuesAtTimes([0, 0.9, 4, 4.1],[25,100,100,25]);
    videoLayer.property("Opacity").setValuesAtTimes(addOpacityKeys,addOpacityVal);
}

//===================================================
function createProperty(comp, videoLayer, curItem, FlagBigLitle)
{

    
    var random = Math.round(Math.random());
    if(random == 0) {createScaleProperty(comp, videoLayer, curItem, FlagBigLitle);}
    else {createScaleProperty2(comp, videoLayer, curItem, FlagBigLitle);}
            
    //createScaleProperty2(comp, videoLayer, curItem, FlagBigLitle);
    //createScaleProperty(comp, videoLayer, curItem, FlagBigLitle);

    createPositionProperty(comp, videoLayer, FlagBigLitle);

    createOpacityProperty(videoLayer);
    if (rotationEnable  == 1 ){createRotationProperty(videoLayer);}

    createEffectsProperty(videoLayer);

    // !!! prop.setTemporalEaseAtKey(s, array[i]["KITE"][t], array[i]["KOTE"][t]); 
}


//===================================================
function createPropertyBg(comp, videoLayer, curItem)
{

   //  //var scr_scale = (Math.round(curItem.height*100/comp.height))
   //var scr_scale = Math.min ((Math.round(comp.height*100/curItem.height,2)),(Math.round(comp.width*100/curItem.width,2)))
   var scr_scale = Math.max ((Math.round(comp.height*100/curItem.height,2)),(Math.round(comp.width*100/curItem.width,2)))

   //lg.writeln('curItem  scr_scale = ' +  String(scr_scale)   + ' , '+ String(scr_scale)   );

   videoLayer.property("Scale").setValue([scr_scale*2,scr_scale*2]);


   var posHoris =  comp.width/2  
   var posVert  =  comp.height/2 
   videoLayer.property("Position").setValue([posHoris,posVert]);

   blurEffect = videoLayer.Effects.addProperty("ADBE Gaussian Blur 2");
   blurEffect.property(1).setValue(bgGaussianBlur);

   videoLayer.property("Opacity").setValue(bgOpacity); 
}


//===================================================
function createPropertyBi1(comp, videoLayer, curItem)
{

    var scr_scale = Math.max ((Math.round(comp.height*100/curItem.height,2)),(Math.round(comp.width*100/curItem.width,2)))
    videoLayer.property("Scale").setValue([scr_scale*3,scr_scale*3]);
    videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);

}

