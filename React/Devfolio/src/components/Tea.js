import React from 'react'
import TeaElement from './TeaElement'
import { useEffect } from "react";

export default function Tea() {
    useEffect(() => {
        let element = document.querySelector('.suggestion-box')
        if(element!=null){
            element.style.marginTop = '-1.8rem'
        }
    })
    return (
        <div className='tea' style={{zIndex:'0'}}>
            <h1 className='text-center my-3' style={{color:'#fffea2',zIndex:'0'}}>Tea</h1>
            <div className='container d-flex my-3'>
                <div className='row'>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://hashtaglegend.com/wp-content/uploads/2022/06/Tea-WG-Darjeeling-HK.jpg' title='Darjeeling Tea' classname='Darjeeling-Tea' content="Darjeeling tea is a type of black tea produced in India. Darjeeling tea has a fruity aroma and a golden or bronze color, depending on the way it's brewed. Tea experts say it has notes (flavors) of citrus fruit, flowers, and even a vegetal quality.Best for the taste.Gave a try to it?" />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://www.halmaritea.com/wp-content/uploads/2020/05/Sip-the-flavourful-Awesome-Assam-blend.jpg' title='Assam Tea' classname='Assam-Tea' content="Assam Tea is known for its brisk, strong and malty character, making it a perfect tea to wake up to.The distinctive second flush orthodox Assam teas are valued for their rich taste, bright liquors and are considered to be one of the choicest teas in the world.Let's have it!!" />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://5.imimg.com/data5/XC/WZ/XN/SELLER-35879600/hibiscus-tea.jpg' title='Hibiscus Tea' classname='Hibiscus-Tea' content='Hibiscus tea is a herbal tea made as an infusion from crimson or deep magenta-colored calyces (sepals) of the roselle (Hibiscus sabdariffa) flower. It is consumed both hot and cold. It has a tart, cranberry-like flavor.Hibiscus tea has many purported health benefits including lowering blood pressure.' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://i0.wp.com/aarogyamastu.in/wp-content/uploads/2022/06/chamomile-green-tea-500x500-1.png?fit=500%2C500&ssl=1' title='Chamomile Tea' classname='Chamomile-Tea' content='Chamomile tea is more than just a calming beverage to consume before bedtime. Chamomile is an herb taken from the flowers of the Asteraceae plant family. Chamomile contains a variety of bioactive phytochemicals, notably flavonoids which function as antioxidants.' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://content.amymyersmd.com/wp-content/uploads/2021/03/Recipe_Anti-Inflammatory-Ginger-Root-Tea.jpg' title='Ginger Tea'
                classname='Ginger-Tea' content="Ginger tea is a herbal beverage that is made from ginger root.Ginger tea is a lovely, lightly spicy drink for warming up on cold days. It's a light, alcohol-free alternative to a night cap. It soothes upset stomachs and eases indigestion if you over-indulge this holiday season (don’t we all?)." />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://4.imimg.com/data4/YT/SF/MY-29646221/nilgiri-tea-500x500.jpg' title='Nilgiris Tea' classname='Nilgiris-Tea' content='Nilgiri tea is known for its briskness, referring to lively fragrant flavours, a quality attributed to its climatic growing conditions. Nilgiri tea is variously described as being light but full-bodied or well-rounded in flavour, with fruit, like citrus, and floral notes.Wanna try it out?' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://hips.hearstapps.com/hmg-prod/images/green-tea-wight-loss-1643990040.jpg?crop=0.665xw:1.00xh;0.291xw,0&resize=1200:*' title='Green Tea' classname='Green-Tea' content='Green tea has one of the highest concentrations of antioxidants of any tea.Green tea as a beverage or dietary supplement is promoted for improving mental alertness, relieving digestive symptoms and headaches, and promoting weight loss.Wanna maintain your health? Had it?' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325242/peppermint-tea.jpg' title='Peppermint Tea' classname='Peppermint-Tea' content='Peppermint leaves contain several essential oils that are released when steeped in hot water, including menthol, menthone and limonene. Collectively, these give peppermint tea its refreshing, cooling, minty taste. Peppermint tea can be made using fresh leaves, dried loose leaves, or teabags.' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/indian-masala-chai-tea.jpg' title='Masala Tea' classname='Masala-Tea' content='Masala Chai is an Indian beverage made by brewing black tea with fragrant spices, sugar and milk.A fragrantly spiced Masala chai that is perfect for breakfast or your evening tea. Masala Chai also known as Masala Tea is a hot beverage made with water, whole spices, black tea powder, sugar and milk.' />
                </div>
                <div className='col-md-4'>
                <TeaElement imgSrc='https://cdn.tarladalal.com/members/9306/big/big_elaichi_tea,__indian_cardamom_tea,_elaichi_chaa-14721.jpg' title='Elaichi Tea' classname='Elaichi-Tea' content='As the name suggests, elaichi chai or cardamom tea literally translates to cardamom flavoured tea. The flavor of the tea is very powerful, it is basically made by brewing black tea leaves with cardamom.A strong cup of cardamom tea is soothing in the morning and welcoming in the evening.' />
                </div>
                    </div>
                </div>
        </div>
    )
}
