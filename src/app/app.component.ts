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

  /**Challenge 1 - FizzBuzz */

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
  
  /**Challenge 2 - Fibonacci
   * Retrieve Nth term form Fibonacci sequence
   */

  fib_number = [0];

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







