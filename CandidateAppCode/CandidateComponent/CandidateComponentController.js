({
	getCandidates : function(component, event, helper) {
		
        var action=component.get('c.retrieveCandidates');
        
        //action.setParams({can:'Test Candidate'});
        
        action.setCallback(this,function(result){
            console.log(result.getReturnValue());
            component.set('v.candidates',result.getReturnValue());
        });
        
        $A.enqueueAction(action);
        
	},
    getLimitedCandidates : function(component, event, helper) {
		
        var action=component.get('c.retrieveCandidates');
        
        action.setParams({limitCan:'5'});
        
        action.setCallback(this,function(result){
            console.log(result.getReturnValue());
            component.set('v.candidates',result.getReturnValue());
        });
        
        $A.enqueueAction(action);
        
	},
    destroyCandidateCMP : function(component, event, helper) {
        
        alert(event.getSource().get('v.title'));
		//var canComp=component.find('canCom');
        
       // component.destroy();
    },
    handleCEvent:function(cmp,event,helper){
        alert();
        var message=event.getParam("candidate");
        console.log(message);

    }
})