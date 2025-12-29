function AC_liFormat_collections (row, i, num) {
	var result = '';
		result = result + '<img src="/i/album/' +  row[1] + '_s.jpg" class="s_ico_collection" /><b>' +  row[0] + '</b>';
		result  = result + '<br /><span>Год выпуска: ' +  row[3] + '</span><br />';
		if(row[5] == '2'){
			result  = result + '<span>Карточек в коллекции: ' +  row[4] + '</span>';
		}
		else{
			result  = result + '<span>Наклеек в коллекции: ' +  row[4] + '</span>';
		}
	return result;
}
function AC_selectItem_collections(li) {
	if(li.extra[0]>0){
		window.location.href = '/cards/' + li.extra[1] + '/';
	}	 
}

function AC_liFormat_users (row, i, num) {
	var result = '<img src="/i/users/ico/' +  row[2] + '.jpg" class="s_ico_user">' +  row[0] + '';
		result  = result + '<br /><span>' +  row[1] + '</span>';
	return result;
}
function AC_selectItem_users(li) {
	if(li.extra[1]>0){
		window.location.href = '/users/' + li.extra[1] + '/';
	}	 
}

function AC_liFormat_forum (row, i, num) {
	var result = '' +  row[0] + '';
		result  = result + '<br /><span>' +  row[2] + '</span></a>';
	return result;
}
function AC_selectItem_forum(li) {
	if(li.extra[0]>0){
		window.location.href = '/blog/post' + li.extra[0] + '/';
	}	 
}