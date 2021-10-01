
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtnElem = document.getElementById('toggleDarkModeBtn')

  toggleBtnElem.addEventListener('click', async function () {
    const [wikiTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    })

    chrome.scripting.executeScript({
      target: { tabId: wikiTab.id },
      function: paintItBlack,
    })
  })
})


function paintItBlack() {
  const BACKGROUND_COLOR = 'black'
  const TEXT_COLOR = 'grey'
  const LINK_COLOR = 'rgb(120, 90, 255)'


  const htmlElem = document.querySelector('html')

  if (htmlElem) {
    htmlElem.style.backgroundColor = BACKGROUND_COLOR
    htmlElem.style.color = TEXT_COLOR
  }

  const headerElem = document.getElementById('mw-page-base')
    
  if (headerElem) {
    headerElem.style.background = BACKGROUND_COLOR
    headerElem.style.color = TEXT_COLOR
  }


  const bodyElem = document.querySelector('body')

  if (bodyElem) {
    bodyElem.style.backgroundColor = BACKGROUND_COLOR
    bodyElem.style.color = TEXT_COLOR
  }


  const contentElem = document.getElementById('content')
    
  if (contentElem) {
    contentElem.style.backgroundColor = BACKGROUND_COLOR
    contentElem.style.color = TEXT_COLOR
  }


  for (const listItemElem of document.querySelectorAll('#mw-head li')) {
    listItemElem.style.background = BACKGROUND_COLOR
    listItemElem.style.color = TEXT_COLOR
  }


  const sideNavElem = document.getElementById('mw-panel')

  if (sideNavElem) {
    sideNavElem.style.backgroundColor = BACKGROUND_COLOR
    sideNavElem.style.color = TEXT_COLOR
  }


  for (const linkElem of document.querySelectorAll('a')) {
    linkElem.style.color = LINK_COLOR
  }


  const contentsElem = document.getElementById('toc')

  if (contentsElem) {
    contentsElem.style.backgroundColor = BACKGROUND_COLOR
    contentsElem.style.color = TEXT_COLOR
  }


  for (const infoBoxElem of document.querySelectorAll('.infobox')) {
    infoBoxElem.style.backgroundColor = BACKGROUND_COLOR
    infoBoxElem.style.color = TEXT_COLOR
  }


  for (const thumbElem of document.querySelectorAll('.thumbinner')) {
    thumbElem.style.backgroundColor = BACKGROUND_COLOR
    thumbElem.style.color = TEXT_COLOR
  }
}

