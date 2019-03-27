export class Keg {
  public pourVolumn: number = 1
  public kegVolumn: number = 124

  constructor (
    public brand: string,
    public name: string,
    public price: number,
    public alcoholContent: number,
    public type: string
  ){}


}
