function Logout()
{
    var browser = Sys.Browser("Chrome");
    var page = browser.Page("*");
    var logout_menu_xapth = "//a[@id='LoggedInAs']";
    var logout_button_xpath = "//a[@id='btnLogOut']";
  
    logout_menu= page.FindChildByXPath(logout_menu_xapth,true);
    logout_menu.Click();
    aqUtils.Delay(500);

    logout_button= page.FindChildByXPath(logout_button_xpath,true);
    logout_button.Click();
    
}
module.exports.function = Logout;