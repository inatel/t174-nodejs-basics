export class BMIService {
  static getIndex(weight: number, height: number) {
    return weight / (height * height);
  }
}
