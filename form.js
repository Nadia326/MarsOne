
  function Complete()
        {
            var Elem="Name: " + document.Reg.Name.value +
                "\nSurname: " + document.Reg.Surname.value +
				"\nSex: " + document.Reg.Sex.value +
				"\nE-mail: " + document.Reg.Email.value +
                "\nPhone: " + document.Reg.Phone.value;
				if(document.Reg.Sex[0].checked){
                document.Reg.Sex[1].click();
            }else{
                document.Reg.Sex[0].click();
            }
           alert(Elem);
        }
