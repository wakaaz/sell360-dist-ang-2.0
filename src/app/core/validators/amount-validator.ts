import { FormGroup } from '@angular/forms';
import { SecondaryOrder } from '../../modules/orders/primary-orders/_models/secondaryOrder.model';

// custom validator to check that two fields match
export function MustMatch(controlName: string, totalAmount: number): any {
  const order = SecondaryOrder.getInstance;
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    // const matchingControl = formGroup.controls[matchingControlName];
    // debugger;
    if (control.errors && !control.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails

    if (control.value <= 0) {
      control.setErrors({ equalZero: true });
      return;
    }

    if (parseInt(control.value) > parseInt(order.totalDueAmount.toString())) {
      control.setErrors({ mustMatch: true });
    } else {
      control.setErrors(null);
    }
  };
}
