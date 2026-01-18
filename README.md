Manual Test Cases <br>
Flow : Login -> Add to cart -> Checkout -> Logout <br>
Note : I have taken help of chatGPT for the table structure but not for the content.

| Test Case ID | Scenario      | Test Title                                                                    | Steps                                                                                                                                                                                                                                                                | Expected Result                                            | Actual Result                                             | Status |
| ------------ | ------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- | ------ |
| 01           | Login Page    | Verify that login should work with valid username and password                | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Enter `standard_user` as username<br/>3. Enter `secret_sauce` as password<br/>4. Click Login                                                                                            | Login should work with valid credentials                   | Login is working with Valid Credential                    | Pass   |
| 02           | Login Page    | Verify that the login shouldn't work with the invalid user and valid password | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Enter invalid username and `secret_sauce` as password<br/>3. Click Login                                                                                                                | Login should not work if one of the credentials is invalid | Login is not working if one of the credentials is invalid | Pass   |
| 03           | Login Page    | Verify that the login shouldn't work with the valid user and invalid password | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Enter `standard_user` as username and invalid password<br/>3. Click Login                                                                                                               | Login should not work if one of the credentials is invalid | Login is not working if one of the credentials is invalid | Pass   |
| 04           | Login Page    | Verify that the login shouldn't work with empty user and password             | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Keep username and password empty<br/>3. Click Login                                                                                                                                     | Login should not work if one of the credentials is empty   | Login is not working with empty credentials               | Pass   |
| 05           | Products Page | Verify that product can be added to cart                                      | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Login to application using `standard_user` and `secret_sauce`<br/>3. Click Add to Cart on any product                                                                                   | Product should be added and cart count should be 1         | Product was added and cart count showed 1                 | Pass   |
| 06           | Cart Page     | Verify that added product is displayed in cart                                | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Login to application using `standard_user` and `secret_sauce`<br/>3. Add product to cart<br/>4. Click on cart icon                                                                      | Added product should be visible in cart                    | Added product was visible in cart                         | Pass   |
| 07           | Checkout Page | Verify that user can complete checkout successfully                           | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Login to application using `standard_user` and `secret_sauce`<br/>3. Add product to cart<br/>4. Go to cart page<br/>5. Click Checkout<br/>6. Enter checkout details<br/>7. Click Finish | Order should be placed successfully                        | Order was placed and confirmation message was displayed   | Pass   |
| 08           | Logout          | Verify that user can logout successfully                                      | 1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com)<br/>2. Login to application using `standard_user` and `secret_sauce`<br/>3. Open menu<br/>4. Click Logout                                                                                      | User should be logged out and redirected to login page     | User was logged out and redirected to login page          | Pass   |

<br>


-Observation/Bugs:
1. Inventory Page
   - Filter - click - on arrow - doesn't expand the dropdown
2. Social links
   - Twitter icon not changed to "X"
3. Copyright Text
   - Doesn't have links
4. Product Image
   - When I initially click on the image , got logged out and an error message display i.e Epic sadface: You can only access '/inventory-item.html' when you are logged in. 
   - Same issue was arrived twice
5. We can't add multiple quantity of the same product 
6. Cart Icon
   - When I hover on the icon, the pointer is a normal one although it is Clickable(link) , it should be a right pointer
7. I can checkout with a empty cart , it should not
8. Reset App state
   - After adding a product to the cart, when I click "Reset app state" in the Menu , it clears the item from the cart but the "Remove" button for that particular item stays 

 <br>    


2: Automated Test Cases  <br>
-> I have automated only 2 test cases based on my current knowledge because I'm still on my learning phase<br>  
01 - Valid login<br>
02 - Invalid Login
<br>

3: How to Install Dependencies

1. Install Node.js
2. Clone the repository
3. Run the following command:
    - npm install

4. Install Playwright browsers:
    - npx playwright install

4: Run Test Cases 
   - npx playwright test

5: Assumption made
   - Saucedemo website is stable and working fine
   - Username and password are proper
   - Tests are executed on desktop browser

 



