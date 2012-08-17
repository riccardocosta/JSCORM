RichEdit = Backbone.View.extend({
    callback: function(){},
    initialize: function(){
	this.$el.append("<div id='SCORMRichTextEditDialog"+this.cid+"'><textarea name='SCORMRedactor"+this.cid+"' id='SCORMRedactor"+this.cid+"' style='height: 300px; width: 770px;'></textarea></div>");
        
	var that = this;
        
        jQuery("#SCORMRichTextEditDialog"+this.cid).dialog({
	    width: 800, 
	    resizable: false,
	    autoOpen: false,
	    modal: true,
	    buttons: {
		Ok: function() {
            jQuery(that.editElement).html(that.redactor.getHtml());
            jQuery( this ).dialog( "close" );
		    that.callback.call(that.callbackContext, that.redactor.getHtml());
		},
		Cancel: function() {
            jQuery( this ).dialog( "close" );
		}
	    }
	});
	this.redactor = jQuery('#SCORMRedactor'+this.cid).redactor();
    },
    show : function(title, element, callback, context){
	this.callback = callback || this.callback;
	this.callbackContext = context || this;
	this.editElement = element;
	this.redactor.setHtml(jQuery(element).html());
        
        jQuery("#SCORMRichTextEditDialog"+this.cid).dialog("option", "title", title);
        jQuery("#SCORMRichTextEditDialog"+this.cid).dialog("open");
    }
});