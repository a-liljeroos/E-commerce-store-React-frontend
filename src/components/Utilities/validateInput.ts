const lettersAndSpacesOnly = /^[a-zA-Z\s]+$/;

export function validateSearchInput(input: string): boolean {
  if (!lettersAndSpacesOnly.test(input)) {
    return false;
  }
  return true;
}
