import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import NavProject from "../components/nav-project";
import Footer from "../components/footer";

import Background1 from "../images/Search/background-1.png";
import Background2 from "../images/Search/background-2.png";

import ProblemOne1 from "../images/Search/prob-1-1.png";
import ProblemOne2 from "../images/Search/prob-1-2.png";
import ProblemOne3 from "../images/Search/prob-1-3.png";
import ProblemOne4 from "../images/Search/prob-1-4.png";
import ProblemOne5 from "../images/Search/prob-1-5.png";

import ProblemTwo1 from "../images/Search/prob-2-1.png";
import ProblemTwo2 from "../images/Search/prob-2-2.png";
import ProblemTwo3 from "../images/Search/prob-2-3.png";
import ProblemTwo4 from "../images/Search/prob-2-4.png";

import ProblemThree1 from "../images/Search/prob-3-1.png";
import ProblemThree2 from "../images/Search/prob-3-2.png";
import ProblemThree3 from "../images/Search/prob-3-3.png";
import ProblemThree4 from "../images/Search/prob-3-4.png";
import ProblemThree5 from "../images/Search/prob-3-5.png";
import ProblemThree6 from "../images/Search/prob-3-6.png";
import ProblemThree7 from "../images/Search/prob-3-7.png";

import FollowUp from "../images/Search/follow-up.png";





const ProjSearch = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Colorizer
        hex= '#ffffff'
      />
      <NavProject
        project="video"
      />
      <main className="project-wrapper">
        <div className="text-section hero-section">
          <div className="text-section-title"> 
            <h2>Search: A clarified, data-driven, mobile first update</h2>
            <p className="display medium text-alt">GoodRx | Design lead | 2 months</p>
          </div>
          <div className="project-image hero-image">
            <img src={ProblemThree7} alt="hero"/>
          </div>
        </div>
        <div className="text-section">
          <p className="display medium">Distinguishing result types was difficult, searching on mobile was strenuous, and recommendations were confusing. I systematized result types into digestible list items, constructed a full screen search experience on mobile, and crafted a data-driven approach for surfacing prior search history.</p>
        </div>
        <div className="text-section">
          <h4>Background</h4>
          <p className="body">GoodRx is a platform that offers discounts at pharmacies for medications. A user types in their prescription, configures details, browses pharmacy prices, and gets a coupon to show the pharmacist.</p>
          <div className="project-image">
            <img src={Background1} alt="how goodrx works"/>
          </div>
          <p className="body">Provider Mode was a variant of the regular website built to give a streamlined experience for healthcare professionals who look up prices on their patients behalf. During the teams effort to get doctors to their commonly prescribed medications quickly, our homepage became cluttered with duplicative information about their search trends. Additionally, a redesign was underway to consolidate information and provide real estate for the product to grow into. The primary goal was still to perform a search.</p>
          <div className="project-image">
            <img src={Background2} alt="provider mode home"/>
          </div>
          <p className="body">When I dove into making search great for Provider Mode, I saw an opportunity to meet short term needs, but also benefit the larger web experience for millions of other users.</p>
        </div>
        <div className="text-section">
          <h4>Problem 1: Differentiating Results</h4>
          <p className="body">GoodRx has 3 types of results that can appear for a given search string:</p>
          <p className="body"><span className="bold">Medication: </span>This result leads to a page where information about a medication lives such as pricing, warnings, and articles.</p>
          <p className="body"><span className="bold">Class: </span>A collection of medications similar in composition or function. This result opens a page for users to look at the collection of medications belonging to the same class and their prices.</p>
          <p className="body"><span className="bold">Condition: </span>This result opens a page for users to look at a list of medications that treat a particular condition and their prices.</p>
          <div className="project-image">
            <img src={ProblemOne1} alt="result types"/>
          </div>
          <p className="body">When searching on web, these 3 types all look similar yet have different destinations. On the mobile app, the results are sectioned into their types, but this fails to take into account relevancy — something important if we want to reduce the amount of labor required to find a result. Sometimes the most relevant result is a class or condition but hidden by a list of medications covering up the viewport.</p>
          <div className="project-image">
            <img src={ProblemOne2} alt="current search experience"/>
          </div>
          <div className="project-image">
            <img src={ProblemOne3} alt="app search experience"/>
          </div>
        </div>
        <div className="text-section">
          <h4>A new result system</h4>
          <p className="body">Our medications and conditions have their own referenced illustrative icons. They look great on their own, but wouldn’t be helpful for distinguishing between types.</p>
          <p className="body">For ensuring consistency and digestibility I chose to consolidate the hundreds of illustrative icons into a single interface icon for the result type. This let us pull in classes to the same system (which lacked icons) and get back to our true goal — differentiation between types.</p>
          <div className="project-image">
            <img src={ProblemOne4} alt="icons"/>
          </div>
          <p className="body">Given that most users come to search for medications, I saw an opportunity to include expectation setting and discovery of the other two categories: class and condition. The description helps educate users on what kind of experience this result will drop them off at since those pages have less traffic than medication pages. Our health team was excited about updates to differentiation as well since it created a clearer path into condition pages where we had an opportunity to strengthen our value via industry leading health content.</p>
          <div className="project-image">
            <img src={ProblemOne5} alt="result types"/>
          </div>
        </div>
        <div className="text-section">
          <h4>Problem 2: Mobile performance</h4>
          <p className="body">Provider mode only existed on the web and half of those users were using mobile devices. I took an in depth look at how things worked both on the interface level and under the hood. A few of the issues I found were 1. limited number of results 2. small touch targets 3. extra taps required to open keyboard, and 4. distracting content underneath result list.</p>
          <div className="project-image">
            <img src={ProblemTwo1} alt="homepage search"/>
          </div>
          <div className="project-image">
            <img src={ProblemTwo2} alt="nav search"/>
          </div>
        </div>
        <div className="text-section">
          <h4>Meet the new mobile</h4>
          <p className="body">We knew that once a provider told us they wanted to search for something (clicked on a button or field) it didn’t make sense to also show them the page content. With such little real estate to work with, every pixel mattered to us if we wanted to help them see more + focus on the results.</p>
          <p className="body">The new full page experience focused on the field immediately upon activation, and provided ample room for each result to be tapped while keeping more results in the initial viewport.</p>
          <div className="project-image">
            <img src={ProblemTwo3} alt="top phone"/>
          </div>
          <div className="project-image">
            <img src={ProblemTwo4} alt="new search"/>
          </div>
        </div>
        <div className="text-section">
          <h4>Problem 3: Repetitive use</h4>
          <p className="body">So far we’ve fixed a bit of the tactical issues with performing a search, but let’s think about just getting a user to a medication they want when they arrive. Not even having to type would be even better right?</p>
          <p className="body">Let’s say we have a list of all the medications a user has searched for. If we had to make a guess of what medication they were trying to get to when they arrived, what do we think it would be? The best percentage chance we have is to sort their searches by number of times searched per medication and pick the top result. This also gives us a curve of confidence in the guess.</p>
          <div className="project-image">
            <img src={ProblemThree1} alt="confidence of guess"/>
          </div>
          <p className="body">A lot of teams around the company (including us) used recent search data to limit the manual searches, but isn’t good at guessing correctly on a consistent basis over a long period.</p>
          <div className="project-image">
            <img src={ProblemThree2} alt="recent searches"/>
          </div>
          <p className="body">Top searches however were built just for our power users coming back again and again to type in the same term. We took the top 6 medications in your search history and surfaced them on the homepage.</p>
          <div className="project-image">
            <img src={ProblemThree3} alt="top searches"/>
          </div>
          <p className="body">The downside was we displayed both recent search chips and a table of top searches at the same time in competing space. They were duplicative experiences, presented two different ways, with duplicative data in them. We wanted to help doctors search on our new homepage, but didn’t want it to become only about search.</p>
          <div className="project-image">
            <img src={ProblemThree4} alt="provider home"/>
          </div>
        </div>
        <div className="text-section">
          <h4>Data driven experience</h4>
          <p className="body">We decided to use the method above and implement that into the flow of our search experience. When a user comes to the homepage, they can immediately see the top medications they visit. There is no action required to populate this list, and will become more curated over time.</p>
          <div className="project-image">
            <img src={ProblemThree5} alt="top search ui"/>
          </div>
          <p className="body">If the doctor decides they are looking for something else, our next best guess is something they searched for earlier. This information makes sense as an empty state for the search results so they can tap on them instead of typing, and doesn’t compete with top searches.</p>
          <div className="project-image">
            <img src={ProblemThree6} alt="recent search ui"/>
          </div>
          <p className="body">Lastly, if a user is looking for something not in top or recent searches, they can simply use the keyboard already focused on the search field to type. The search results replace the recent searches list.</p>
          <div className="project-image">
            <img src={ProblemThree7} alt="search steps"/>
          </div>
        </div>
        <div className="text-section">
          <h4>Outcome</h4>
          <p className="body">15% increase in search result selection after typing just one character (mobile)</p>
          <p className="body">Increase in coupon usage (increased downstream revenue)</p>
          <p className="body">Decrease in search dropoff</p>
        </div>
        <div className="text-section">
          <h4>Follow ups</h4>
          <p className="body">Although the work was successful, there was still areas to improve. We still operated under the top search cutoff being set at 6. In order to make the recommendations on the homepage even stronger, further evaluation is needed to determine where the diminishing returns occur. On the same note of the homepage, we’re helping a doctor get to their first medication in mind, but haven’t considered the navigation from medication to medication. This is where the largest time save for our users will occur since price can have an impact on what a doctor prescribes for their patient.</p>
          <div className="project-image">
            <img src={FollowUp} alt="concept"/>
            <p className="meta text-alt center">Concept for switching between and comparing medications</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSearch