class MainPage {
  homeButton() {
    return cy.get("a.btn.header-link");
  }

  aboutButton() {
    return cy.get("button[appscrollto = 'aboutSection']");
  }

  contactsButton() {
    return cy.get("button[appscrollto='contactsSection']");
  }

  guestLogIn() {
    return cy.get("button.header-link.-guest");
  }

  signInButton() {
    return cy.get("button.btn.btn-outline-white.header_signin");
  }

  socialsFacebook() {
    return cy.get("span.socials_icon.icon.icon-facebook");
  }
  socialsTelegram() {
    return cy.get("span.socials_icon.icon.icon-telegram");
  }
  socialsYoutube() {
    return cy.get("span.socials_icon.icon.icon-youtube");
  }
  socialsInstagram() {
    return cy.get("socials_icon.icon.icon-instagram");
  }
  socialsLinkedin() {
    return cy.get("span.socials_icon.icon.icon-linkedin");
  }
  hillelWebsite() {
    return cy.get("a.contacts_link.display-4");
  }
  hillelMailTo() {
    return cy.get("a.contacts_link.h4");
  }
}

export default MainPage;
