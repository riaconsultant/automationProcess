sap.ui.controller("apautomation.DetailInvoice", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf apautomation.DetailInvoice
*/
	onInit: function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		this.router.attachRoutePatternMatched(this.handleMatch, this);
	},
	
	
	onPdfRead:function(){
		window.open("https://www.google.co.in");
	},
	
	onEdit  :function(){
		alert("please edit the valid fields ");
	},
	
	onSubmit :function(){
	alert("data has been saved succesfully");	
	},
	
	onDelete :function(){
		alert("data has been deleted successfully");
	},
	
	onApprove : function(){
		alert("data has been approved by the supervisior");
	},
	
	onManualProcess :function(){
		alert("data has been send for the manual process");
	},
	
	onDispute: function(){
		alert("display the  actual extended value from the table");
	},
	
	onUpdate:function(){
		alert("data has been updated succesfully in the database");
	},
	
	
	
	
	handleMatch: function(oEvent){
		if(oEvent.getParameter("name") === "DetailInvoice"){
			var price = oEvent.getParameter("arguments").Price;
			var context =sap.ui.getCore().byId("app").getModel("defaultModel").getContext("/InvoiceDetails/"+price);
			this.getView().setBindingContext(context,"defaultModel");
		}
	}
	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf apautomation.DetailInvoice
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf apautomation.DetailInvoice
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf apautomation.DetailInvoice
*/
//	onExit: function() {
//
//	}

});