export class LocalStorage<T> {
  constructor(public key: string, private initialData: T) {}

  get() {
    return JSON.parse(
      localStorage.getItem(this.key) || `${JSON.stringify(this.initialData)}`
    )
  }

  set(data: any) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }
}
