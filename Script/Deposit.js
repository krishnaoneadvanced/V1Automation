﻿function Deposit()
{
  
      var browser = Sys.Browser("Chrome");
      var page = browser.Page("*");
    
      var smartdeposit_xapth = "//a[@id='ChooseAppdeposit']";
      var browse_smartdeposit_xpath = "//input[@id='UploadedFileBtn']";
      var doc_type_xpath = "//div[@class='col-xs-12 no-padding']/*[@id='depositTableSelect']";
      var deposit_button_xpath = "//button[@id='btnDepositDocument']";
  
      aqUtils.Delay(1000);
 
      smartdeposit= page.FindChildByXPath(smartdeposit_xapth,true);
 
      if (smartdeposit != null)
    {
    smartdeposit.Click();
    }
 
    browse_smartdeposit = page.FindChildByXPath(browse_smartdeposit_xpath,true);
    aqUtils.Delay(500);
      if ( browse_smartdeposit != null)
    {
     browse_smartdeposit.Click();
    }
 
aqUtils.Delay(1000);
Sys.Desktop.Keys("C:\\Users\\Krishna.Rami\\Desktop\\Baker Tom 96857.PDF");
Sys.Desktop.keys("[Enter]");
aqUtils.Delay(1000);


deposit_button= page.FindChildByXPath(deposit_button_xpath,true);
deposit_button.Click();

aqUtils.Delay(1000);

}

module.exports.function = Deposit;