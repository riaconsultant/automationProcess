sap.ui.controller("apautomation.MasterInvoice", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf apautomation.MasterInvoice
*/
	onInit: function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		var that = this;
		this.router.getRoute("masterInvoice").attachPatternMatched(this._routePatternMatched, this);
		
		
//		this.router.attachRoutePatternMatched(function(oEvent) {
//			//context data from launcher screen
//			var arguments = oEvent.getParameter("arguments").contextPath;
//			if(arguments){
//				var contextParams = JSON.parse(oEvent.getParameter("arguments").contextPath);
//				that.getView().getModel("detailModel").setData(contextParams);
//				var masterPage = that.getView().byId("masterPage");
//				masterPage.addStyleClass(that.getView().getModel().getData().mainLayoutConf.navBgColor);
//				
//				//Data binding for master list
//				var masterListModel = new sap.ui.model.json.JSONModel();
//				masterListModel.setData(contextParams.contextData);
//				var masterList = that.getView().byId("masterList");
//				masterList.setModel(masterListModel);
//				that.getView().byId("listItems").addStyleClass(that.getView().getModel().getData().mainLayoutConf.navTextColor);
//				masterList.bindItems("/reportListDto", that.getView().byId("listItems"));
//				masterList.setHeaderText(contextParams.contextData.toolbar);
//				masterList.addStyleClass(that.getView().getModel().getData().mainLayoutConf.navTextColor);
//				var contextData = that.getView().getModel("tileModel").getData().tileData[contextParams.tileModelData].reportListDto[contextParams.tilePath];
//				for(var i = 0 ; i < masterList.getItems().length ; i++){
//					if(contextData.reportName === masterList.getItems()[i].getTitle()){
//						masterList.getItems()[i].addStyleClass(that.getView().getModel().getData().mainLayoutConf.navHighlightColor);
//					}
//				}
//			}
//			
//			if (oEvent.getParameter("name") === "masterView") {
//				//navigation to detail view
//				that.router.navTo("detailView", {
//					contextPath : arguments
//				});
//			}
//		});
	},
	_routePatternMatched: function(oEvent) {
	 context = oEvent.getParameter("arguments").contextPath;

	},
	handleItemPress: function(oEvent){
		this.router= sap.ui.core.UIComponent.getRouterFor(this);
		var item= oEvent.getSource();
		var price= item.getBindingContextPath("defaultModel").split("/")[2];
		
//		this._router.navTo("product", {id: sCategoryId, productId: sProductId}, !Device.system.phone);
		this.router.navTo("DetailInvoice",{contextPath:context, Price:price},false);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf apautomation.MasterInvoice
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf apautomation.MasterInvoice
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf apautomation.MasterInvoice
*/
//	onExit: function() {
//
//	}

});