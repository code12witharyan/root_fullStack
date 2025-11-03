console.log("chai or code")


require('dotenv').config()

const express = require('express')

// import express from 'express';

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


const githubData ={
     "login": "code12witharyan",
  "id": 182218601,
  "node_id": "U_kgDOCtxvaQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/182218601?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/code12witharyan",
  "html_url": "https://github.com/code12witharyan",
  "followers_url": "https://api.github.com/users/code12witharyan/followers",
  "following_url": "https://api.github.com/users/code12witharyan/following{/other_user}",
  "gists_url": "https://api.github.com/users/code12witharyan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/code12witharyan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/code12witharyan/subscriptions",
  "organizations_url": "https://api.github.com/users/code12witharyan/orgs",
  "repos_url": "https://api.github.com/users/code12witharyan/repos",
  "events_url": "https://api.github.com/users/code12witharyan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/code12witharyan/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aryan Sanjay Jain",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-20T09:50:54Z",
  "updated_at": "2025-01-03T07:40:50Z"
}

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/twitter',(req,res)=>{
    res.send('This is my twitter handle https://twitter.com/viditjain2002')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login to continue</h1>') 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get ('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
}) 


//get a list of 5 countries

