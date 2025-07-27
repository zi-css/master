let darkmode = localStorage.getItem('zi-theme')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('zi-theme')
  localStorage.setItem('zi-theme', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('zi-theme')
  localStorage.setItem('zi-theme', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('zi-theme')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
