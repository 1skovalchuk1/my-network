
type TList<T> = [T, TList<T>] | null

export class List<T> {
  private _list:TList<T>

  constructor(list:TList<T> = null) {
    this._list = list
  }

  add(value:T) {
    this._list = [value,this._list]
  }

  head():T | null {
    return this._list ? this._list[0] : null
  }

  tail():TList<T> {
    return this._list ? this._list[1] : null
  }

  length():number {
    let i = 0
    if (this._list) {
      for (let _ of this) {i++}
    }
    return i
  }

  any(argF:(i:T) => boolean) {
    if (this._list) {
      for (let m of this) {
        if (argF(m)) {return true}
      }
    }
    return false
  }

  [Symbol.iterator]():ListIterator<T> {
    return new ListIterator(this._list)
  }
}

class ListIterator<T> implements Iterator<T> {
   
  private done: boolean;
  private value: TList<T>;

  constructor(private list: TList<T>) {
    this.done = false
    this.value = list
  }

  next(): IteratorResult<T, undefined> {
    if (this.value) {
      const value = this.value[0]
      this.value = this.value[1]
      return { done: false, value };
    }
    return {done: true, value: undefined}
  }

 }