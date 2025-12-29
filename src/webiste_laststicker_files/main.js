var auth_err_mess = '<a href="/login/">Авторизуйтесь</a>, пожалуйста. Eсли вы не зарегистрированы, <a href="/reg/">зарегистрируйтесь</a>!';

function unpopp(){
	poppDiv=document.getElementById('poppDiv');if(poppDiv){poppDiv.parentNode.removeChild(poppDiv);poppDiv=false;}

		var elements = document.getElementsByTagName('select');
		for(var i = 0; i < elements.length; i++) {
			if(elements[i].style.display=='none') elements[i].style.display='inline';
		}	

}
function popp(id, text, type){
	unpopp();
	
	if(type==0){
		document.getElementById('post_action'+id).style.display='none';
	}	

	document.getElementById('enclosure'+id).innerHTML+='<div id="poppDiv" class="inline-warning"><div><p>'+text+'</p><a href="javascript:unpopp(1)"><img src="/i/close.gif" class="close" width="22" height="22" alt="Close" /></a></div></div>';

	return(false);
}


function show_block(div_id) {
	block=document.getElementById(div_id);
	if(block.style.display=='none')
		block.style.display='block';
	else
		block.style.display='none';	
}


function show_hide_block(div_id_1, div_id_2) {
	show_block=document.getElementById(div_id_1);
	hide_block=document.getElementById(div_id_2);
	hide_block.style.display='block';
	show_block.style.display='none';	
}


function check_form(input_id, input_type) {
	
	var input_text=document.getElementById(input_id);
	var note_text=document.getElementById('note_'+input_id);
	var text_value=input_text.value;
	
	if(input_type=='password2'){ //check confirm passmord
		var pass=document.getElementById('f_password').value;
		var pass2=document.getElementById('f_password2').value;
		
		text_value=0; 
		if(pass.length>0 && pass2.length>5){
			if(pass2==pass) text_value=1;
			else text_value=2;
		}
	}
	if(input_type=='password')
		document.getElementById('note_f_password2').innerHTML='';
		
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='y') {
					note_text.innerHTML=response.mess;
					note_text.className=response.classname;			
				}	
				else if(response.answer=='n') {
					note_text.innerHTML=response.mess;
					note_text.className=response.classname;					
				}				


			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};
	
	req.open('POST', '/inc/site/ajax/check_form.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("text=" + encodeURIComponent(text_value) + "&type=" + encodeURIComponent(input_type));
}


function new_collections_user_rel(c_id) {
	
	var mess_area=document.getElementById('new_collections_user');

	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if (response.answer=='y') {
					mess_area.innerHTML=response.mess;
				}
			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/new_collections_user_rel.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("coll_id=" + encodeURIComponent(c_id));
}



function write_msg(user_id_to1) {
	
	var msg_text=document.getElementById('write_msg_text').value;
	var butt=document.getElementById('write_msg_buttom');	
	butt.disabled='disabled';

	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='err_empty') {
					document.getElementById('write_msg_mess').innerHTML=response.mess;
					document.getElementById('write_msg_mess').className='err';
					document.getElementById('write_msg_text').value='';					
					butt.disabled='';					
				}	
				else if(response.answer=='err') { 
					document.getElementById('write_msg_mess').innerHTML=response.mess;
					document.getElementById('write_msg_mess').className='err';
					butt.disabled='';
				}	
				else if(response.answer=='time') {
					document.getElementById('write_msg_mess').innerHTML=response.mess;
					document.getElementById('write_msg_mess').className='err';					
					butt.disabled='';					
				}	
				else if(response.answer=='n') {
					document.getElementById('write_msg_form').innerHTML='';
				}	
				else if(response.answer=='y') {
					document.getElementById('write_msg_mess').innerHTML=response.mess;
					document.getElementById('write_msg_mess').className='note';
					document.getElementById('write_msg_form').innerHTML='';
				}


			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/write_msg.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("user_id_to=" + encodeURIComponent(user_id_to1) + "&msg_text=" + encodeURIComponent(msg_text));
}


function write_mark(user_id_to1, mark_val) {
	
	var mark_text='';

		if(mark_val=='1' || mark_val=='2' || mark_val=='3' || mark_val=='4' || mark_val=='5' || mark_val=='6'){
			if(mark_val=='1' || mark_val=='2' || mark_val=='3'){
				mark_text=document.getElementById('write_mark_text').value;
			}

	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
						if(response.answer=='err') {
							document.getElementById('mymark_note').className='err';					
							document.getElementById('mymark_note').innerHTML=response.note;
						}	
						else if(response.answer=='n') {
							document.getElementById('mymark_note').className='err';					
							document.getElementById('mymark_note').innerHTML=response.note;
							document.getElementById('mymark_form').innerHTML=response.mark_form;
							document.getElementById('mymark_view').innerHTML=response.mark_view;
						}	
						else if(response.answer=='y') { 
							document.getElementById('mymark_note').className='note';					
							document.getElementById('mymark_note').innerHTML=response.note;
							document.getElementById('mymark_form').innerHTML=response.mark_form;
							document.getElementById('mymark_view').innerHTML=response.mark_view;
						}


			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/write_mark.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("user_id_to=" + encodeURIComponent(user_id_to1) + "&mark_text=" + encodeURIComponent(mark_text) + "&mark_val=" + encodeURIComponent(mark_val));
				
  }		
}


function hide_talk(u_id, t_type) {
	
	var talk_=document.getElementById('talk_'+u_id);
	var talk_text_=document.getElementById('talk_text_'+u_id);
	var talk_hide_=document.getElementById('talk_hide_'+u_id);
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='y') {
					talk_.className=response.mess;
					talk_text_.innerHTML=response.mess_text;
					talk_hide_.innerHTML=response.mess_hide;
				}					

			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/hide_talk.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("user_id=" + encodeURIComponent(u_id) + "&type=" + encodeURIComponent(t_type));

}



function region_loadform(type) {
	if(type=='country')
		var c_id=document.getElementById('f_country_id').value;
	else if(type=='region')
		var r_id=document.getElementById('f_region_id').value;
	else if(type=='city')
		var t_id=document.getElementById('f_city_id').value;
	
		
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(type=='country'){
					document.getElementById('region_block').innerHTML=response.t_region;
					document.getElementById('city_block').innerHTML=response.t_city;
				}
				else if(type=='region'){
					document.getElementById('city_block').innerHTML=response.t_city;
				}
				/*else if(type=='city'){
					document.getElementById('city_block_new').innerHTML=response.t_city_new;
				}*/
				$("#note_f_country_id").html("");
				$("#note_f_region_id").html("");
				$("#note_f_city_id").html("");


			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};
	
	req.open('POST', '/inc/site/ajax/region_loadform.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("country_id=" + encodeURIComponent(c_id) + "&region_id=" + encodeURIComponent(r_id) + "&city_id=" + encodeURIComponent(t_id));
}


function region_loadform_swap(type) {
	if(type=='country')
		var c_id=document.getElementById('f_country_id').value;
	else if(type=='region')
		var r_id=document.getElementById('f_region_id').value;
	else if(type=='city')
		var t_id=document.getElementById('f_city_id').value;

	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(type=='country'){
					document.getElementById('region_block').innerHTML=response.t_region;
					document.getElementById('city_block').innerHTML=response.t_city;
				}
				else if(type=='region'){
					document.getElementById('city_block').innerHTML=response.t_city;
				}
				/*else if(type=='city'){
					document.getElementById('city_block_new').innerHTML=response.t_city_new;
				}*/
				$("#note_f_country_id").html("");
				$("#note_f_region_id").html("");
				$("#note_f_city_id").html("");			


			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/region_loadform_swap.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("country_id=" + encodeURIComponent(c_id) + "&region_id=" + encodeURIComponent(r_id) + "&city_id=" + encodeURIComponent(t_id));
}


function user_memo(user_id, type) {
	
	var memo_area=document.getElementById('user_memo_area'+user_id);
	var memo_mess=document.getElementById('user_memo_mess'+user_id);

	var memo_txt='';
	if(type=='1') memo_txt=document.getElementById('user_memo_txt'+user_id).value;
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='n') {
					memo_mess.className='err';
					memo_mess.innerHTML=response.mess;
				}	
				else if(response.answer=='y') {
					memo_mess.className='note';
					memo_mess.innerHTML=response.mess;
					memo_area.innerHTML=response.ar;
				}

			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};
	
	req.open('POST', '/inc/site/ajax/user_memo.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("u_id=" + encodeURIComponent(user_id) + "&t=" + encodeURIComponent(type) + "&txt=" + encodeURIComponent(memo_txt));
}



function add_to_user_list(u_id, u_type) {
	
	var msg_=document.getElementById('bw_add_user_list');
	var msg_text_=document.getElementById('bw_add_user_list_text');
	var msg_change_=document.getElementById('bw_add_user_list_change');
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='y') { 
					msg_text_.innerHTML=response.mess_text;
					msg_change_.innerHTML=response.mess_change;
				}	
				else if(response.answer=='n') {
					msg_change_.innerHTML=response.mess_change;
				}

			} catch (e) {
				console.error('JSON parsing error:', e);
			}
		}
	};
	
	req.open('POST', '/inc/site/ajax/add_to_user_list.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("user_id=" + encodeURIComponent(u_id) + "&type=" + encodeURIComponent(u_type));
}




function print_card_list (arr, cat_nick, div_id ,s1, s2)
{
	var len=arr[0].length;
	var cid='';
	var str='';
	var node=div_id;
	var st='';
	var scan='';
	
	for(i = 0; i < len; i++)
	{
		cid=arr[0][i];
		
		if(i>0) str+=', ';
		
		if(arr[1][i]=='0' && arr[3][i]=='0') {st='';}
		else if(arr[1][i]=='0' && arr[3][i]!='0') {st=' class="sel_b"';}
		else if(arr[1][i]!='0' && arr[3][i]!='0') {st=' class="sel sel_b"';}
		else if(arr[1][i]!='0' && arr[3][i]=='0') {st=' class="sel"';}
		
		if (arr[4][i]=='1') scan=' rel="'+cid+'"';
		else scan='';
		
		str+='<a href="/cards/'+cat_nick+'/'+cid+'/"'+st+scan+'>'+cid+'</a>';	
			
		if(arr[2][i]>1) str+='<span>('+arr[2][i]+')</span>';
	}	
	
	document.getElementById(node).innerHTML=s1+str+s2;
}



//загрузка удаленной страницы
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}




function email (login, serv)
{
	if(serv=="") serv="laststicker.com";
	eml = login +  "@" + serv;
	return eml;
}


function mylo (login, serv)
{
 document.write (email(login, serv));
}

function namylo (login, serv, subj)
{
eml = "mailto:" + email(login, serv);
re= /\s/;
while(subj.search(re)>0)
subj=subj.replace(re, "%20");

if (subj != "") eml += "?subject=" + subj;
window.location.href = eml;
} 



function setCookie(cookieName, cookieValue)
{
	cookieValue=escape(cookieValue);
	document.cookie=cookieName+"="+cookieValue+"; path=/";

}





function form_validate(form_id) {
	var str_full = "";
	var elements = document.getElementById(form_id).getElementsByTagName('input');
	// цикл по всем элементам формы
	for(var i = 0; i < elements.length; i++) {
	// проверяем, имеется ли образец
		var str = "";     
		var pattern = elements.item(i).getAttribute('pattern');
		var value = elements.item(i).value;     
		var element_id=elements.item(i).getAttribute('id');
		var noteDiv=document.getElementById('note_'+element_id);
		if (pattern != null && pattern != "") {
			// валидация значения элемента, используя образец      
			var offendingChar = value.match(pattern);      
			// если встечен недопустимый символ или элемент оставлен пустым 
	    	if(offendingChar != null || value.length == 0) {
				// показываем сообщения об ошибках
				str += elements.item(i).getAttribute('errorMsg') + "\n" +        "Найдено недопустимое значение: '" + offendingChar + "' \n";
			}
		}
		//проверяем длинну строки
		var min_reqs = elements.item(i).getAttribute('min_reqs');  
		var max_reqs = elements.item(i).getAttribute('max_reqs');  
		if (min_reqs && max_reqs) {
			if (value.length < min_reqs || value.length > max_reqs) {
				str += elements.item(i).getAttribute('errorMsg') + '\n';
			}
		}		
		if (str != "")		{
			if(noteDiv != null) noteDiv.innerHTML=str;
			// подсказка пользователю путем смены цвета фона; здесь красный
			elements.item(i).style.background = "#ffccff";       
		}	
		str_full+=str;
	}
	if (str_full != "") {
		// не посылаем форму
		alert("ERROR ALERT!!\n" +str_full);
		return false;
	} 
	else {
		// значения формы правильны; посылаем    
		document.getElementById(form_id).submit();
		return true;  
	}
}


function input_validate(id) {
	var str = "";
	// проверяем, имеется ли образец
	var elem=document.getElementByID(id);
	var noteDiv=document.getElementByID('note_'+id);
	var pattern = elem.getAttribute('pattern');
	var value = elem.value;     
	if (pattern != null) {
		// валидация значения элемента, используя образец      
		var offendingChar = value.match(pattern);      
		// если встечен недопустимый символ или элемент оставлен пустым 
    	if(offendingChar != null || value.length == 0) {
			// показываем сообщения об ошибках
			str += elem.getAttribute('errorMsg') + "\n" +        "Найдено недопустимое значение: '" + offendingChar + "' \n";
			// подсказка пользователю путем смены цвета фона; здесь красный
			elem.style.background = "red";       
		}
	}
	//проверяем длинну строки
	var min_reqs = elem.getAttribute('min_reqs');  
	var max_reqs = elem.getAttribute('max_reqs');  
	if (min_reqs != null && max_reqs != null) {
		if (value < min_reqs || value > max_reqs) {
			str += elem.getAttribute('errorMsg') + '\n';
		}
	}		
	noteDiv.innerHtml="aaaa";	
	if (str != "") {
		// не посылаем форму
		noteDiv.innerText=str;
		return false;
	} 
	else {
		// значения формы правильны; посылаем    
		return true;  
	}
}

function user_reaction(user_id, type) {
	
	var r_area=document.getElementById('user_reaction_area'+user_id);
	var r_mess=document.getElementById('user_reaction_mess'+user_id);

	var txt='';
	var tid=0;
	if(type=='1') txt=document.getElementById('user_reaction_txt'+user_id).value;
	
	if(type=='1' || type=='2')
	{
		tid=document.getElementById('user_reaction_type'+user_id).value;
	}

	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			try {
				var response = JSON.parse(req.responseText);
				
				if(response.answer=='err') { 
					r_mess.className='err';
					r_mess.innerHTML=response.mess;
				}	
				else if(response.answer=='n') {
					r_mess.className='err';
					r_mess.innerHTML=response.mess;
				}	
				else if(response.answer=='y') { 
					r_mess.className='note';
					r_mess.innerHTML=response.mess;
					r_area.innerHTML=response.ar;
				}

			} catch (e) {
				console.error('Error parsing JSON:', e);
			}
		}
	};

	req.open('POST', '/inc/site/ajax/user_reaction.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("u_id=" + encodeURIComponent(user_id) + "&tid=" + encodeURIComponent(tid) + "&txt=" + encodeURIComponent(txt) + "&t=" + encodeURIComponent(type));
}