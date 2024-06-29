let Heading =React.createElement('h1',{id:"heading"},'hello react')

let parent=React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
   [ React.createElement('h1',{id:'heading'},'i am deep nested h1'),
    React.createElement('h2',{id:'heading'},'i am deep nested h')

   ]
))
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
console.log(parent)