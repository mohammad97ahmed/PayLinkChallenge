import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PayLinkChallenge';

  arr = new Array<String>();
  hidden = true;
  fibHidden = true;

  ngOnInit() {
    //this.findDiv();
    
  }

  findDiv()
  {
    for (let i=1; i<21; i++) 
    {
      if (i % 3 == 0 && i % 5 == 0)
      {
        this.arr.push("FizzBuzz");
        console.log("FizzBuzz");
      }
      else if (i % 5 == 0)
      {
        this.arr.push("Buzz");
        console.log("Buzz");
      }
      else if (i % 3 == 0)
      {
        this.arr.push("Fizz");
        console.log("Fizz");
      }
      else
      {
        this.arr.push(String(i));
        console.log(i);
      }
    }
    console.log(this.arr);
    this.hidden = false;

    
  }
  
  fib_number = [0];

  test(n: number) {
    if (n < 2) return n;
    let output = (n - 1) + (n - 2);
    console.log(output);
    return output;
    
  }

  @Input() n: number = 0;
  

  getNthFib(n: string) {
    var y: number = +n;
    const fib = [0, 1];
    function getFib(y: number) {
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      if (y > nextFib) {
        fib.push(nextFib);
        getFib(y);
      }
    }
    getFib(y);
    console.log(fib);
    this.fib_number = fib;
    this.fibHidden = false;
    return fib;
  }


}

  /** Challenge 3 
   * A Class was chosen rather than an interface, as classes are easier to extends
   * and do not require all properties to be implemented should the class have other properties.
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






