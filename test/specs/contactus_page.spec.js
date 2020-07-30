const expect = require('chai').expect;
const PageFactory = require('../page_object/pageFactory');
const EC = protractor.ExpectedConditions;

describe("Contact Us page", function(){
    
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();
    });

    it("should make sure the page exists", async function(){
        await PageFactory.getPage("Contact Us").open(); 
        const titlePage = await PageFactory.getPage("Contact Us").getTitle();                                          
        expect(titlePage).to.be.equal("Learn more about EPAM and Contact Us | EPAM");
    });

    it("should submit all required data", async function(){
        await PageFactory.getPage("Contact Us").open();

        await PageFactory.getPage("Contact Us").firstName.setText("Testing");    
        await PageFactory.getPage("Contact Us").lastName.setText("Testing");
        await PageFactory.getPage("Contact Us").email.setText("Testing");
        await PageFactory.getPage("Contact Us").phone.setText("Testing");
        await PageFactory.getPage("Contact Us").company.setText("Testing");
        await PageFactory.getPage("Contact Us").city.setText("Testing");
        await PageFactory.getPage("Contact Us").comments.setText("Testing");        

        await PageFactory.getPage("Contact Us").dropdownSubject.click();          
        const optionSubject = PageFactory.getPage("Contact Us").subjectOptions.collection.get(0);
        await browser.wait(EC.elementToBeClickable(optionSubject), 10000);                
        await PageFactory.getPage("Contact Us").subjectOptions.clickElementByText("Talk to Sales in North America");        

        await PageFactory.getPage("Contact Us").dropdownPosition.click();          
        const optionPosition = PageFactory.getPage("Contact Us").positionOptions.collection.get(0);
        await browser.wait(EC.elementToBeClickable(optionPosition), 10000);                
        await PageFactory.getPage("Contact Us").positionOptions.clickElementByText("Academic/Student");

        await PageFactory.getPage("Contact Us").wait(5000);

        await PageFactory.getPage("Contact Us").dropdownHearAboutEpam.click();          
        const optionHeardAboutEpam = PageFactory.getPage("Contact Us").heardAboutEpamOptions.collection.get(3);
        await browser.wait(EC.elementToBeClickable(optionHeardAboutEpam), 10000);                
        await PageFactory.getPage("Contact Us").heardAboutEpamOptions.clickElementByText("Partner");
        
        await PageFactory.getPage("Contact Us").checkboxConsent.click();
        await PageFactory.getPage("Contact Us").checkboxSubscribe.click();

        await PageFactory.getPage("Contact Us").wait(3000);

        await PageFactory.getPage("Contact Us").submitButton.click();

        const text = await PageFactory.getPage("Contact Us").firstName.getText();                                           
        expect(text).to.be.equal("Testing");
    });

});