"use strict";



// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
        it("receives a penny and is expected to increase cash tendered by 1 cent", function() {
            // Remember, you can arrange, act, and assert...start small
            //Arrange
            let changeHandler = new ChangeHandler(50);
            //Assert & Act
            changeHandler.insertCoin('penny');
            expect(changeHandler.cashTendered).toBe(1);
        });
    
        it("receives a nickel and is expected to increase cash tendered by 5 cents", function() {
          //Arrange
          let changeHandler = new ChangeHandler(50);
          //Assert & Act 
          changeHandler.insertCoin('nickel');
          expect(changeHandler.cashTendered).toBe(5);
        });
    
        it("receives a dime and is expected to increase cash tendered by 10 cents", function() {  
          //Arrange
          let changeHandler = new ChangeHandler(50);
          //Assert & Act
          changeHandler.insertCoin('dime');
          expect(changeHandler.cashTendered).toBe(10);
        });
    
        it("receives a quarter and is expected to increase cash tendered by 25 cents", function() {  
          //Arrange
          let changeHandler = new ChangeHandler(50);
          //Assert & Act
          changeHandler.insertCoin('quarter');
          expect(changeHandler.cashTendered).toBe(25);
        });

        it("checks to see if payment is sufficient", function() {  
          //Arrange
          let changeHandler = new ChangeHandler(25);  
          //Assert & Act
          changeHandler.insertCoin('quarter');

          expect(changeHandler.isPaymentSufficient()).toBe(true);
              });
        

        it("checks to see if payment is sufficient - multiple coins", function() {  
            //Arrage
            let changeHandler = new ChangeHandler(50);  
            //Assert & Act
            changeHandler.insertCoin('quarter');
            changeHandler.insertCoin('dime');
            changeHandler.insertCoin('dime');
            changeHandler.insertCoin('nickel');

            expect(changeHandler.isPaymentSufficient()).toBe(true);
              });


              it("gives change", function() {
                //Arrange
                let changeHandler = new ChangeHandler(56);
                //Assert
                expect(changeHandler.giveChange()).toEqual({quarters: 2, dimes: 0,nickels: 1, pennies: 1
                });
            
    }); 

});