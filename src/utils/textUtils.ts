export function toCamelCase(str: string) {

  // https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case#2970667

  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
