let count1= React.createElement('h3',null,'+200')
let count1txt= React.createElement('p',null,'Project Completed')
let count2= React.createElement('h3',null,'+50')
let count2txt= React.createElement('p',null,'Startup Raised')
let hello= React.createElement('h3',null,'Hello')
let hellotxt= React.createElement('p',null,`-- It's D.Nova a design wizerd`)
let projects= React.createElement('div',{className:'projects'},[count1,count1txt])
let startup= React.createElement('div',{className:'projects'},[count2,count2txt])
let top1= React.createElement('div',{className:'top1'},[projects,startup])
let top2= React.createElement('div',{className:'top2'},[hello,hellotxt])
let top = React.createElement('div',{className:"top"},[top1,top2])
let scrolltxt = React.createElement('p',null,'Scroll down')
let downArrow = React.createElement('i',{className:"ri-arrow-down-long-line"})
let bottom = React.createElement('div',{className:"bottom"},[scrolltxt,downArrow])

let mid = React.createElement('div',{className:"mid"},[top,bottom])

export default mid

