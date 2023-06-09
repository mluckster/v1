const aboutEl = document.getElementById('about')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const aboutText = document.getElementById('about-text')
const leftSide = document.getElementsByClassName('left-side')[0]
const rightSide = document.getElementsByClassName('right-side')[0]
const firstName = document.getElementById('michael')
const lastName = document.getElementById('lucky')
const aboutFlex = document.querySelector('.about')

aboutEl.addEventListener('click', function(){
    
    // moving about info into frame
    aboutText.style.top = '43%'
    
    // sliding page over
    document.body.style.gridTemplateColumns = '100vw 0px'
    
    // creating back button
    const backButton = document.createElement('div')
    backButton.classList.add('back-button')
    leftSide.appendChild(backButton)
    backButton.textContent = 'back'
    
    // adding in profile image src and position it
    const profileEl = document.createElement('img')
    profileEl.src = 'picture/profile.png'
    aboutFlex.appendChild(profileEl)
    profileEl.style.top = '5%'
    profileEl.style.left = '20%'
    
    // setting the fade in
    setTimeout(() => {
        backButton.classList.add('fade-in')
        profileEl.classList.add('fade-in')
    }, 300)

    // displaying the skills
    const skills = [
        'MERN stack',
        'Django Framework',
        'High Proficiency in Python, Javascript, HTML, CSS',
        'Excellent problem solving, presentation, and collaboration skill with extensive experience with each'
    ]
    const skillsEl = document.createElement('ul')
    skillsEl.classList.add('skill-list')
    aboutFlex.appendChild(skillsEl)
    skills.forEach((skill, index) => {
        setTimeout(() => {
            const listEl = document.createElement('li')
            listEl.style.opacity = '0'
            listEl.textContent = skill
            skillsEl.appendChild(listEl)
            setTimeout(() => {
                listEl.style.opacity = '1'
            }, 350*index)
        }, 800)
    })

    // removing a back button with a fade
    backButton.addEventListener('click', function(){
        //sliding the page back
        document.body.style.gridTemplateColumns = '50vw 50vw'
        //removing the about info
        aboutText.style.top = '100%'
        backButton.classList.add('fade-out')
        skillsEl.classList.add('fade-out')
        profileEl.classList.add('fade-out')
        setTimeout(() => {
            leftSide.removeChild(backButton)
            aboutFlex.removeChild(skillsEl)
            aboutFlex.removeChild(profileEl)
        }, 500)
    })
})

function handleProjectClick(){
    projects.style.fontFamily = 'Horizon, sans-serif'
    projects.style.cursor = 'default'
    const backButton = document.createElement('div')
    backButton.classList.add('prev-page')
    document.body.style.gridTemplateColumns = '0px 100vw'
    setTimeout(() => {
        backButton.classList.add('fade-in')
    }, 500)
    rightSide.appendChild(backButton)
    backButton.textContent = 'back'

    //changing positioning of the about/projects/contact options on the page
    aboutEl.style.top = '0%'
    contact.style.top = '-50%'
    projects.style.top = '16%'

    // remove event listener so you can't re-click
    projects.removeEventListener('click', handleProjectClick)

    // inserting project buttons
    const gmrd = document.createElement('div')
    gmrd.textContent = 'GMRD'
    gmrd.classList.add('gmrd')
    const clicker = document.createElement('div')
    clicker.textContent = 'PokeClicker'
    clicker.classList.add('clicker')
    const cyberSays = document.createElement('div')
    cyberSays.textContent = 'CyberSays'
    cyberSays.classList.add('cyber-says')
    rightSide.appendChild(gmrd)
    rightSide.appendChild(clicker)
    rightSide.appendChild(cyberSays)
    setTimeout(() => {
        gmrd.classList.add('fade-in')
        cyberSays.classList.add('fade-in')
        clicker.classList.add('fade-in')
    }, 800);

    clicker.addEventListener('click', handleProjectButton)
    gmrd.addEventListener('click', handleProjectButton)
    cyberSays.addEventListener('click', handleProjectButton)

    function handleProjectButton(e) {

        const elementsToRemove = rightSide.querySelectorAll('.info, .screenshot, .descrip, .github, .site');
        elementsToRemove.forEach((element) => {
            rightSide.removeChild(element);
        });

        clicker.removeEventListener('click', handleProjectButton)
        gmrd.removeEventListener('click', handleProjectButton)
        cyberSays.removeEventListener('click', handleProjectButton)
        clicker.style.fontFamily = gmrd.style.fontFamily = cyberSays.style.fontFamily = ''
        clicker.style.color = gmrd.style.color = cyberSays.style.color = ''
        clicker.style.fontSize = gmrd.style.fontSize = cyberSays.style.fontSize = ''

        const projects = [
            {
                title: 'CyberSays Game',
                description: 'A recreation of Simon game with a cyberpunk aesthetic, complete front-end developed with vanilla JavaScript, HTML, and CSS. Click the buttons in the order they appear, change the difficulty for faster button prompts or try xtrme mode for a new pattern every round.',
                link: 'https://mluckster.github.io/Cybersays-Game/',
                github: 'https://github.com/mluckster/Cybersays-Game',
                image: 'https://i.imgur.com/X1KKIPC.png'
            },
            {
                title: 'PokéClicker',
                description: `Designed full single page web application using react, and full MERN stack framework with full built in implementation of PokeAPI. Click on the Pokemon as they appear to add them to your team. Check out other players' teams and view a complete Pokedex for all the pokemon that you've collected!`,
                link: 'https://poke-clicker.herokuapp.com/',
                github: 'https://github.com/mluckster/poke-clicker',
                image: 'https://i.imgur.com/TPinpJp.png'
            },
            {
                title: 'GMRD - Social Gaming Site',
                description: `Python-Django web application which allows users to create and share lists of video games with other users. With full integration of RAWG gaming API, almost every game on the planet is accessible and sharable with other users.`,
                link: 'https://gmrd-app.herokuapp.com/',
                github: 'https://github.com/mluckster/GMRD',
                image: 'https://i.imgur.com/DxfXaQJ.png'
            }
        ]
        if (e.target.textContent==='PokeClicker') {
            clicker.style.fontFamily = 'Horizon, sans-serif'
            clicker.style.color = '#1D49A7'
            clicker.style.fontSize = '3.2rem'
            display(projects[1])
            gmrd.addEventListener('click', handleProjectButton)
            cyberSays.addEventListener('click', handleProjectButton)
        } else if (e.target.textContent === 'GMRD') {
            gmrd.style.fontFamily = 'Horizon, sans-serif'
            gmrd.style.color = '#1D49A7'
            gmrd.style.fontSize = '3.2rem'
            display(projects[2]) 
            clicker.addEventListener('click', handleProjectButton)
            cyberSays.addEventListener('click', handleProjectButton)
        } else {
            cyberSays.style.fontFamily = 'Horizon, sans-serif'
            cyberSays.style.color = '#1D49A7'
            cyberSays.style.fontSize = '3.2rem'
            display(projects[0]) 
            clicker.addEventListener('click', handleProjectButton)
            gmrd.addEventListener('click', handleProjectButton)
        }
    }

    function display(projInfo) {
        // title
        const titleEl = document.createElement('div')
        rightSide.appendChild(titleEl)
        titleEl.textContent = projInfo.title
        titleEl.classList.add('info')

        // image
        const imageEl = document.createElement('img')
        rightSide.appendChild(imageEl)
        imageEl.src = projInfo.image
        imageEl.classList.add('screenshot')

        // description
        const descriptionEl = document.createElement('div')
        rightSide.appendChild(descriptionEl)
        descriptionEl.textContent = projInfo.description
        descriptionEl.classList.add('descrip')

        // button links
        const githubEl = document.createElement('button')
        const liveEl = document.createElement('button')
        githubEl.classList.add('github')
        liveEl.classList.add('site')
        githubEl.textContent = 'GitHub'
        liveEl.textContent = 'Try it out!'
        rightSide.appendChild(githubEl)
        rightSide.appendChild(liveEl)
        liveEl.onclick = () => {
            window.open(projInfo.link, '_blank')
        }
        githubEl.onclick = () => {
            window.open(projInfo.github, '_blank')
        }

        //fade in 
        setTimeout(() => {
            titleEl.classList.add('fade-in')
            imageEl.classList.add('fade-in')
            descriptionEl.classList.add('fade-in')
            githubEl.classList.add('fade-in')
            liveEl.classList.add('fade-in')
        }, 250);
    }

    // remove back button and slide things back to normal
    backButton.addEventListener('click', function(){
        const elementsToRemove = rightSide.querySelectorAll('.info, .screenshot, .descrip, .github, .site');
        elementsToRemove.forEach((element) => {
            element.classList.add('fade-out')
        });
        document.body.style.gridTemplateColumns = '50vw 50vw'
        aboutEl.style.top = '50%'
        contact.style.top = '50%'
        projects.style.top = '50%'
        backButton.classList.add('fade-out')
        gmrd.classList.add('fade-out')
        cyberSays.classList.add('fade-out')
        clicker.classList.add('fade-out')
        setTimeout(() => {
            clicker.removeEventListener('click', handleProjectButton)
            gmrd.removeEventListener('click', handleProjectButton)
            cyberSays.removeEventListener('click', handleProjectButton)
            rightSide.removeChild(backButton)
            rightSide.removeChild(gmrd)
            rightSide.removeChild(clicker)
            rightSide.removeChild(cyberSays)
            elementsToRemove.forEach((element) => {
                rightSide.removeChild(element);
            });
        }, 500)
        projects.style.fontFamily = ''
        projects.style.cursor = ''
        projects.addEventListener('click', handleProjectClick)
    })
}

projects.addEventListener('click', handleProjectClick)

function handleContactClick() {
    // remove button on the contact
    contact.removeEventListener('click', handleContactClick)

    // changing the styling of the contact lettering
    contact.style.fontFamily = 'Horizon, sans-serif'
    contact.style.cursor = 'default'
    
    // move dom elements around on the page
    firstName.style.top = '0%'
    lastName.style.top = '0%'
    firstName.style.transform = 'translateY(50%)'
    lastName.style.transform = 'translateY(150%)'
    aboutEl.style.top = '-25%'
    projects.style.top = '-25%'
    contact.style.top = '0%'

    // create elements for contact page
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const links = document.getElementById('links')
    links.style.opacity = '1'
    const linkedin = document.createElement('button')
    linkedin.id = 'linkedin'
    linkedin.textContent = 'Linkedin'
    const github = document.createElement('button')
    github.id = 'github'
    github.textContent = 'GitHub'
    github.style.margin = linkedin.style.margin = '1rem'
    links.appendChild(linkedin)
    links.appendChild(github)
    const content = [email, phone, linkedin, github]

    // opens new page for the linkedin and github links
    linkedin.onclick = () => {
        window.open('https://www.linkedin.com/in/luckymichael/', '_blank')
    }
    github.onclick = () => {
        window.open('https://github.com/mluckster', '_blank')
    }

    // fade in content
    content.forEach((item, index) => {
        setTimeout(() => {
            setTimeout(() => {
                item.classList.add('fade-in')
            }, 300*index)
        }, 500);
    })

    // create back button and fade it in
    const backButton = document.createElement('div')
    backButton.classList.add('back-button')
    setTimeout(() => {
        backButton.classList.add('fade-in')
    }, 500)
    backButton.textContent = 'back'
    leftSide.appendChild(backButton)

    backButton.addEventListener('click', function(){
        aboutEl.style.top = '50%'
        contact.style.top = '50%'
        projects.style.top = '50%'
        firstName.style.top = '50%'
        lastName.style.top = '50%'
        backButton.classList.add('fade-out')
        contact.style.fontFamily = ''
        contact.style.cursor = ''
        firstName.style.transform = ''
        lastName.style.transform = ''
        content.forEach((item, index) => {
            item.classList.remove('fade-in')
        })
        setTimeout(() => {
            leftSide.removeChild(backButton)
            links.removeChild(linkedin)
            links.removeChild(github)
        }, 500)
        contact.addEventListener('click', handleContactClick)
    })
}

contact.addEventListener('click', handleContactClick)


