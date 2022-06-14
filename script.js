//the indian dev
//Conatcting child to parent communication
//Components are of two types
//functional and //class based

//1how to write a variable in react
//  const App = ( ) => {
//     const name = ' John  //  return(
//     //  <div className = " App " >
//     //          <h1> Hello , {isNameShowing ? name:"someone"} ! </h1>
//     //              </div>
//     //              ) ;
//     //  }

//     // React is an open source JavaScript library for building user
//     // interfaces
//     // • React is a JavaScript Library
//     // • Building user interfaces
//     // React has a rich eco system and plays really well with other
//     // libraries and is more than capable of building enterprise scale
//     // web applications
//  ' ;
// const isNameShowing = true;

/*
Step 1- trminal>npx create-react-app
+ step 2-write the name in the end todo-list
  now the first line of code will be
  npx creatw-react-app todo-list

Step 3: now after yur app is compiled and is available in editor of vs code ,access this file
by moving into it by writing>> cd .\react-demo\

Step 4:- now we have to run the command>> npm start
it opens up your app through chrome or hosts in local host

Step 5:-Then come back to vs code expand src folder and then navigate to app.js
we've to edit app.js now

Step6:-Over here if you'll see there's a <P> tag you can delete the edit parrt eritten and on eriting your value it displays this part on the local osts ,,

THESE SIX STEPS CREATE OUR REACT APP AND WE JUST HAVE CREATED REACT APP ONLY

Step7:- Come to package.json over hee dependencies to run our project are already installed

Step8:-node modules folder and all other files are for further advancement and now we have to go to index.html file

Step8.5:-Locate index.html in public folder

Step9:- Now over hee in index.html we dont have to add any type of code beside linking of files it is because we, wwant react
to control it and thsts why we're havig a div tag with rooot value which is only gooiing to be controlled by react itself

Step10:-src>index.js it is the js file whic controls it

Step11:-src>app.js represents the view layer of our app into the browser
if we'll add "Hello world in html it'll be shown over here also as it is the view layer which shows the componenets on the screen"

Step12:-src>index.css is for styling the body which is referenced in the index.js

Step13:-in src> we have reportWebVitals and setupTests.js which can be ignored for the beginners as these are just for testing the app component

Step14:-When we run the command npx-start html file is served in the browser

Step15:-Updating the older app to the newest version for this come to src>index.js
over here comment out the first second line which shows import reactDom from 'react-dom';
and write import { createRoot } from 'react-dom/client'
and then come to line 8 comment out 8-13(reactDOM.render.....document.getElement) and then write:
const container document.getElementById ( ' root ' )
const root = createRoot ( container )
root.render ( < App / >)


This is generally updated but idf it isnt in this case then we have to do this to
enable our react to perform to the latest version of 18


this helps our react to render app  component in an easy right manner

THIS IS THE FOLDER STRUCTURE OF REACT APP WHICH IS CREATED USING NPX-CREATE-REACT-APP

//WHAT id REACT Component
//there are two types of components 1function components and second is app components
//Function componenet is mostly preferred in 2022
//Function components are literally javaascript function which convert some input properties or props into some html jsx
which describes our ui

//LETS CREATE AN APP COMPONENT OF JSX IN APP.JS ,DELETE IMPORT LOGO
AND FULL DIV TAG  ,delete in such amanner that we,re only left with
import ./App.css '
function App ( ) {
return (
< div className = " App " >
< / div >
}
export default App
)

STEP16>Create an folder under src and then creat a greet.js file under it
 now lets create a simple function
demo > src > components >
function Greet ( ) {
return < h1 > Hello Vishwas < / h1 >
}


we can also write an arrow function
const Greet = () => {
return < h1 > Hello Vishwas < / h1 >
}
export default Greet







wont be rendered rn as it it not linked to anywhere else to link it we need ti export it
so

STEP17> first come to the downside of your page and then write

export default App (do it in greet.js)

and then import it in app.js by writing import Greet from './components/Greet'
 this is how we have exported and then imported and exported resulting in linking of files
  now in order to include our fikle in app.js  we just need to  come to <div classname='App'>
  and over there we simply need to write our file name in the form of tags like this
./App.css '
import
import Greet from ' ./components/Greet '
function App ( ) {
return (
< div className = " App '
< Greet > < / Greet > //and if there's nothing in btw our file tag then we simply can write first tag altogether with the closing tag
< / div >
}
export default App
)

J S X>

30:00

JSX differences
Class - > className
for - > htmlFor
camelCase property naming convention
• onclick - > onClick
• tabindex - > tabindex

//PROPS
  PROPS SHORT FOR PROPERTIES IS THE OPTIONAL INPUT VALUE WHIVH ANY COMPONENT COULD ACCEPT,IT ALLOWS THE COMPONENT CONTENT TO BE DYNAMIC

STEP18>>SO PROPS ARE JUST THE VALUE  WHICH COULD BE TRANSFERERRD FROM ONE COMPONENT TO ANOTHER COMPONENET
to specify name for the componenet we specify the attribute like over here we will specify the name attribute after greet which later on ehenn assigned with values will become a prop
,after siigning the values we are sending some properties to the greet component for ex:-
    function App() {
      return (
        <div className='App'>
        <Greet name='Bruce' />
        <Greet name='Clark' />
        <Greet name='Diana' />
        </div>
      )
    };

    export default App


STEP19>NOW we have to retrieve those values in our other files for which the values are already assigned so,
19.1>>in the starting line where const Greet we've to add (props)
19.2>>now in the second line we need to use the dot notation and dd the attribute which we have assigned earlier

for 19.1>> export const Greet = () => {

}

it'll become >> export const Greet = (props) => {

}

for 19.2>> export const Greet = (props) => {
  return <h1> Hello  </h1>   //will become
}


export const = (props) => {
  return <h1> Hello {props.name} </h1>
}


completed
//Adding Another Prop

//adding it in app.js
function App ( ) {
return (
< div className = " App '
< Greet name = ' Bruce ' heroName = ' Batman ' / >
< Greet name = ' Clark ' heroName = " Superman ' / >
Greet name = " Diana ' heroName = " Wonder Woman />
< / div >

//adding it in Greet.js
export const Greet = (props) => {
  return <h1>Hello {props.name} a.k.a {props.heroname}</h1>
};

<
//SOMETIMES WE DONT KNOW WHICH COMPONENT IS PASSED BUT WE STILL WANT TO SPECIFY IT,SO:
//IMP:JSX ELEMENT SHOULD ALWAYS BE WRAPPED WITH HTML TAGS FOR A BUG FREE CODE
//THEN FIRST STEP AT APP.JS
//WE'VE ADDED CHILDREN PROPS OVER HERE

function App ( ) {
return (
< div className = ' App " >
< Greet name = ' Bruce ' heroName = ' Batman ' / >
< Greet name = " Clark ' heroName = ' Superman ' / >
< Greet name = " Diana ' heroName = ' Wonder Woman " >
< p > This is children props < / p >
< / Greet >
< / div >
}
)

//NOW COME TO Greet.js
//we'll add props.children by wrapping whole code in <div>


eport const Greet = ( props ) = > {
return (
< div >
< h1 >
Hello { props.name } a.k.a { props.heroName }
< / h1 >
{ props.children )
< / div >
}
// export default Greet

//DIFFERENCE BETWEEN PROPS AND STATE

props vs state
props
props get passed to the component
Function parameters
props are immutable
props

state
state is managed within the component
Variables declared in the function body
state can be changed
useState Hook

//HOW STATE WORKS IN A COMPONENT

STEP20>>Create a new file called message.js under components
in the file we are going to create a function component then in the file we can create a function
 and it,ll be

 export const Message = (props) => {
  return <h1>Welcome Visitor</h1>
 }

Next step will be to import this element in app.js
so coming to app.js and then we have to write
import { Message } from './components/Message'

Step21>> Will be to add this function into the place in which we have imported


function App ( ) {
return (
< div className = ' App ' >
{ / * < Greet name = ' Bruce ' heroName = ' Batman ' />
< Greet name = ' Clark ' heroName = " Superman ' >
< button > Action < / button >
< / Greet >
< Greet name = ' Diana ' heroName = ' Wonder Woman " >
< p > This is children props < / p >
< / Greet > * / }
<Message/>  // this is how we add
< / div >
}
)

//NOW SINCE THE MESSAGE SENFT COULD NOT BE CHANGED SO THATS WHY WE ARE GOING TO USE
//STATE COMPONENT AND FOR THIS WE NEED TO IMPORT USESTATE IN ORDER TO USE IT

//SO IN THE TOPMOST LINE OF MESSAGE WE'LL WRITE

import { useState } from 'react'

export const Message = () => {
  const[message,setMessage] = useState('Welcome visitor')
  return <h1>{message}</h1>
}

//Now that we have useState and we are trcking down our element
what if we want to change our element for that lets add button to our element

function App ( ) {
return (
<div>
  <h1>Message</h1>
  <button onclick={() => setMessage('THnks For the Sub')}>
 subscribe
 </button>
  < / div >
}
)

//HOOKS
Hooks
A Hook is a special function that lets you " hook into " React features
useState
useReducer
useEffect
useContext
useRef
useMemo
useCallback
use Transition
useDeferredValue

//51:44




































































*/