import React from 'react'
import Card from './components/Card'

const App = () => {

const profiles = [
  {
    name: "Sophie Bennett",
    role: "Product Designer focused on intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    followers: 312,
    posts: 48,
    isVerified: true
  },
  {
    name: "Liam Chen",
    role: "Landscape Photographer capturing the beauty of nature.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    followers: 1250,
    posts: 84,
    isVerified: true
  },
  {
    name: "Ava Thompson",
    role: "Frontend Developer specializing in React and Tailwind.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    followers: 890,
    posts: 32,
    isVerified: false
  },
  {
    name: "Noah Williams",
    role: "Architect | Modern Living & Sustainable Design.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    followers: 450,
    posts: 15,
    isVerified: false
  },
  {
    name: "Olivia Martinez",
    role: "Travel Blogger exploring hidden gems around the world.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    followers: 2300,
    posts: 210,
    isVerified: true
  }
];

  return (
    <div className='parent bg-[#dadada] h-full w-full flex flex-wrap justify-center items-center'>
      {profiles.map(function(elem,idx){
        return  <Card key={idx} name={elem.name} role={elem.role} image={elem.image} followers={elem.followers} posts={elem.posts} isVerified={elem.isVerified} />
      })}
    </div>
  )
}

export default App