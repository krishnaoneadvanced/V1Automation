﻿function Retrieve()
{
    var browser = Sys.Browser("Chrome");
    var page = browser.Page("*");
   
    aqUtils.Delay(1000);
   
    var SmartRetrieve_xpath = "//a[@id='ChooseAppretrieve']";
    Retrieve_link = page.FindChildByXPath(SmartRetrieve_xpath,true);
    Retrieve_link.Click();
  
    var search_smartretrieve_xpath = "//input[@id='searchValue0']";
    aqUtils.Delay(500);
    search_smartretrieve = page.FindChildByXPath(search_smartretrieve_xpath,true);
    
    aqUtils.Delay(1000);
    search_smartretrieve.SetText("administrator");
    
    aqUtils.Delay(500);
    var showresults_xapth = "//button[@id='btnShowResults']";
    showresultsButton = page.FindChildByXPath(showresults_xapth,true);
    showresultsButton.Click();
  
}

module.exports.function = Retrieve;