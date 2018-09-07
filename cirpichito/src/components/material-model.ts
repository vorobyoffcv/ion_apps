export class MaterialModel {
    constructor(
      public id: number,
      public title: string, 
      public note: string, 
      public length: number, 
      public height: number, 
      public depth: number, 
      public joint: number

    ){}

//    fillFrom(data: MaterialModel) 
//    {this = Object.assign(this, data);}

//public    fillFrom(obj: MaterialModel){
  //    for (key in obj){
    //    this[key]=obj[key];
    //}
//	}
}