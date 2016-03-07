jQuery.sap.require("incture.apautomation.util.formatter");
sap.ui.controller("apautomation.LaunchScreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf configurableui.LaunchScreen
*/
	onInit: function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		var that = this;
		this.router.attachRoutePatternMatched(function(oEvent) {
			if (oEvent.getParameter("name") === "LaunchScreen") {
	/*------------------------------------------------------------------------------------------------------------------------*/
				//Logic for applying background Image
				function applyStyle(element, style){
				    Object.keys(style).forEach(function(key){
				        element.style[key] = style[key];
				    });
				}
				
				var backgroundImage = that.getView().getModel().getData().launchpadConf.backgroundImage;
				var pageBackground = document.querySelector('.launcherBodyClass');
				var backgroundStyle = {
						background : "url('"+backgroundImage +"')" + "no-repeat center center fixed",
						backgroundSize : "cover",
				};
				
				applyStyle(pageBackground, backgroundStyle);
				//Till Here
				
	/*-----------------------------------------------------------------------------------------------------------------------*/			

				//-------column chart vizframe-------
				
				var oVizFrame4 = new sap.viz.ui5.controls.VizFrame({
					id:"idoVizFrame4",
					height:"250px",
					width:"100%",
					legendVisible:false,
					uiConfig:{applicationSet:'fiori'}
				});
				
				var chartContainer = new sap.suite.ui.commons.ChartContainerContent({
		        	 content:[oVizFrame4]});
				var vbox1 = new sap.m.VBox({
					items : [
					         chartContainer  
					],
					layoutData : new sap.ui.layout.GridData({
						span : "L3 M3 S8",linebreakL:true,
						linebreakM:true,
						linebreakS:true
					})
				}); 
				/*******************************/
				
				oVizFrame4.setVizProperties({
					title : {
						visible : true,
						text : 'Exception Overview'
					},
		            valueAxis: {
		            	
		                title: {
		                    visible: false
		                }
		            },
		            categoryAxis: {
		                title: {
		                    visible: false
		                }
		           
		            }
		        });
				var oDataset4 = new sap.viz.ui5.data.FlattenedDataset({
					'dimensions' : [ {
						'name' : 'Country',
						'value' : "{Country}"
					} ],

					'measures' : [ {
						'name' : 'Profit',
						'value' : '{profit}'
					} ],
					'data' : {
						'path' : "/tile1"
					}
				});
//				var oVizFrame4Path = jQuery.sap.getModulePath("chat.customized", "util/ChartContainerData1.json")
				var amModel4 = new sap.ui.model.json.JSONModel();
				amModel4.loadData("util/ChartContainerData1.json",null,false);
				var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid' : "primaryValues",
					'type' : "Measure",
					'values' : [ "Profit" ]
				}), feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid' : "axisLabels",
					'type' : "Dimension",
					'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject({
						'uid' : "Country",
						'type' : "Dimension",
						'name' : "Country"
					}) ]
				});
				oVizFrame4.setDataset(oDataset4);
				oVizFrame4.setModel(amModel4);
				oVizFrame4.addFeed(feedPrimaryValues4);
				oVizFrame4.addFeed(feedAxisLabels4);
				oVizFrame4.setVizType('column');
				
				/***************2nd tile*********************************************************************/
					
				var oVizFrame5 = new sap.viz.ui5.controls.VizFrame({
					id:"idoVizFrame5",
					height:"250px",
					width:"100%",
					uiConfig:{applicationSet:'fiori'}
				});
				var chartContainer = new sap.suite.ui.commons.ChartContainerContent({
		        	 content:[oVizFrame5]});
				var vbox2 = new sap.m.VBox({
					items : [
					         chartContainer  
					]
				}); 
				/*******************************/
				
				oVizFrame5.setVizProperties({
					title : {
						visible : true,
						text : 'Invoice Processing cycle time'
					},
		            valueAxis: {
		            	
		                title: {
		                    visible: false
		                }
		            },
		            categoryAxis: {
		                title: {
		                    visible: false
		                },
	                legend: {
	                    title: {
	                        visible: false
	                    }
	                }
		            }
		        });
				var oDataset5 = new sap.viz.ui5.data.FlattenedDataset({
					'dimensions' : [ {
						'name' : 'Country',
						'value' : "{Country}"
					} ],

					'measures' : [ {
						'name' : 'Profit',
						'value' : '{profit}'
					} ],
					'data' : {
						'path' : "/tile2"
					}
				});
//				var oVizFrame5Path = jQuery.sap.getModulePath("chat.customized", "util/ChartContainerData1.json")
//				var amModel5 = new sap.ui.model.json.JSONModel();
//				amModel5.loadData("util/ChartContainerData1.json",null,false);
				var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid' : "primaryValues",
					'type' : "Measure",
					'values' : [ "Profit" ]
				}), feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid' : "axisLabels",
					'type' : "Dimension",
					'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject({
						'uid' : "Country",
						'type' : "Dimension",
						'name' : "Country"
					}) ]
				});
				oVizFrame5.setDataset(oDataset5);
				oVizFrame5.setModel(amModel4);
				oVizFrame5.addFeed(feedPrimaryValues4);
				oVizFrame5.addFeed(feedAxisLabels4);
				oVizFrame5.setVizType('column');
				
				/*************************End 2nd tile******************************/
				
				
				/**********************************3rd tile******************************************/
				var listItem = new sap.m.List({
					growing:true, noDataText:"No Data Available", mode:"SingleSelectMaster",
					select:function(oEvent){that.openInbox(oEvent,that) }
				});
				
				var vBoxListItem = new sap.m.VBox({
					items : [ new sap.m.Label({text:"{category}"}),
					          new sap.m.Label({text:"{desc}"})]
				})
				var hBoxListItem = new sap.m.HBox({
					items:[new sap.m.Label({text:"{status}"}),vBoxListItem]
				});
				var stdListItem = new sap.m.CustomListItem({type:"Navigation",
					
							content:[hBoxListItem]
						});
				//stdListItem.bindProperty("title", "category");
				listItem.bindItems("/customListItem", stdListItem);
				var hdrLabel = new sap.m.Label({text:"Applications(1)"});
				
				var vBox2 = new sap.m.VBox({
					items : [
								hdrLabel,listItem
							],
					layoutData : new sap.ui.layout.GridData({
						span : "L3 M12 S12",
						linebreakL:true,
						linebreakM:true,
						linebreakS:true
					})
				});
				listItem.setModel(amModel4);
				/**********************************3rd tile END******************************************/
				var gridLayout = new sap.ui.layout.Grid({class:"sapUiSmallMarginTop",
					hSpacing:2,
						defaultSpan:"L6 M6 S12",
						content : [
						           	vbox1, vbox2, vBox2
						           ]});
				
				var label = new sap.m.Label({text:"deepak"});
				var scrollContainer = that.getView().byId("scrollContainer");
				scrollContainer.bindAggregation("content", "tileModel>/tileData", gridLayout); //binding the toolbar text
				//Till Here
				
	/*------------------------------------------------------------------------------------------------------------------------*/
				
			}
		});
	},
	openInbox : function(oEvent,that){
		//alert("hello")
		var id=oEvent.getSource().sId;
		var list=sap.ui.getCore().byId(id);
		var path = list.getSelectedContextPaths()[0].split("/")[2];
		var selectedData = oEvent.getSource().getModel().getData().customListItem[path];
		var reportId = selectedData.desc;
		var contextPath = {
				tileModelData : selectedData,
				//tilePath : tilePath,
				reportId : reportId,
				contextData : path
			};
		this.router.navTo("masterInvoice", {
			contextPath : path
		}, false);
	},
	onPress : function(oEvent){
		var tileDataPath = oEvent.getSource().getBindingContext("tileModel").getPath().split("/")[2];
		var tilePath = oEvent.getSource().getBindingContext("tileModel").getPath().split("/")[4];
		var modelData = this.getView().getModel("tileModel").getData();
		var path = this.getView().getModel("tileModel").getData().tileData[tileDataPath];
		var reportId = path.reportListDto[tilePath].reportId;
		var contextPath = {
			tileModelData : tileDataPath,
			tilePath : tilePath,
			reportId : reportId,
			contextData : path
		};
		/*var app = sap.ui.getCore().byId("app");
		var view2 = sap.ui.getCore().byId("idView2");
		app.to(view2, "slide", [modelData, path.reportId, path]);*/
		this.router.navTo("masterInvoice", {
			contextPath : JSON.stringify(contextPath)
		}, false);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf configurableui.LaunchScreen
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf configurableui.LaunchScreen
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf configurableui.LaunchScreen
*/
//	onExit: function() {
//
//	}

});