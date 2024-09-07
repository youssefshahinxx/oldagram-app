const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let nameEl = document.getElementById("name-el")
let locationEl = document.getElementById("location-el")
let usernameEl = document.getElementById("username-el")
let commentEl = document.getElementById("comment-el")
let ppEL = document.getElementById("pp-el")
let postEl = document.getElementById("post-el")

let scNameEl = document.getElementById("second-name-el")
let scLocationEl = document.getElementById("second-location-el")
let scUsernameEl = document.getElementById("second-username-el")
let scCommentEl = document.getElementById("second-comment-el")
let scPpEL = document.getElementById("second-pp-el")
let scPostEl = document.getElementById("second-post-el")

let thNameEl = document.getElementById("third-name-el")
let thLocationEl = document.getElementById("third-location-el")
let thUsernameEl = document.getElementById("third-username-el")
let thCommentEl = document.getElementById("third-comment-el")
let thPpEL = document.getElementById("third-pp-el")
let thPostEl = document.getElementById("third-post-el")

//frist post
nameEl.textContent = posts[0].name
locationEl.textContent = posts[0].location
usernameEl.textContent = posts[0].username
commentEl.textContent = posts[0].comment
ppEL.src = posts[0].avatar
postEl.src = posts[0].post

// second post
scNameEl.textContent = posts[1].name
scLocationEl.textContent = posts[1].location
scUsernameEl.textContent = posts[1].username
scCommentEl.textContent = posts[1].comment
scPpEL.src = posts[1].avatar
scPostEl.src = posts[1].post

//third post
thNameEl.textContent = posts[2].name
thLocationEl.textContent = posts[2].location
thUsernameEl.textContent = posts[2].username
thCommentEl.textContent = posts[2].comment
thPpEL.src = posts[2].avatar
thPostEl.src = posts[2].post

const likeBtn1 = document.getElementById("like-btn1")
const likeBtn2 = document.getElementById("like-btn2")
const likeBtn3 = document.getElementById("like-btn3")

let likes1 = document.getElementById("likes1")
let likes2 = document.getElementById("likes2")
let likes3 = document.getElementById("likes3")

let num1 = posts[0].likes
let num2 = posts[1].likes
let num3 = posts[2].likes

let liked1 = false
let liked2 = false
let liked3 = false

likeBtn1.addEventListener("click", function(){
    if (!liked1){
        likeBtn1.src = 'images/Untitled design (22).png'
        num1 += 1
        likes1.textContent = num1 + " likes"

        liked1 = true
    } else {
        likeBtn1.src = 'images/icon-heart.png'
        num1 -= 1
        likes1.textContent = num1 + " likes"
        liked1 = false
    }    
})

likeBtn2.addEventListener("click", function(){
    if (!liked2){
        likeBtn2.src = 'images/Untitled design (22).png'
        num2 += 1
        likes2.textContent = num2 + " likes"

        liked2 = true
    } else {
        likeBtn2.src = 'images/icon-heart.png'
        num2 -= 1
        likes2.textContent = num2 + " likes"
        liked2 = false
    }    
})

likeBtn3.addEventListener("click", function(){
    if (!liked3){
        likeBtn3.src = 'images/Untitled design (22).png'
        num3 += 1
        likes3.textContent = num3 + " likes"

        liked3 = true
    } else {
        likeBtn3.src = 'images/icon-heart.png'
        num3 -= 1
        likes3.textContent = num3 + " likes"
        liked3 = false
    }    
})