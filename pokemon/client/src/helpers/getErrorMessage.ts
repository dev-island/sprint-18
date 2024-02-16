function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (Array.isArray(error)) return error.join(", ");
  return String(error);
}

export default getErrorMessage;