const users = [
  {
    name: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Software Developer",
    description: "Aarav is a full-stack developer specializing in React, Node.js, and cloud-based applications."
  },
  {
    name: "Simran Kaur",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "Graphic Designer",
    description: "Simran creates modern UI/UX designs and brand identities with a minimalist and aesthetic approach."
  },
  {
    name: "Rohit Verma",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    profession: "Digital Marketer",
    description: "Rohit focuses on SEO, content strategy, and paid ads to help businesses grow their online presence."
  },
  {
    name: "Nisha Gupta",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    profession: "Content Writer",
    description: "Nisha writes blogs, articles, and social media content that connects brands with their audience."
  },
  {
    name: "Kabir Mehta",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    profession: "Photographer",
    description: "Kabir is a professional photographer capturing portraits, events, and lifestyle visuals."
  }
];

let main = document.querySelector('main')
let sum = ' '

users.forEach(function(elem){
sum = sum +   `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>` 
})

main.innerHTML =sum

