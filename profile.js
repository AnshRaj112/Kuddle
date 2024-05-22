window.onload = function() {
    const sidebar = document.querySelector(".sidebar")
    const closeBtn = document.querySelector('#btn')
    const dropDownBtn = document.querySelector('.user')
    const profileDrop = document.querySelector('.profile-dropdown-list')


    dropDownBtn.addEventListener('click', function(){
       openProfile()
    })

    const openProfile = () =>{
        if(profileDrop.classList.contains('disactive')){
            profileDrop.classList.remove('disactive')
            profileDrop.classList.add('active')
        }else{
            profileDrop.classList.add('disactive')
        }
    }


    closeBtn.addEventListener('click', function(){
        openClose()
    })

    const openClose = () =>{
        if(sidebar.classList.contains('open')){
            sidebar.classList.remove('open')
        }else{
            sidebar.classList.add('open')
        }
    }
}
