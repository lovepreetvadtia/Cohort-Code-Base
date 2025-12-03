const users = [
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    video: "./videos/1.mp4",
    username: "lavi_vadia",
    isFollowed: false,
    isLiked: true,
    likeCount: 234,
    commentCount: 54,
    shareCount: 12,
    caption: "Exploring the woods today! 🌲✨"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    video: "./videos/2.mp4",
    username: "its_me_sam",
    isFollowed: true,
    isLiked: false,
    likeCount: 1200,
    commentCount: 98,
    shareCount: 33,
    caption: "Life hits different on weekends 😎"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    video: "./videos/3.mp4",
    username: "queen_ria",
    isFollowed: false,
    isLiked: false,
    likeCount: 987,
    commentCount: 120,
    shareCount: 40,
    caption: "Sunsets are a vibe 🌅"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    video: "./videos/4.mp4",
    username: "mr_coder",
    isFollowed: true,
    isLiked: true,
    likeCount: 645,
    commentCount: 30,
    shareCount: 10,
    caption: "Debugging all night ⚡"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    video: "./videos/5.mp4",
    username: "travel_with_anya",
    isFollowed: false,
    isLiked: false,
    likeCount: 1500,
    commentCount: 260,
    shareCount: 89,
    caption: "Paris nights are magical ✨🇫🇷"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    video: "./videos/1.mp4",
    username: "fitness_raj",
    isFollowed: true,
    isLiked: true,
    likeCount: 450,
    commentCount: 21,
    shareCount: 5,
    caption: "No excuses. Only grind 💪"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    video: "./videos/2.mp4",
    username: "gamer_king",
    isFollowed: false,
    isLiked: true,
    likeCount: 2100,
    commentCount: 340,
    shareCount: 140,
    caption: "Victory Royale!!! 🔥🎮"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    video: "./videos/3.mp4",
    username: "foodie_shreya",
    isFollowed: true,
    isLiked: false,
    likeCount: 890,
    commentCount: 67,
    shareCount: 20,
    caption: "This dessert changed my life 🍰😍"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    video: "./videos/4.mp4",
    username: "urban_clicks",
    isFollowed: false,
    isLiked: false,
    likeCount: 300,
    commentCount: 12,
    shareCount: 4,
    caption: "City lights & late nights 🌃"
  },
  {
    isMuted:true,
    userImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    video: "./videos/5.mp4",
    username: "the_real_avi",
    isFollowed: true,
    isLiked: true,
    likeCount: 560,
    commentCount: 45,
    shareCount: 18,
    caption: "Chilling vibes only 😌✨"
  }
];

let Allreels = document.querySelector('.reels')

function addData(){
  var sum = ''
users.forEach((elem,idx)=>{
    console.log(elem,idx)
    sum = sum +`<div class="reel">
    <video loop autoplay ${elem.isMuted?'muted':''} controls src="${elem.video}"></video>
    <div class='mute' id=${idx}>
    ${elem.isMuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-fill"></i>'}
    </div>
                    <div class="allInfo">
                        <div class="user">
                            <div class="info">
                                <img src="${elem.userImg}" alt="">
                                <h3>${elem.username}</h3>
                            </div>
                            <button class ='follow' id='${idx}' >${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <div class="text"><p>${elem.caption}</p></div>
                    </div>
                    <div class="likeInfo">
                        <div id='${idx}' class="like common" >
                            <h4 class="isLike">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i  class="ri-heart-3-line"></i>'}</h4>
                            <h6 class="likeCount">${elem.likeCount}</h6>
                        </div>
                        <div class="comment common">
                            <div class="isComment"><i class="ri-chat-1-line"></i></div>
                            <div class="commentCount">${elem.commentCount}</div>
                        </div>
                        <div class="share common">
                            <div class="isShare"><i class="ri-share-forward-line"></i></div>
                            <div class="shareCount">${elem.shareCount}</div>
                            </div>
                        <div class="more common"><i class="ri-more-2-fill"></i></div>
                        </div>
                `
})

Allreels.innerHTML = sum
}


addData();

Allreels.addEventListener('click',function(dets){
 
// For Like and Dislike 

if(dets.target.classList.contains('like')){
  if(!users[dets.target.id].isLiked){
  users[dets.target.id].likeCount++;
  users[dets.target.id].isLiked = true
}
else{
  users[dets.target.id].likeCount--;
  users[dets.target.id].isLiked = false
}
addData();
}

// For Follow and Unfollow

if(dets.target.classList.contains('follow')){
   if(!users[dets.target.id].isFollowed){
  users[dets.target.id].isFollowed = true
}
else{
    users[dets.target.id].isFollowed = false
}
addData();
}
  
// Mute and Unmute

if(dets.target.classList.contains('mute')){
   if(!users[dets.target.id].isMuted){
  users[dets.target.id].isMuted = true
}
else{
    users[dets.target.id].isMuted = false
}
addData();
} 

  
})