Manual Test Cases <br>
Flow : Login -> Add to cart -> Checkout -> Logout

| Test Case ID | Scenario | Test Title | Steps | Expected Result | Actual Result | Status |
|-------------|----------|------------|-------|-----------------|---------------|--------|
| 01 | Login Page | Verify that login should work with valid username and password | 1. Open SauceDemo website<br/>2. Enter valid username<br/>3. Enter valid password<br/>4. Click Login | Login should work with valid credentials | Login is working with Valid Credential | Pass |
| 02 | Login Page | Verify that the login shouldn't work with the invalid user and valid password | 1. Open SauceDemo website<br/>2. Enter invalid username and valid password<br/>3. Click Login | Login should not work if one of the credentials is invalid | Login is not working if one of the credentials is invalid | Pass |
| 03 | Login Page | Verify that the login shouldn't work with the valid user and invalid password | 1. Open SauceDemo website<br/>2. Enter valid username and invalid password<br/>3. Click Login | Login should not work if one of the credentials is invalid | Login is not working if one of the credentials is invalid | Pass |
| 04 | Login Page | Verify that the login shouldn't work with empty user and password | 1. Open SauceDemo website<br/>2. Keep username and password empty<br/>3. Click Login | Login should not work if one of the credentials is empty | Login is not working with empty credentials | Pass |
| 05 | Products Page | Verify that product can be added to cart | 1. Login to application<br/>2. Click Add to Cart on any product | Product should be added and cart count should be 1 | Product was added and cart count showed 1 | Pass |
| 06 | Cart Page | Verify that added product is displayed in cart | 1. Login to application<br/>2. Add product to cart<br/>3. Click on cart icon | Added product should be visible in cart | Added product was visible in cart | Pass |
| 07 | Checkout Page | Verify that user can complete checkout successfully | 1. Login to application<br/>2. Add product to cart<br/>3. Go to cart page<br/>4. Click Checkout<br/>5. Enter checkout details<br/>6. Click Finish | Order should be placed successfully | Order was placed and confirmation message was displayed | Pass |
| 08 | Menu | Verify that user can logout successfully | 1. Login to application<br/>2. Open menu<br/>3. Click Logout | User should be logged out and redirected to login page | User was logged out and redirected to login page | Pass |
| 09 | Cart Page | Verify that checkout is blocked when cart is empty | 1. Login to application<br/>2. Go to cart page without adding product<br/>3. Click Checkout | User should not be allowed to checkout | Application did not allow checkout | Pass |
| 10 | Products Page | Verify that multiple products can be added to cart | 1. Login to application<br/>2. Add two different products to cart | Cart count should be 2 | Cart count was updated to 2 | Pass |
| 11 | Cart Page | Verify that product can be removed from cart | 1. Login to application<br/>2. Add product to cart<br/>3. Go to cart page<br/>4. Click Remove | Product should be removed from cart | Product was removed from cart | Pass |


<br>

2: Automated Test Cases
-> I have automated only 2 test cases based on my current knowledge but i can do more if i get time to practice.<br>
TC_01 - Valid login<br>
TC_02 - Invalid Login 

