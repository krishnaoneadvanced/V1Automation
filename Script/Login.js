﻿function Login()
{
    var url = "http://localhost:5002/login";
    var UserName_xpath = "//input[@id='UserName']";
    var Password_xpath = "//input[@id='Password']";
    var LoginButton_xpath = "//div[@id='signInButton']/*[@title='Login']";
 
    var username, password , loginButton;
 
    Browsers.Item(btChrome).Run(url);
  
    var page = Sys.Browser("*").Page(url);
    Sys.Browser().BrowserWindow(0).Maximize();
  
    aqUtils.Delay(1000);
 
    username = page.FindChildByXPath(UserName_xpath, true);
    password = page.FindChildByXPath(Password_xpath, true);
  
    username.SetText("administrator");
    password.SetText("administrator");
    loginButton = page.FindChildByXPath(LoginButton_xpath, true);
  
    aqUtils.Delay(1000);

    Sys.Desktop.keys("[Tab][Tab][Tab]");
  
    if(loginButton.isExist)
  {
    loginButton.Click();

  }
  
  
}

module.exports.function = Login;