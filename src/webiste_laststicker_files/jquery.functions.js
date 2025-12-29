 // снять - поставить все галки
 $(document).ready( function() {
	        // Выбор всех
	        //При клике на ссылку "Все", активируем checkbox
	        $("a[href='#select_all']").click( function() {
	           $("#" + $(this).attr('rel') + " input:checkbox:enabled").attr('checked', true);
	            return false;
	        });
	 
        // Ни одного
	        $("a[href='#select_none']").click( function() {
	             $("#" + $(this).attr('rel') + " input:checkbox").attr('checked', false);
	            return false;
	        });
	    });

		
//Вставка текста на место курсора
jQuery.fn.extend({
    insertAtCaret: function(myValue){
        return this.each(function(i) {
            if (document.selection) {
                // Для браузеров типа Internet Explorer
                this.focus();
                var sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
            }
            else if (this.selectionStart || this.selectionStart == '0') {
                // Для браузеров типа Firefox и других Webkit-ов
                var startPos = this.selectionStart;
                var endPos = this.selectionEnd;
                var scrollTop = this.scrollTop;
                this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
                this.focus();
                this.selectionStart = startPos + myValue.length;
                this.selectionEnd = startPos + myValue.length;
                this.scrollTop = scrollTop;
            } else {
                this.value += myValue;
                this.focus();
            }
        })
    }
});