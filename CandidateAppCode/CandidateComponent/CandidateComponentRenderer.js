({
	unrender: function () {
        this.superUnrender();
       // alert();
        // do custom unrendering here
    },
    afterRender:function(cmp,helper){
        this.superAfterRender();
       // cmp.destroy();
        //alert();
    }
})