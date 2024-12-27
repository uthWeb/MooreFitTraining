import "./CardContainer.css"
import Card from "./Card";


function CardContainer(){





    return (<>

    <div id = "target-section">

    <div className="header">
    <h1 className ="N">Peak Performance Plans</h1>

    </div>
        

    
    <div className="container" >
   


    <Card title= "Online personal training " desc= {

        <>

        With this package you will be provided with  <br /> -Customized workout plan  <br /> -Pre recorded workouts  <br />  -Feedback and guidance with training in live time
        </>
    }></Card>


<Card title= "Nutritional guidance " desc= {

<>

With this package you will be provided with  <br /> -Macro tracking  <br /> -Calorie tracking  <br />  -Tips for eating a clean healthy diet.


</>
}></Card>


<Card title= "1 on 1 coaching " desc= {

<>

With this package you will be provided with <br/>  -Me being there with you every step of the way for 1 on 1 coaching and support.


</>
}></Card>


    

    

    

    </div>


    </div>

   

       

    </>)
}


export default CardContainer;