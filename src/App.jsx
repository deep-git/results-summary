import './App.css';
import data from "./utils/data.json";
import SectionType from "./components/SectionType.jsx";

function App() {

  return (
    <div className="outer_container">
      <main className="main_card_container">
        <section className="left_result_container">
          <h1>Your Result</h1>

          <div className="score_container">
            <p>76</p>
            <p>of 100</p>
          </div>

          <h2 className="score_text">Great</h2>

          <p className="score_description">You scored higher than 65% of the people who have taken these tests.</p>
        </section>

        <section className="right_summary_container">
          <h2>Summary</h2>
          <div> 
            {data && data.map((item) => (
              <SectionType key={item} category={item.category} score={item.score} icon={item.icon}/>
            ))}
          </div>
          <button className="continue_container">Continue</button>
        </section>
      </main>
    </div>
  )
}

export default App;
