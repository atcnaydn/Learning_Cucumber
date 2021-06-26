//package steps;
//
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.support.PageFactory;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import page.LoginPage;
//import util.BrowserFactory;
//
//public class LoginStepDef {
//	WebDriver driver;
//	LoginPage loginPage;
//
//	@Before
//	public void beforeRun() {
//		driver = BrowserFactory.init();
//		loginPage = PageFactory.initElements(driver, LoginPage.class);
//
//	}
//
//	@Given("^User is on the \"([^\"]*)\" login page$")
//	public void user_is_in_the_login_page(String page) {
//
//		if(page.equalsIgnoreCase("Techfios")) {
//			driver.get("https://www.techfios.com/billing/?ng=admin");
//		}
//		
//		
//	}
//
//	@When("^User enters username as \"([^\"]*)\"$")
//	public void user_enters_username_as(String username) throws Throwable {
//		loginPage.enterUsername(username);
//
//	}
//
//	@When("^User enters password as \"([^\"]*)\"$")
//	public void user_enters_password_as(String password) throws Throwable {
//		loginPage.enterPassword(password);
//
//	}
//
//	@When("^User clicks submit$")
//	public void user_clicks_submit() throws Throwable {
//		loginPage.clickSignIn();
//	}
//
//	@Then("^User should be able to login$")
//	public void user_should_be_able_to_login() throws Throwable {
//
//	}
//	
//	@After
//	public void afterRun() {
//		BrowserFactory.teardown();
//	}
//
//}
