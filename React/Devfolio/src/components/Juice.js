import React from 'react'
import JuiceElement from './JuiceElement'
import { useEffect } from "react";

export default function Juice() {
  useEffect(() => {
    let element = document.querySelector('.suggestion-box')
    if(element!=null){
        element.style.marginTop = '-1.8rem'
    }
})
  return (
    <div className='juice'>
            <h1 className='text-center my-3' style={{color:'rgb(60 96 0)'}}>Juice</h1>
            <div className='container d-flex my-3'>
                <div className='row'>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://1.bp.blogspot.com/-cuBNHLdPrsI/WMrHZ9QlHnI/AAAAAAAABsI/KuCBai42QtwOPDsg7TbqXnFvZH69sxovQCLcB/s1600/Velas%2BBlog%2B-%2BGrape%2BJuice-1.jpg' title='Black Grape Juice' content='Grapes are popular for making wines as well as fruit juices. They have sweet, translucent flesh, and some have seeds while others do not.Black grapes juice is a refreshing and flavorful beverage made from fresh black grapes that have been blended and strained.' />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://cdn2.stylecraze.com/wp-content/uploads/2015/05/239-benefits-of-amla-juice-for-skin-hair-and-health_494379529.jpg' title='Amla Juice' content='Amla Juice is extracted from pure Indian Gooseberry having light brown coloured liquid with suspended particles. Amla juice contains Vitamin C that is twenty times more than in orange juice and It has sour and astringent taste with the characteristic odor of Amla. Had it?' />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://copperkettle.ae/wp-content/uploads/2021/03/Orange-Juice-Dubai-1.jpg' title='Orange Juice' content="Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine. It has a high concentration of vitamin C. Try it out!" />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://vaya.in/recipes/wp-content/uploads/2018/05/Pomegranate-Juice.jpg' title='Pomegranate Juice' content="Pomegranate contains antioxidants and anti-inflammatory substances. Pomegranate juice may benefit people with inflammatory conditions, diabetes, and other health issues. It may also boost digestion and memory and help prevent cancer. Hurry up,order it now." />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://5.imimg.com/data5/LT/XB/MY-28787720/pineapple-drink-500x500.jpg' title='Pineapple Juice' content='Pineapple juice is a juice made from pressing the natural liquid out from the pulp of the pineapple (a fruit from a tropical plant). Numerous pineapple varieties may be used to manufacture commercial pineapple juice, the most common of which are Smooth Cayenne, Red Spanish, Queen, and Abacaxi.' />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://5.imimg.com/data5/SELLER/Default/2020/12/JV/TE/XO/102293857/cranberry-fruit-juice.jpg' title='Cranberry Juice' content="Cranberry juice is sweet, with a sour edge and a mildly bitter after taste. This provides just the right balance of flavours to make a sauce, or add a little 'zing' to a cocktail or jam. It is also simply delicious as a wholesome drink, leaving you feeling fresh and energetic for hours after!" />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://foodiewish.com/wp-content/uploads/2020/08/Apple-Juice-Recipe.jpg' title='Apple Juice' content='A type of fruit juice that is made from the pulp of apples processed for their juice. It is a very clear liquid from which the pulp has been removed. This juice is often used to flavor meats, or as an ingredient in dressings and sauces, adding a sweet apple flavor. Give it a taste.' />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://www.tastingtable.com/img/gallery/the-reasons-watermelon-juice-should-be-your-go-to-summer-drink/intro-1655828421.jpg' title='Watermelon Juice' content="When the weather is brutally hot, there's nothing quite like fresh Watermelon Juice to cool and refresh your body while quenching your thirst.Watermelon is rich in anti-oxidants, a good source of potassium and has been linked to a reduced incidence of cardiovascular diseases and colon cancer." />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://vaya.in/recipes/wp-content/uploads/2019/07/Muskmelon-Juice.jpg' title='Musk Melon Juice' content='Muskmelons are rich in folic acid which helps in smoother and faster cell regeneration and makes your skin healthy and glowy. They also help maintain the natural elasticity of the skin by increasing the production of collagen and fighting any visible signs of aging.' />
                </div>
                <div className='col-md-4'>
                <JuiceElement imgSrc='https://www.organicfacts.net/wp-content/uploads/lemonjuiceforacne.jpg' title='Lemon Juice' content='Lemons are high in vitamin C, fiber, and various beneficial plant compounds. These nutrients are responsible for several health benefits. In fact, lemons may support heart health, weight control, and digestive health. The lemon contains minerals such as iron and potassium.' />
                </div>
                    </div>
                </div>
        </div>
  )
}
