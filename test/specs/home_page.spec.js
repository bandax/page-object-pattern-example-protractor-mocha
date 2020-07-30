// const expect = require('chai').expect;
// const PageFactory = require('../page_object/pageFactory');
// const EC = protractor.ExpectedConditions;

// describe("Home page", function(){
    
//     beforeEach(function(){
//         browser.ignoreSynchronization = true;
//         return browser.manage().window().maximize();
//     });

//     it("should have a Contact Us button", async function(){
//         await PageFactory.getPage("Home").open();               
//         await PageFactory.getPage("Home").Header.clickContactUs();               
//         const contactUsButton = PageFactory.getPage("Home").Header.contactUsButton.element;
//         await browser.wait(EC.elementToBeClickable(contactUsButton), 10000);
//         const contactUsText = await PageFactory.getPage("Home").Header.contactUsButton.getText();
//         expect(contactUsText).to.be.equal("CONTACT US");
//     });

// });