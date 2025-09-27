import "./App.css";
import {ColorsMap} from './components/Color'

const webs = [
  {
    name: "Google",
    url: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GCEA_enUA1065UA1065&oq=g&gs_lcrp=EgZjaHJvbWUqEggBEC4YQxjHARjRAxiABBiKBTIGCAAQRRg5MhIIARAuGEMYxwEY0QMYgAQYigUyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMzU5ajBqN6gCCLACAfEF8rQAkaHXEqE&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "ChatGpt",
    url: "https://www.google.com/search?q=chat+gpt&rlz=1C1GCEA_enUA1065UA1065&oq=cha&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgYIAhBFGDwyBggDEEUYQTIGCAQQRRhBMgYIBRBFGEEyBggGEEUYPDIGCAcQRRg80gEHOTYzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Instagram", url: "https://www.google.com/search?q=instagram&rlz=1C1GCEA_enUA1065UA1065&oq=ins&gs_lcrp=EgZjaHJvbWUqDAgCECMYJxiABBiKBTIGCAAQRRg8MgYIARBFGDkyDAgCECMYJxiABBiKBTIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyDAgFEAAYQxiABBiKBTIGCAYQRRg8MgYIBxBFGDzSAQgxOTQxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
  }
];
const name = "Lidiia";
const a = 5
const b = 10
const foto =
  "https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>"Ласкаво просимо до нашого сайту!"</p>
      <p>{a + b}</p>
      <img src={foto} alt="foto" width="200"></img>
      <ul>
        {webs.map(web => {
          return <li>
            <p>Name: {web.name}</p>
            <a href={web.url} target="_blank">{web.name}</a> 
          </li>
        })}
      </ul>

        <ColorsMap />
    </div>
  );
}

export default App;
