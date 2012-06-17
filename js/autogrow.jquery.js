/*!
 * Autogrow Textarea Plugin Version v2.0
 * http://www.technoreply.com/autogrow-textarea-plugin-version-2-0
 *
 * Copyright 2011, Jevin O. Sewaruth
 *
 * Date: March 13, 2011
 */
jQuery.fn.autoGrow = function(retainWidth, startSingleLine, attrCols, callback) {
    return this.each(function(){
        // Variables
        var colsDefault = 100; //this.cols;
		var cb = typeof(callback) == "function" ? callback : function(){};
		if(attrCols === true) {
			colsDefault = this.cols;
		}
        var rowsDefault = this.rows;
        
        //Functions
        var grow = function() {
            growByRef(this);
        }
        
        var growByRef = function(obj) {
            var linesCount = 0;
            var lines = obj.value.split('\n');
            
            for (var i=lines.length-1; i>=0; --i) {
                linesCount += Math.floor((lines[i].length / colsDefault) + 1);
            }

			var oldRowCount = obj.rows;
			var newRowCount = linesCount + 1;
			if(startSingleLine === true && newRowCount == 2) {
				newRowCount = 1;
			}
			obj.rows = newRowCount;
			if(oldRowCount != newRowCount) {
				cb();
			}
        }
        
        var characterWidth = function (obj){
            var characterWidth = 0;
            var temp1 = 0;
            var temp2 = 0;
            var tempCols = obj.cols;
            
            obj.cols = 1;
            temp1 = obj.offsetWidth;
            obj.cols = 2;
            temp2 = obj.offsetWidth;
            characterWidth = temp2 - temp1;
            obj.cols = tempCols;
            
            return characterWidth;
        }

		if($(this).attr("autogrow-enabled") == "yes") {
			return;
		}
		$(this).attr("autogrow-enabled", "yes");
        
        // Manipulations
		if(retainWidth !== true) {
			this.style.width = "100%";
		}
        this.style.height = "auto";
        this.style.overflow = "hidden";
        //this.style.width = ((characterWidth(this) * this.cols) + 6) + "px";
        this.onkeyup = grow;
        this.onfocus = grow;
        this.onblur = grow;
        growByRef(this);
    });
};
