sap.ui.define([
		"oasis/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("oasis.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);