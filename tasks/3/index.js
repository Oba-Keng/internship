function validateForm() {
  for (let i = 0; document.forms[0].symptoms.length; i++)
    if (document.forms[0].symptoms.checked == true) {
      document.forms[0].symptoms.checked = false;
      break;
    }
}
