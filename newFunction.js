getControlErr(form: FormGroup, control, error){
    if (form.controls[control] && form.controls[control].errors && form.controls[control].errors[error]){
      console.log('entra if', form.controls[control].errors, control);
      return true
    } else {
      console.log('entra else', control);
      return false;
    }
  }