
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }

    
    })
})
const container = document.querySelectorAll('.container')
container.forEach((element) => myObserver.observe(element))
