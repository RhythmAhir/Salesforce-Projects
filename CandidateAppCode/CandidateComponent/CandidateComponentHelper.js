({
	getLimitedCandidates : function(component, event, helper) {
		
        var action=component.get('c.retrieveCandidates');
        
        action.setParams({limitCan:'5'});
        
        action.setCallback(this,function(result){
            console.log(result.getReturnValue());
            component.set('v.candidates',result.getReturnValue());
        });
        
        $A.enqueueAction(action);
        
	}
})