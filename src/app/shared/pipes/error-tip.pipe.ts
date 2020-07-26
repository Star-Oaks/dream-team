import { Pipe, PipeTransform } from '@angular/core';
import { ApiConfigService } from '@app/api-config.service';
import { ValidationErrorCode } from '@app/core/validators/validation-error-codes.model';
import { ValidationErrors } from '@angular/forms';

interface ErrorsMap extends ValidationErrors {
  apiValidation?: string;
  required?: boolean;
  email?: boolean;
  password?: boolean;
  mismatchPassword?: boolean;
  minlength?: {
    requiredLength: number;
  };
  maxlength?: {
    requiredLength: number;
  };
  mark?: boolean;
  pattern?: {};
}

@Pipe({
  name: 'errorTip',
})
export class ErrorTipPipe implements PipeTransform {
  constructor(private config: ApiConfigService) {}

  transform(errors: ErrorsMap, attribute = 'Field'): string {
    if (!errors) {
      return null;
    }
    if (errors.apiValidation) {
      return errors.apiValidation;
    }
    if (errors.required) {
      return this.getErrorMessage(ValidationErrorCode.Required, attribute);
    }
    if (errors.minlength) {
      return this.getErrorMessage(ValidationErrorCode.StringMinLength, attribute).replace('{min}', errors.minlength.requiredLength.toString());
    }
    if (errors.maxlength) {
      return this.getErrorMessage(ValidationErrorCode.StringMaxLength, attribute).replace('{max}', errors.maxlength.requiredLength.toString());
    }
    if (errors.min) {
      return this.getErrorMessage(ValidationErrorCode.Min, attribute).replace('{min}', errors.min.min.toString());
    }
    if (errors.max) {
      return this.getErrorMessage(ValidationErrorCode.Max, attribute).replace('{max}', errors.max.max.toString());
    }
    if (errors.email) {
      return this.getErrorMessage(ValidationErrorCode.Email, attribute);
    }
    if (errors.mismatchPassword) {
      return this.getErrorMessage(ValidationErrorCode.MismatchPassword, attribute);
    }
    if (errors.pattern) {
      return this.getDefaultErrorMessage(attribute);
    }

    return this.getDefaultErrorMessage(attribute);
  }

  getErrorMessage(code: number, attribute: string): string {
    return this.config.getError(code, attribute) || this.getDefaultErrorMessage(attribute);
  }

  getDefaultErrorMessage(attribute: string) {
    return `${attribute} is invalid`;
  }
}
