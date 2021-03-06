import React from 'react';
import {Link} from 'react-router-dom';

 const Navigation = () => (
   <div>
   <h1>Party Planer</h1>
   <h2>Start planning a party, select your type of party</h2>
   <div class="grid-container">
      <Link to="/quince"><img src="https://i.imgur.com/Pmx44D8.jpg" alt="Quinseañera party theme" /><br/> Quinceañera</Link>
      <Link to="/wedding"><img src="https://i.imgur.com/MzzBCIn.jpg" alt="Weding party theme"  /><br/>Wedding</Link>
      <Link to="/bautizo"><img src="https://i.imgur.com/wIZWczQ.jpg" alt="Bautizo party theme" /><br/>Bautizo</Link>
      <Link to="/kids"><img src="https://i.imgur.com/8zjnqVr.jpg" alt="Kids Party theme" /><br/>Kids Party</Link>
      <Link to="/baby"><img src="https://i.imgur.com/myLivaS.jpg" alt="Baby Showertheme" /><br/>Baby Shower</Link>
      <Link to="/formal"><img src="https://i.imgur.com/MoCFtRl.jpg" alt="Formal Party theme" /><br/>Formal Party</Link>
      <Link to="/random"><img src="https://i.imgur.com/SBWnBH9.jpg" alt="Random party theme" /><br/>Random</Link>
    </div>

   </div>
 )
 export default Navigation;
