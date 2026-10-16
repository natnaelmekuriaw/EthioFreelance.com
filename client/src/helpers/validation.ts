export interface FieldRules {
  required?: boolean;
  min?: number;
}

export function validateField(
  value: string | undefined,
  rules: FieldRules = {},
  requiredMessage = "Required"
): string | undefined {
  if (rules.required && !value) {
    return requiredMessage;
  }

  if (rules.min && (value?.length ?? 0) < rules.min) {
    return `Minimum length is ${rules.min}`;
  }
}
