let color_elem = document.querySelector('.color')
let color2_elem = document.querySelector('.color2')
let drop_elem = document.querySelector('#drop')
let pencil_elem = document.querySelector('#pencil')
let base_div = document.querySelector('.base')
let base_img = document.querySelector('.base_svg')
let button_div = document.querySelector('.button')
let button_img = document.querySelector('.button_svg')
let drop_down_svg = document.querySelector('.drop_down')
let location_down_svg = document.querySelector('.location_dropdown')
let form_down_svg = document.querySelector('.form_dropdown')
let form_div = document.querySelector('.form')
let form_img = document.querySelector('.form_svg')
let chart_div = document.querySelector('.chart')
let chart_img = document.querySelector('.chart_svg')
let star_down_svg = document.querySelector('.star_dropdown')
let star_div = document.querySelector('.star')
let star_img = document.querySelector('.star_svg')
let bell_down_svg = document.querySelector('.bell_dropdown')
let bell_div = document.querySelector('.bell')
let bell_img = document.querySelector('.bell_svg')
let calculator_div = document.querySelector('.calculator')
let calculator_img = document.querySelector('.calculator_svg')
let page_down_svg = document.querySelector('.page_dropdown')
let page_div = document.querySelector('.page')
let page_img = document.querySelector('.page_svg')
let left_arrow_img = document.querySelector('.last_arrow')
let base_ul = document.querySelector('.base_list')
let button_ul = document.querySelector('.button_list')
let form_ul = document.querySelector('.form_list')
let star_ul = document.querySelector('.star_list')
let bell_ul = document.querySelector('.bell_list')
let page_ul = document.querySelector('.page_list')
let bright_elem =  document.querySelector('.bright')
let bright_span = document.querySelector('.bright_span')
let ham_span = document.querySelector('.hamburger')
let ham_span_img = document.querySelector('.ham_img')


color_elem.addEventListener('mouseover', () => {
    drop_elem.src = 'asset_replace.svg' ;
})
color_elem.addEventListener('mouseout', () => {
    drop_elem.src = 'assets/asset 13.svg' ;
})

color2_elem.addEventListener('mouseover', () => {
    pencil_elem.src = 'assets/topography_replace.svg' ;
})
color2_elem.addEventListener('mouseout', () => {
    pencil_elem.src = 'assets/asset 8.svg' ;
})

base_div.addEventListener('mouseover', () => {
    base_img.src = 'assets/base_replace.svg' ;
    drop_down_svg.src = 'dropdown_replace.svg'
})
base_div.addEventListener('mouseout', () => {
    base_img.src = 'assets/asset 15.svg' ;
    drop_down_svg.src = 'dropdown.svg'
})
button_div.addEventListener('mouseover', () => {
    button_img.src = 'assets/button_replace.svg' ;
    location_down_svg.src = 'dropdown_replace.svg'
})
button_div.addEventListener('mouseout', () => {
    button_img.src = 'assets/asset 16.svg' ;
    location_down_svg.src = 'dropdown.svg'
})
form_div.addEventListener('mouseover', () => {
    form_img.src = 'assets/form_replace.svg' ;
    form_down_svg.src = 'dropdown_replace.svg'
})
form_div.addEventListener('mouseout', () => {
    form_img.src = 'assets/asset 17.svg' ;
    form_down_svg.src = 'dropdown.svg'
})
chart_div.addEventListener('mouseover', () => {
    chart_img.src = 'assets/chart_replace.svg' ;
    
})
chart_div.addEventListener('mouseout', () => {
    chart_img.src = 'assets/asset 18.svg' ;
    
})
star_div.addEventListener('mouseover', () => {
    star_img.src = 'assets/star_replace.svg' ;
    star_down_svg.src = 'dropdown_replace.svg'
    
})
star_div.addEventListener('mouseout', () => {
    star_img.src = 'assets/asset 19.svg' ;
    star_down_svg.src = 'dropdown.svg'
    
})
bell_div.addEventListener('mouseover', () => {
    bell_img.src = 'assets/bell_replace.svg' ;
    bell_down_svg.src = 'dropdown_replace.svg';
    
})
bell_div.addEventListener('mouseout', () => {
    bell_img.src = 'assets/asset 20.svg' ;
    bell_down_svg.src = 'dropdown.svg';
    
})
calculator_div.addEventListener('mouseover', () => {
    calculator_img.src = 'assets/calculator_replace.svg' ;

    
})
calculator_div.addEventListener('mouseout', () => {
    calculator_img.src = 'assets/asset 21.svg' ;
  
    
})
page_div.addEventListener('mouseover', () => {
    page_img.src = 'assets/star_replace.svg' ;
    page_down_svg.src = 'dropdown_replace.svg';
    
})
page_div.addEventListener('mouseout', () => {
    page_img.src = 'assets/asset 19.svg' ;
    page_down_svg.src = 'dropdown.svg';
    
})
left_arrow_img.addEventListener('mouseover', () =>{
    left_arrow_img.src = 'assets/arrow_left_replace.svg'
})
left_arrow_img.addEventListener('mouseout', () =>{
    left_arrow_img.src = 'assets/arrow_left.svg'
})
drop_down_svg.addEventListener('click', () =>{
    if (base_ul.style.display === 'none' || base_ul.style.display === '') {
        base_ul.style.display = 'block';
        drop_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        base_ul.style.display = 'none';
         drop_down_svg.src = 'dropdown.svg'
    }
    
})
location_down_svg.addEventListener('click', () =>{
    if (button_ul.style.display === 'none' || button_ul.style.display === '') {
        button_ul.style.display = 'block';
        location_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        button_ul.style.display = 'none';
         location_down_svg.src = 'dropdown.svg'
    }
    
})
form_down_svg.addEventListener('click', () =>{
    if (form_ul.style.display === 'none' || form_ul.style.display === '') {
        form_ul.style.display = 'block';
        form_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        form_ul.style.display = 'none';
         form_down_svg.src = 'dropdown.svg'
    }
    
})
star_down_svg.addEventListener('click', () =>{
    if (star_ul.style.display === 'none' || star_ul.style.display === '') {
        star_ul.style.display = 'block';
        star_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        star_ul.style.display = 'none';
         star_down_svg.src = 'dropdown.svg'
    }
    
})
bell_down_svg.addEventListener('click', () =>{
    if (bell_ul.style.display === 'none' || bell_ul.style.display === '') {
        bell_ul.style.display = 'block';
        bell_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        bell_ul.style.display = 'none';
         bell_down_svg.src = 'dropdown.svg'
    }
    
})
page_down_svg.addEventListener('click', () =>{
    if (page_ul.style.display === 'none' || page_ul.style.display === '') {
        page_ul.style.display = 'block';
        page_down_svg.src = 'assets/arrow_up.svg'
    } 
    else {
        page_ul.style.display = 'none';
         page_down_svg.src = 'dropdown.svg'
    }
    
})
bright_span.addEventListener('mouseover', () => {
    bright_elem.src = 'assets/bright_replace.svg'
    bright_span.style.cursor = 'pointer'

})
bright_span.addEventListener('mouseout', () => {
    bright_elem.src = 'assets/brightness.svg'
})
ham_span.addEventListener('mouseover', () => {
    ham_span_img.src = 'assets/ham_replace.svg'
    ham_span.style.cursor = 'pointer'

})
ham_span.addEventListener('mouseout', () => {
    ham_span_img.src = 'assets/asset 22.svg'
})


let bright_drop_div = document.querySelector('.brightness_dropdown')
let letter_box = document.querySelector('.letter_span')
let letter_img = document.querySelector('.letter_img')
let menu_span = document.querySelector('.menu')
let menu_span_img = document.querySelector('.menu_img')
let bell_span = document.querySelector('.bell_span')
let bell_span_img = document.querySelector('.bell_img')
let main = document.querySelector('.main_container')
let acc_click = document.querySelector('.acc_photo')
let acc_div = document.querySelector('.account_dropdown')

letter_box.addEventListener('mouseover', () => {
    letter_img.src = 'assets/letter_replace.svg'
    letter_box.style.cursor = 'pointer'

})
letter_box.addEventListener('mouseout', () => {
    letter_img.src = 'assets/letter.svg'
})


menu_span.addEventListener('mouseover', () => {
    menu_span_img.src = 'assets/menu_replace.svg'
    menu_span.style.cursor = 'pointer'

})
menu_span.addEventListener('mouseout', () => {
    menu_span_img.src = 'assets/menu.svg'
})


bell_span.addEventListener('mouseover', () => {
    bell_span_img.src = 'assets/bell2_replace.svg'
    bell_span.style.cursor = 'pointer'

})
bell_span.addEventListener('mouseout', () => {
    bell_span_img.src = 'assets/asset 20.svg'
})

bright_span.addEventListener('click', (event) => {
  event.stopPropagation()
    if (bright_drop_div.style.display === 'none' || bright_drop_div.style.display === '') {
        bright_drop_div.style.display = 'block';
   
    } 
    else {
        bright_drop_div.style.display = 'none';
    }
    if (acc_div.style.display === 'block') {
        acc_div.style.display = 'none';
    }
})
document.body.addEventListener('click', () => {
    if (bright_drop_div.style.display === 'block') {
        bright_drop_div.style.display = 'none';
    }
});



acc_click.addEventListener('click', (event) => {
    event.stopPropagation()
      if (acc_div.style.display === 'none' || acc_div.style.display === '') {
          acc_div.style.display = 'block';
     
      } 
      else {
          acc_div.style.display = 'none';
      }
      if (bright_drop_div.style.display === 'block') {
        bright_drop_div.style.display = 'none';
    }
  })
  document.body.addEventListener('click', () => {
      if (acc_div.style.display === 'block') {
          acc_div.style.display = 'none';
      }
  });
  