import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './css/main.css'

import MessageBox from './components/MessageBox'


const root = ReactDOM.createRoot(document.getElementById('root'))

const msgs = [
    {
        id: 1,
        sender: "enzulode",
        text: "Dusdajndk asjkdkasd asdjka"
    },
    {
        id: 2,
        sender: "michael",
        text: "Dusdajndk"
    },
    {
        id: 3,
        sender: "leonid",
        text: "Dusdajndk asjkasdasdasdaaasdasasdasdasdasdas sdaddadasdas sdadkasd asdjka"
    },
    {
        id: 4,
        sender: "enzulode",
        text: "Dusdajndk asd asdjka"
    },
    {
        id: 5,
        sender: "dimario",
        text: "Ya pidor"
    },
    {
        id: 6,
        sender: "duuude",
        text: "Dusdajndk asjkdkasd asdjka"
    },
    {
        id: 7,
        sender: "dimario",
        text: "Dusdajndk :D"
    },
    {
        id: 8,
        sender: "dimario",
        text: "Dusdajndk asjkdkasd asdjka"
    },
    {
        id: 9,
        sender: "duuude",
        text: "Dusdajndk asjkdkasd asdjka"
    },
    {
        id: 10,
        sender: "michael",
        text: "Dusdajndk asjkdkasd asdjka"
    },
    {
        id: 11,
        sender: "duuude",
        text: "kkead asjkdkasd asdjka"
    },
    {
        id: 12,
        sender: "enzulode",
        text: "ajndk asjkdkasd asdjka"
    },
]

const testMsgs = []

root.render(
    <React.StrictMode>

        <MessageBox viewer="enzulode" messages={msgs}/>

    </React.StrictMode>
)