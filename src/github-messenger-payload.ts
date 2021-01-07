console.log('GITHUB MESSENGER PAYLOAD IS INJECTED')

const nav = document.querySelector('nav[aria-label=Global]')

const newAnchorElement = document.createElement('a')

newAnchorElement.innerHTML = `
<a
  class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15"
  data-ga-click="Header, click, Nav menu - item:explore"
  data-selected-linkss="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore"
  href="#"
>
  Messenger
</a>
`

nav.appendChild(newAnchorElement)
