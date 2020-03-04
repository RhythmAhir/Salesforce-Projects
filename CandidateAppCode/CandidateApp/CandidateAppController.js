({
	destroyCandidateCMP : function(component, event, helper) {
		var canComp=component.find('canCom');
        
        canComp.destroy();
	}
})