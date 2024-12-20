const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const baicizhan=require('./baicizhan/list.json')
const dictionaryapi=require('./dictionaryapi/list.json')
const example=require('./example/list.json')
app.get('/api/word/',(req,res)=>{
    res.json({status:0})
})
app.get('/api/word/baicizhan',(req,res)=>{
    res.json({status:0,data:baicizhan[req.query.word]})
})
app.get('/api/word/dictionaryapi',(req,res)=>{
    res.json({status:0,data:dictionaryapi[req.query.word]})
})
app.get('/api/word/example',(req,res)=>{
    res.json({status:0,data:example[req.query.word]})
})
app.listen(3000)