export const isPleaseRegister = 'isPleaseRegister';
export const userLocalStorage = '__user__';

export class Ls {
  public static set(key: string, data: any): void {
    if (!window.localStorage || !key) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static setInObj(key: string, data: any, property: string): void {
    let json = this.get(key);
    if (json && typeof json === 'object') {
      json[property] = data;
    } else {
      json = {};
      json[property] = data;
    }
    this.set(key, json);
  }

  public static get(key: string, property?: string): any {
    if (!window.localStorage || !key) {
      return;
    }
    const item = localStorage.getItem(key);

    if (!item) {
      return;
    }
    // return propperty in object
    const json = JSON.parse(item);
    if (property) {
      return json[property];
    }

    return json;
  }

  public static remove(key: string) {
    if (!window.localStorage || !key) {
      return;
    }
    localStorage.removeItem(key);
  }
}
