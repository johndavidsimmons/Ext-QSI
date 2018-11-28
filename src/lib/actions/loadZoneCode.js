module.exports = function(settings) {
    try {
        var zoneCode = settings.zoneCode;
        var organizationId = settings.organizationId;
        if (zoneCode && organizationId) {
            var zoneFunction = require("../helpers/getZoneFunction");
            var appendZoneDiv = function() {
                var zoneDiv = document.createElement('div');
                zoneDiv.id = zoneCode;
                document.body.appendChild(zoneDiv);
            }
            zoneFunction(zoneCode, organizationId);

            // Append empty zone div
            if (document.readyState !== 'loading') {
                appendZoneDiv();
            } else {
                document.addEventListener("DOMContentLoaded", function() {
                    appendZoneDiv();
                });
            }
            turbine.logger.log("Loaded Site Intercept Zone: " + zoneCode);
        }
    } catch (e) {
        turbine.logger.error("Could not load Intercept Zone: " + e);
    }
};