

export const abc = () =>{
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    document.addEventListener('DOMContentLoaded',()=>{

        function test(){
                const product =[...$$('.product')]
                const button = [...$$('.product button')]
    
                // product.forEach((item,index) =>{
                //     item.addEventListener('mouseover',()=>{
                //         button[index].innerText='Hung Dang'
                //         item.classList.add('activeProduct')
                //     })
                //     item.addEventListener('mouseout',()=>{
                //         button[index].innerText='Add Cart'
                //         item.classList.remove('activeProduct')
                //     })
                //     // console.log(item)
                // })
            }
            
            test()
    })
}

