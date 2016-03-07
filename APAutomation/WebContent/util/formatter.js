jQuery.sap.declare("incture.apautomation.util.formatter");
incture.apautomation.util.formatter = {
	masterVisible : function(value){
		if(value){
			return "ShowHideMode"
		}
		else{
			return "HideMode"
		}
	}	
};