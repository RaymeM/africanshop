import pictureHome from "../../src/photos/Aachen.JPG";
import pictureHome1 from "../../src/photos/african-grocery-store.jpg"

function Home() {
  return (
    <div id="home">
      <h1 className="webTitle">AFROSHOP.de</h1>

      <div className="container">

        <div className="container-child"><p className="homeTexts">How mind-blowing to know that, not only the rest of the world but also Africans still lack knowledge
about the magic of Mother Africa and her potential. From Africa to Germany. The diversity of Africans as nationals, tribes-men, and
ethnic people stamps out the endless cultural, economic, socio-political opportunities. These points, over the years, have proved
to be a force for Africans in the diaspora. Unfortunately, not so many have advent in this void of business and cultural opportunities.
Since "information is power", and the dream of any producer is the fast connection and the ease consumers can access 
their products. Here is Afroshop.de. </p>
        
        </div>

        <div className="container-child">
          <img src={pictureHome} alt="firstShop" class="responsive" width="100%" height="auto"/>
          </div>

        <div className="container-child"> 
        <img src={pictureHome1} alt="firstShop" class="responsive" width="100%" height="auto"/>
        </div>

        <div className="container-child"><p className="homeTexts1">The concept of AfroShops.de is to create a free platform for shop owners, producers, distributors, and in time to come, cultural actioniers.
              The platform is to bring African culture and products to every household in Germany. Braking the old negative concept of Africa, her people 
              and products. So, with a click or two, know where to get African products.
            <br/>
            <br/>
              Disclaimer: no goods or money transactions should be carried out without proper background checks.
              The owners of this site will not be responsible for the lost of your money or goods.
            </p>
             
         
        </div>

      </div>
      
    </div>
  );
}

export default Home;
