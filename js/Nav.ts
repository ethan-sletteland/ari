export class Nav {
    private years: HTMLElement;
    private arts: HTMLElement;
    private article: HTMLElement;
    private navData: [{ year: string; arts: [{ text: string; image: string }] }];

    constructor(navData: [ { year:string, arts: [{ text: string, image: string }] } ]) {
        console.warn('beep beep!')
        this.navData = navData
        this.years = document.getElementById('years')
        this.arts = document.getElementById('arts')
        this.article = document.getElementById('article')
        navData.forEach((year) => {
            this.years.appendChild(this.makeYearLink(year))
        })
        this.setArts(navData[0].year)
    }

    setYear(event: Event) {
        // @ts-ignore
        window.nav.setArts(event.target.innerText)
    }

    setArts(year: string) {
        // set active
        Array.prototype.forEach.call(this.years.getElementsByTagName('li'), (li: HTMLElement) => {
            if(li.dataset.year === year) {
                li.classList.add('active')
            } else {
                li.classList.remove('active')
            }
        })
        // set arts
        this.arts.innerHTML = "";
        this.navData.filter((yearEntry) => yearEntry.year === year ).forEach((activeYear) => {
            activeYear.arts.forEach((art) => {
                this.arts.appendChild(this.makeArtLink(art))
            })
        })
    }

    makeYearLink(year) {
        const li = document.createElement('li')
        li.setAttribute('data-year', year.year)
        const link = document.createElement('button')
        link.onclick = this.setYear
        li.appendChild(link)
        link.innerText = year.year
        return li
    }

    makeArtLink(art) {
        const li = document.createElement('li')
        const link = document.createElement('a')
        link.href = '#'
        li.appendChild(link)
        link.innerText = art.text
        return li
    }

    toggle() {
        const nav: HTMLElement = document.getElementsByTagName("nav")[0]
        const isVisible: boolean = nav.style.display === 'block'
        nav.style.display = (isVisible) ? 'none' : 'block'
    }
}
