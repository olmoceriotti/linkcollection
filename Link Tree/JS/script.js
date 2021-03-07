document.getElementById("footerCta1").addEventListener("click", function(){
  document.getElementById("footerCta1").classList.add("height-cta")
  document.getElementById("footerCta1").id = "none"
  document.getElementById("icon-arrow").classList.add("fa-chevron-down")
  document.getElementById("icon-arrow").classList.remove("fa-chevron-up")
  document.getElementById("footer-cover-text").style.display = "none"
  document.getElementById("ctaPhrase").style.display = "block"
  document.getElementById("ctaBtn").style.display = "block"
})

document.getElementById("icon-arrow").addEventListener("click", function(){
  document.getElementById("icon-arrow").classList.remove("fa-chevron-down")
  document.getElementById("icon-arrow").classList.add("fa-chevron-up")
  document.getElementById("footer-cover-text").style.display = "block"
  document.getElementById("ctaPhrase").style.display = "none"
  document.getElementById("ctaBtn").style.display = "none"
  document.getElementById("none").classList.remove("height-cta")
  setTimeout(function(){document.getElementById("none").id = "footerCta1"}, 500);
})

document.getElementById("none").id = "footerCta1"
