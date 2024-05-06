function validate() {
  if (document.myForm.Name.value == "") {
    alert("S'il vous plait, indiquez votre nom !");
    document.myForm.Name.focus();
    return false;
  }
  if (document.myForm.Email.value == "") {
    alert("S'il vous play, indiquez votre adresse Email !");
    document.myForm.Email.focus();
    return false;
  }
  if (document.myForm.Email.value != "") {
    var emailID = document.myForm.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("S'il vous plait,Entrez une adresse Email valide!");
      document.myForm.Email.focus();
      return false;
    }
  }
  if (document.myForm.Phone.value == "") {
    alert("S'il vous plait, Indiquez votre numero!");
    document.myForm.Phone.focus();
    return false;
  }
  if (
    isNaN(document.myForm.Phone.value) ||
    document.myForm.Phone.value.length != 10
  ) {
    alert(
      "Votre numero de telephone doit avoir 10 caracteres minimum (Numuro) !"
    );
    document.myForm.Phone.focus();
    return false;
  }
  if (document.myForm.Message.value == "") {
    alert("S'il vous plait ,Laissez un message!");
    document.myForm.Message.focus();
    return false;
  } else
  alert("Merci de nous avoir contactez!🙂️")
}
