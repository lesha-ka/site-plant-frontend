export const getHeaderFixed= () => {
    const onScrollHeader = () => { 
        const header = document.querySelector('.js-headerFixed') 
        let prevScroll = window.pageYOffset 
        let currentScroll 
        window.addEventListener('scroll', () => { 
            currentScroll = window.pageYOffset
            const headerHidden = () => header.classList.contains('header-fixed--hidden')
            if (currentScroll > prevScroll && headerHidden()) {
                header.classList.remove('header-fixed--hidden') 
            }
            if (currentScroll <= 100 && !headerHidden()) { 
                header.classList.add('header-fixed--hidden') 
            }
            prevScroll = currentScroll 
        })
    }
    const navInit = () => {
        const nav = document.querySelector('.js-headerFixed')
        const links = document.querySelectorAll('.js-headerLink')
        const sections = document.querySelectorAll('section')
        let headerHeight = document.querySelector('.header')
        sections.forEach(section => { // для каждой секции
          if (window.pageYOffset + headerHeight >= section.offsetTop) { 
            links.forEach(link => { // для каждой ссылки
              link.classList.remove('header__link--active') 
              if (link.dataset.section === section.dataset.section) { 
                link.classList.add('header__link--active')
              }
    
            })
          }
    
        })
      }
      navInit() 
      window.addEventListener('scroll', () => {
        navInit() 
      })
      window.addEventListener('resize', () => {
        navInit() 
      })
    onScrollHeader() 
}