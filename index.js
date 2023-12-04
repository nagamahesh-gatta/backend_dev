require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = 	{
    "login":"nagamahesh-gatta",
    "id":143852337,
    "node_id":"U_kgDOCJMDMQ",
    "avatar_url":"https://avatars.githubusercontent.com/u/143852337?v=4",
    "gravatar_id":"",
    "url":"https://api.github.com/users/nagamahesh-gatta",
    "html_url":"https://github.com/nagamahesh-gatta",
    "followers_url":"https://api.github.com/users/nagamahesh-gatta/followers",
    "following_url":"https://api.github.com/users/nagamahesh-gatta/following{/other_user}",
    "gists_url":"https://api.github.com/users/nagamahesh-gatta/gists{/gist_id}",
    "starred_url":"https://api.github.com/users/nagamahesh-gatta/starred{/owner}{/repo}",
    "subscriptions_url":"https://api.github.com/users/nagamahesh-gatta/subscriptions",
    "organizations_url":"https://api.github.com/users/nagamahesh-gatta/orgs",
    "repos_url":"https://api.github.com/users/nagamahesh-gatta/repos",
    "events_url":"https://api.github.com/users/nagamahesh-gatta/events{/privacy}",
    "received_events_url":"https://api.github.com/users/nagamahesh-gatta/received_events",
    "type":"User",
    "site_admin":false,
    "name":null,
    "company":null,
    "blog":"",
    "location":null,
    "email":null,
    "hireable":null,
    "bio":null,
    "twitter_username":null,
    "public_repos":1,
    "public_gists":0,
    "followers":0,
    "following":0,
    "created_at":"2023-09-01T23:53:15Z",
    "updated_at":"2023-11-19T05:31:35Z"
 }
 


app.get('/', (req, res) => {

    res.send('Hello World!..')
})

app.get('/mahesh', (req, res) => {

    res.send('Naga Mahesh Gatta')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listen on port ${port}`)
})  