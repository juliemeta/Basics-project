function chooseCatalogue() {
  let FirstName = prompt("Hi there! What is your first name?");
  let interest = prompt(
    "Would you be interested in learning more about our range of products, " +
      FirstName +
      "?"
  );
  interest = interest.toLowerCase().trim().replace("nope", "no");

  let button = document.querySelector(".confirmation");
  if (interest === "no") {
    alert(
      "Alright " +
        FirstName +
        ", then we won't email you our product catalogue. 😢"
    );
  } else {
    if (interest === "yes") {
      let catalogue = prompt(
        "Cool, " +
          FirstName +
          "! What kind of products are you interested in - wall art or lifestyle?"
      );
      catalogue = catalogue
        .toLocaleLowerCase()
        .trim()
        .replace("wallart", "wall art");
      let email = prompt(
        "Great choice " +
          FirstName +
          ", we have plenty of " +
          catalogue +
          " products to show you! Please finish by typing your email address below 👇"
      );
      alert(
        "An email has been sent! Please remember to check the spam folder."
      );

      button.innerHTML =
        "✅ A " +
        catalogue +
        " catalogue has been sent to your email address " +
        email +
        ". We sincerely hope you will be inspired, " +
        FirstName +
        "!";
    } else {
      alert("Please press button again and type either YES or NO.");
    }
  }
}
let catalogueButton = document.querySelector("button");
catalogueButton.addEventListener("click", chooseCatalogue);
