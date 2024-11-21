jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"oasis/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"oasis/test/integration/pages/Worklist",
		"oasis/test/integration/pages/Object",
		"oasis/test/integration/pages/NotFound",
		"oasis/test/integration/pages/Browser",
		"oasis/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "oasis.view."
	});

	sap.ui.require([
		"oasis/test/integration/WorklistJourney",
		"oasis/test/integration/ObjectJourney",
		"oasis/test/integration/NavigationJourney",
		"oasis/test/integration/NotFoundJourney",
		"oasis/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
