

    
let logo = React.createElement('img',{className:"logo",src:"./logo.png"})
let a1= React.createElement('a',null,'About Me')
let a2= React.createElement('a',null,'Portfolio')
let a3= React.createElement('a',null,'Services')
let a4= React.createElement('a',null,'Blog')
let links = React.createElement('div',{className:"links"},[a1,a2,a3,a4])
let div1 = React.createElement('div',{className:"left"},[logo,links])
let bookCall = React.createElement('p',{className:'call'},'Book A Call')
let arrow =React.createElement('i',{className:"ri-arrow-right-up-long-line arrow"})
let div2 = React.createElement('div',{className:"right"},[bookCall,arrow])
let nav= React.createElement('nav',null,[div1,div2])




export default nav