class Guitar {
  constructor(
    public make: string,
    public model: string,
    public color: string,
    public year: number
  ) {}
}

class GuitarCollector {
  guitars: Guitar[]

  constructor() {
    this.guitars = [];
  }

  // Create =============================================
  addGuitar(guitarInfo: Guitar) {
    const newGuitar = new Guitar(
      guitarInfo.make,
      guitarInfo.model,
      guitarInfo.color,
      guitarInfo.year
    );

    this.guitars.push(newGuitar);
  }

  // Read ================================================
  getGuitarByIdx(idx: number): Guitar {
    const foundGuitar = this.guitars[idx];

    return foundGuitar;
  }

  // Read ================================================
  getAllGuitars(): Guitar[] {
    return this.guitars;
  }

  // Update ==============================================
  updateGuitarByIdx(idx: number, updateObj: object): Guitar {
    const updatedGuitar = {...this.guitars[idx], ...updateObj};
    this.guitars[idx] = updatedGuitar;

    return this.guitars[idx];
  }

  // Delete ==============================================
  deleteGuitarByIdx(idx: number): Guitar[] {
    this.guitars.splice(idx, 1);

    return this.guitars;
  }
}

export default GuitarCollector;