import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tea from './components/Tea';
import Coffee from './components/Coffee';
import Juice from './components/Juice';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Registration from './components/Registration';
import AboutUs from './components/AboutUs';
import SearchSuggestions from './components/SearchSuggestions';
import { useEffect } from 'react';
import AddToCart from './components/AddToCart';
// import $ from jquery

function App() {

    function myfunction(list){
      list = list.split(' ').join('-')
      const element = document.querySelector(`.${list}`)
      console.log('b')
      if(element != null){
        console.log('a')
        element.scrollIntoView()
      }
    }

    let suggestions=[
      'Tea',
      'Coffee',
      'Juice',
      'Darjeeling Tea',
      'Assam Tea',
      'Hibiscus Tea',
      'Chamomile Tea',
      'Ginger Tea',
      'Nilgiris Tea',
      'Green Tea',
      'Peppermint Tea',
      'Masala Tea',
      'Elaichi Tea',
      'Orange Juice',
      'Cappuccino Coffee',
      'Espresso Coffee',
      'Latte Coffee',
      'Americano Coffee',
      'Caffè Mocha Coffee',
      'Flat White Coffee',
      'Iced Coffee',
      'Turkish Coffee',
      'Irish Coffee',
      'Affogato Coffee',
      'Black Grape Juice',
      'Amla Juice',
      'Pomegranate Juice',
      'Pineapple Juice',
      'Cranberry Juice',
      'Apple Juice',
      'Watermelon Juice',
      'Musk Melon Juice',
      'Lemon Juice' 
    ];
    let suggestionBox;
    let inputBox;
    useEffect(()=>{
      suggestionBox=document.querySelector(".suggestion-box");
      inputBox=document.querySelector(".input-box");

      if(inputBox!==null)
      {
        inputBox.addEventListener('input', function (e) 
      { 
        let input = this.value
        let length = input.length; 
        let suggestion = []

        if(input)
          {
            if(suggestionBox != null){
              suggestionBox.style.visibility = 'visible'
            }
            if(length){
            suggestion = suggestions.filter(keyword => {
              return keyword.toLowerCase().includes(input.toLowerCase())
            })
            display(suggestion.length!==0?suggestion:['No result'])
          }
        }
        else{
          console.log(input)
          if(suggestionBox != null){
            suggestionBox.style.visibility = 'hidden'
          }
        }
      }); 
    }
  },[])

    

    function display(suggestion){
      let content = suggestion.map(list => {
        const link = list.toLowerCase().split(' ').slice(-1)
        const id = list.split(' ').join('-')
        // return `<a href='/${link}/#${id}' ${onclick=setTimeout(myfunction(list),2000)}><li>` + list + "</li></a>"
        return `<a href='/${link}/#${id}'><li>` + list + "</li></a>"
      })
      if(suggestionBox != null){
        suggestionBox.innerHTML = "<ul>" + content.join('') + "</ul>"
      }
    }



  return (
    <div>
      <Router>
      <Nav/>
      <SearchSuggestions/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/tea' element={<Tea/>}/>
        <Route exact path='/coffee' element={<Coffee/>}/>
        <Route exact path='/juice' element={<Juice/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/registration' element={<Registration/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
        <Route exact path='/cart' element={<AddToCart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
