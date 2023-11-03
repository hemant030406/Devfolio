import React from 'react'
import CoffeeElement from './CoffeeElement'
import { useEffect } from "react";

export default function Coffee() {
    useEffect(() => {
        let element = document.querySelector('.suggestion-box')
        if(element!=null){
            element.style.marginTop = '-1.8rem'
        }
    })
  return (
    <div className='coffeemain'>
            <h1 className='text-center' style={{color:'rgb(227 222 199)'}}>Coffee</h1>
            <div className='container d-flex my-3'>
                <div className='row'>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTiCxXcyNxBKgWT2_t-TQQ_DTFFEnfQz9p1OT5WTg4vaJ4eUE_OPh6Vvd4qxWJop6-w' title='Cappuccino' content='A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk
                    foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk
                    substitutes and flavoring with cinnamon or chocolate powder.Gave it a try?' />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg' title='Espresso' content="Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling
                    water is forced under 9-10 bars of pressure through finely-ground coffee beans. Espresso can be made
                    with a wide variety of coffee beans and roast degrees.Let's try it out.Order now." />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://brewespressocoffee.com/wp-content/uploads/2022/02/Latte-Macchiato-33.jpg' title='Latte' content="Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made with
                    espresso and steamed milk. Variants include the chocolate-flavored mocha or replacing the coffee
                    with another beverage base such as masala chai (spiced Indian tea), mate, matcha, turmeric or
                    rooibos." />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://desertfoodfeed.com/wp-content/uploads/2020/05/americano12.jpg' title='Americano' content="With a similar flavor to black coffee,Caffè Americano is a type of coffee drink prepared by diluting
                    an espresso with hot water, giving it a different flavor from traditionally brewed coffee. Its
                    strength varies with the number of shots of espresso and amount of water added." />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://parade.com/.image/t_share/MTkwNTgwMTcyODUyNjM1NTE2/cafe-mocha.jpg' title='Caffè Mocha' content='A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a
                    caffè latte, commonly served in a glass rather than a mug. The mocha is considered a coffee and hot
                    chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor.' />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://recipes.timesofindia.com/thumb/86699095.cms?width=1200&height=900' title='Flat White' content="A flat white is a coffee drink consisting of espresso with microfoam. It is comparable to a latte,
                    but smaller in volume and with less microfoam, therefore having a higher proportion of coffee to
                    milk,and milk that is more velvety in consistency-allowing the espresso to dominate the flavour." />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' title='Iced Coffee' content='Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally
                    and then serving it over ice or in cold milk or by brewing the coffee cold. In hot brewing,
                    sweeteners and flavoring may be added before cooling, as they dissolve faster.Ordered it?' />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://www.giverecipe.com/wp-content/uploads/2019/04/Turkish-coffee-making.jpg' title='Turkish Coffee' content='Turkish coffee is a style of coffee prepared in a cezve using very finely ground coffee beans
                    without filtering.Turkish Coffee has been recognised for its Intangible Cultural Heritage. It is
                    believed to serve as a symbol of friendship and hospitality.Make it your favourite now.' />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://bellyfull.net/wp-content/uploads/2022/01/Irish-Coffee-1.jpg' title='Irish Coffee' content='One of the most popular drinks in Ireland is undoubtedly Irish coffee. Irish coffee is a
                        caffeinated alcoholic drink consisting of Irish whiskey, hot coffee and sugar, which has been
                        stirred and topped with cream. The coffee is drunk through the cream.Hurry up,order it as soon
                        as possible.' />
                </div>
                <div className='col-md-4'>
                <CoffeeElement imgSrc='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-07-How-to-make-affogato-at-home%2FKitchn_HowTo_Affogato_0281' title='Affogato' content='An affogato, more traditionally known as "affogato al caffe", is an Italian coffee-based
                        dessert. It usually takes the form of a scoop of plain milk-flavored or vanilla gelato or ice
                        cream topped or "drowned" with a shot of hot espresso.Affogatos are more for a dessert coffee
                        than a drink you would find at a cafe' />
                </div>
                    </div>
                </div>
        </div>
  )
}
