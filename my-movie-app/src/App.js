import './App.css';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import MovieCard from './Component/MovieCard';
import Notebook from './Component/Images/Notebook.jpg';
import CrazyRichAsians from './Component/Images/CrazyRichAsians.png';
import Fifty from './Component/Images/Fifty.jpg';
import Pride from './Component/Images/Pride.jpg';
import Hitch from './Component/Images/Hitch.jpg';



const data = [
  {
    id: 1,
    title: "The Notebook",
    image: Notebook,
    synopsis: "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over.",
  },  

  {
    id: 2,
    title: "Crazy Rich Asians",
    image: CrazyRichAsians,
    synopsis: "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.",
  }, 

  {
    id: 3,
    title: "50 Fisrt Dates",
    image: Fifty ,
    synopsis: "Playboy vet Henry sets his heart on romancing Lucy, but she has short-term memory loss; she can't remember anything that happened the day before. So every morning, Henry has to woo her again. Her friends and family are very protective, and Henry must convince them that he's in it for love.",
  }, 

  {
    id: 4,
    title: "Pride & Prejudice",
    image: Pride,
    synopsis: "In this adaptation of Jane Austen's beloved novel, Elizabeth Bennet (Keira Knightley) lives with her mother, father and sisters in the English countryside. As the eldest, she faces mounting pressure from her parents to marry. When the outspoken Elizabeth is introduced to the handsome and upper-class Mr. Darcy (Matthew MacFadyen), sparks fly. Although there is obvious chemistry between the two, Darcy's overly reserved nature threatens the fledgling relationship.",
  }, 

  {
    id: 5,
    title: "Hitch",
    image: Hitch,
    synopsis: "Dating coach Alex Hitchens (Will Smith) mentors a bumbling client, Albert (Kevin James), who hopes to win the heart of the glamorous Allegra Cole (Amber Valletta). While Albert makes progress, Hitchens faces his own romantic setbacks when proven techniques fail to work on Sara Melas (Eva Mendes), a tabloid reporter digging for dirt on Allegra Cole's love life. When Sara discovers Hitchens' connection to Albert -- now Allegra's boyfriend -- it threatens to destroy both relationships.",
  }, 
]



function App() {
  return (
    <div className="App">

        <NavBar />
        <Header />
        {data.map(movie => <MovieCard key={movie.id} title={movie.title} image={movie.image} synopsis={movie.synopsis}/>)}
   </div>
  );
}

export default App;
