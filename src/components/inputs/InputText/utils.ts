export const formatTextValue = (value: string | null | undefined, maxLength?: number) => {
  if (value === null || value === undefined) return '';
  let formatted = value;
  if (maxLength) formatted = formatted.substring(0, maxLength);
  return formatted;
};

export const deformatTextValue = (value: string) => {
  if (value === '') return null;
  return value;
};
