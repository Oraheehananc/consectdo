function errorHandler(error: string): string {
  return `Error: ${error}`;
}

function errorMsg(error: string): string {
  return errorHandler(`This should not happen: ${error}`);
}

function main(): void {
  const error = "Something went wrong";
  console.log(errorMsg(error));
}

main();
