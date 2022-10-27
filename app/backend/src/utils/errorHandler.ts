export default function errorHandler(status:number, message: string) {
  const defaultStatus = 500;
  if (!status) {
    return ({ defaultStatus, message });
  }
  return ({ status, message });
}
