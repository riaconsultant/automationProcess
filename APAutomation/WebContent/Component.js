jQuery.sap.declare("incture.apautomation.Component");

sap.ui.core.UIComponent.extend("incture.apautomation.Component",{
	metadata:{
		includes:[
		          "./CSS/style.css",
		          "./CSS/fonts.css"
		          ],
		routing:{
			
			config:{
				viewType: "XML",
				viewPath: "apautomation",
					targetAggregation: "pages",
					clearTarget: false
			},
			
			routes:[
			        {
			        	pattern: "",
						name: "LaunchScreen",
						view: "LaunchScreen",
						targetControl: "masterApp"
//							,subroutes:[
//										{
//											pattern:"masterInvoice/{Price}",
//											name:"masterInvoice",
//											target:["master"]
//										}
//			        	           ]
			        },{
	                    pattern: "split",
						name: "App",
						view: "App",
						targetControl: "masterApp",
						subroutes: [
	    				{
	    					pattern: "masterInvoice/{contextPath}",
	    					name: "masterInvoice",
	    					view: "MasterInvoice",
	    					targetAggregation: "masterPages",
	    					targetControl: "idAppControl",
	    					subroutes: [
	    						{
	    							pattern: "masterInvoice/{contextPath}/DetailInvoice/{Price}",
	    							name: "DetailInvoice",
	    							view: "DetailInvoice",
	    							targetAggregation: "detailPages"
	    						}
	    					]
	    				}]
					}
			        ]
			,
//			        
//			targets:{
//				"master":{
//					viewName: "MasterInvoice",
//					type:"XML",
//					controlAggregation:"masterPages",
//					controlId:"idAppControl"
//				},
//				"detail":{
//					viewName:"DetailInvoice",
//					type:"XML",
//					controlAggregation:"detailPages",
//					controlId:"idAppControl"
//				}
//			}
		}
	},
	
	init: function(){
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		
		this.router= this.getRouter();
		
		
//		this.router.myNavBack = incture.apautomation.MyRouter.myNavBack;
		// 4. initialize the router  
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(this.router);
			this.router.initialize();
//		router.initialize();
	},
	
	createContent: function(){
		var oView = sap.ui.view({
			id:'app',
			viewName:"apautomation.masterApp",
			type:"XML",
			viewData: {component: this}
		});
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData('util/InvoiceDetails.json',{async:false});
		oView.setModel(oModel,"defaultModel");
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("util/layout.json");
		
//		var oModel = new sap.ui.model.odata.ODataModel("https://ldcigm6.wdf.sap.corp:44333/sap/opu/odata/sap/TDMS_MANAGE_EXEC_SRV/");
		this.setModel(oModel);
		
		var tileData = [{
    		toolbar : "Customer",
    		reportListDto : []
			}];
		var listModel = new sap.ui.model.json.JSONModel();
			listModel.setData({reportListDto : [{
		    				category: "Report",
		    				reportDesc: "Report",
		    				reportId: "Report",
		    				reportName: "Report"
		    		},{
		    				category: "OTIFReport",
		    				reportDesc: "OTIF Report",
		    				reportId: "otifReport",
		    				reportName: "OTIF Report"
		    		},{
						category: "POReport",
						reportDesc: "PO Report",
						reportId: "poReport",
						reportName: "PO Report"
				}]});
		this.setModel(listModel, "listModel");
		
		var tileModel = new sap.ui.model.json.JSONModel();
		tileModel.setData({tileData:tileData});
		this.setModel(tileModel, "tileModel");
		
		var detailModel = new sap.ui.model.json.JSONModel();
		this.setModel(detailModel, "detailModel");
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData('util/InvoiceDetails.json',{async:false});
		oView.setModel(oModel,"defaultModel");
		
		
		return oView;
	}
	
});