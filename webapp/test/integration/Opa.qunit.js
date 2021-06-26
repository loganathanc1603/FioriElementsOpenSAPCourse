sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sap/trvalelistreport/travellistreport/test/integration/pages/MainListReport' ,
        'com/sap/trvalelistreport/travellistreport/test/integration/pages/MainObjectPage',
        'com/sap/trvalelistreport/travellistreport/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sap/trvalelistreport/travellistreport') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);