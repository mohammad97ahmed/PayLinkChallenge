  /** Challenge 3 
   * A Class was chosen rather than an interface, do not require all properties 
   * to be implemented should the class have other properties.
   * This class does not need more than a single implentation, otherwise an interface
   * may be better suited.
  */

class MagicGetterSetter {
    private _isMagic! : boolean;
 
    public get magicGet() {
      if(this._isMagic){
        return this._isMagic;
      }
      else {
        throw new Error("No Magic");
      }
        
    }

    public set magicSet(magic: boolean) {
        if (this._isMagic) {
          this._isMagic = magic;
        }
        else{
          throw new Error("No Magic");
        }
        
    }

}
