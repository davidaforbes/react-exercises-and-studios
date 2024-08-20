export default function HobbyLinks() {
    let hobbyLinks = ["https://boardgamegeek.com","https://store.steampowered.com"];

      return (
      <div>
         <h3>My Hobbies</h3>
         <ol>
            <a href = {hobbyLinks[0]} target = "blank">Board Game Geek </a> <br></br>
            <a href = {hobbyLinks[1]} target = "blank">Steam </a>
        </ol>
      </div>
      );
   }