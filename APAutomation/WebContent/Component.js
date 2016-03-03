jQuery.sap.declare("incture.apautomation.Component");

sap.ui.core.UIComponent.extend("incture.apautomation.Component",{
	metadata:{
		routing:{
			
			config:{
				viewType: "XML",
				viewPath: "apautomation"
			},
			
			routes:[
			        {
			        	pattern:"",
			        	name:"MasterInvoice",
			        	target:["master"],
			        	subroutes:[
										{
											pattern:"InvoiceDetails/{Price}",
											name:"DetailInvoice",
											target:["detail"]
										}
			        	           ]
			        }
			        ],
			        
			targets:{
				"master":{
					viewName: "MasterInvoice",
					type:"XML",
					controlAggregation:"masterPages",
					controlId:"idAppControl"
				},
				"detail":{
					viewName:"DetailInvoice",
					type:"XML",
					controlAggregation:"detailPages",
					controlId:"idAppControl"
				}
			}
		}
	},
	
	init: function(){
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		
		this.router= this.getRouter();
		this.router.initialize();
	},
	
	createContent: function(){
		var oView = sap.ui.view({
			id:'app',
			viewName:"apautomation.App",
			type:"XML",
			viewData: {component: this}
		});
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData('./json/InvoiceDetails.json',{async:false});
		oView.setModel(oModel,"defaultModel");
		
		return oView;
	}
	
});