export class DataUtils {
    static getFormattedValue(item: any, data: any): string {
      const propertyKey: string = item.label.toLowerCase().replace(' ', '_').trim();
      return data[propertyKey] || '';
    }
  }
  