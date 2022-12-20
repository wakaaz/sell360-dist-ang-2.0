export class ComplimentoryProdut {
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _qty: number;
  public get qty(): number {
    return this._qty;
  }
  public set qty(v: number) {
    this._qty = v;
  }
}
