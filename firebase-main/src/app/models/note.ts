export class Notes {
    constructor(
        public name: string,
        public content: string
    ){}
}
export class UpdateNote {
  constructor(
    public id: string,
    public name: string,
    public content: string
  ) {}
}

export class Addnote {
  constructor(
    public name: string,
    public content: string
  ) {}
}