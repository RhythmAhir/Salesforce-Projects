({
    createCandidate : function(component, event, helper) {
        var canEvent=component.getEvent("cEvent");
        var candidate=new Object();
        candidate.Name=component.get('v.cName');
        canEvent.setParams({"candidate":candidate});
        console.log(canEvent.getParam('candidate').Name);

        canEvent.fire();
    }
})
