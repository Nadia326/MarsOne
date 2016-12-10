function check(){
	 var res = '';
	 var notes = '';

     var name = document.Reg.Name.value;
     var surname = document.Reg.Surname.value;
     var mail = document.Reg.Email.value;
     var phone = document.Reg.Phone.value;
  //требование к имени
	 var pattern =  /[А-Яа-я]/;
	 var patternLanguage = /[A-Za-z]/;
	 var patternGap = /\s/;
	 var patternDefis = /\-/;
	 var patternDog = /\@/;
	 var patternNumber = /[0-9]/;
	 var patternSpecial = /[\&\*\%\$\+\:\#\)\(\)\№]/;
	 var patternDot = /\./;
	 
	// имя 
	 var nameCheckedNumber = patternNumber.test(name);
	 var nameCheckedSpecial = patternSpecial.test(name);
	 var nameCheckedDot = patternDot.test(name); 
	
	if(name.length !== 0){
		if(nameCheckedNumber){res = res + 'Don\'t use any numbers in your name. '; }
			if(nameCheckedDot){ res = res + 'Don\'t use any dots in your name. ';}
				if(nameCheckedSpecial){res = res + "Don\'t use any special symbols in your name. ";}
	}
	else if(name.length == 0){
		notes = notes + 'ENTER YOUR NAME. ';
	}

	//фамилия
	 var surnameCheckedNumber = patternNumber.test(surname);
	 var surnameCheckedSpecial = patternSpecial.test(surname);
	 var surnameCheckedDot = patternDot.test(surname);

	 	if(surname.length !== 0){
		 	if(surnameCheckedNumber){res = res + 'Don\'t use any numbers in your surname. '; }
				if(surnameCheckedDot){ res = res + 'Don\'t use any dots in your surname. ';}
					if(surnameCheckedSpecial){res = res + "Don\'t use any special symbols in your surname. ";}
	 	}
	 	else{
	 		notes = notes + 'ENTER YOUR SURNAME. ';
	 	}

	 var mailCheckedpattern = pattern.test(mail);
	 var mailCheckedpatternLanguge = patternLanguage.test(mail);
	 var mailCheckedpatternGap = patternGap.test(mail);
	 var mailCheckedNumber = patternNumber.test(mail);
	 var mailCheckedSpecial = patternSpecial.test(mail);
	 var mailCheckedDot = patternDot.test(mail);
	 var mailCheckedDog = patternDog.test(mail);

	 if(mail.length !== 0) {
		if(!patternLanguage.test(mail) || pattern.test(mail)){	res = res + 'Change language when you enter your mail. '}
		if(!patternDog.test(mail)){ res = res + 'You\'ve forgot to write \'\@\'. ';}
		if(!mailCheckedDot){res = res + 'It isn\'t an e-mail. ';}
		if(mail.lastIndexOf("@") > mail.lastIndexOf(".")){res = res + 'It isn\'t an e-mail ';}
	 }
	 else{
	 	notes = notes + 'ENTER YOUR E-MAIL. ';
	 }
	 //телефон
	 var phoneCheckedpattern = pattern.test(phone);
	 var phoneCheckedpatternLanguge = patternLanguage.test(phone);
	 var phoneCheckedpatternGap = patternGap.test(phone);
	 var phoneCheckedNumber = patternNumber.test(phone);
	 var phoneCheckedSpecial = patternSpecial.test(phone);
	 var phoneCheckedDot = patternDot.test(phone);
	 var phoneCheckedDog = patternDog.test(phone);

	 if(phone.length > 0 && phone.length < 10){
	 	if(phoneCheckedpattern || phoneCheckedpatternLanguge || phoneCheckedSpecial || phoneCheckedDot || phoneCheckedDog ){ 
	 		res = res + 'It isn\'t a telephone number';
		 }
	 }
	 else if(phone.length == 0){
	 	notes = notes + 'ENTER YOUR PHONE. ';
	 }

	document.getElementById('result').innerHTML = res + '</br>' + notes;
	
	if (notes == '' && res == '') return true;
	return false;
}

    