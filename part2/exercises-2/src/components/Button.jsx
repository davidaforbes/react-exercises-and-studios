import './styles.css';

function Button() {
 function onLearnMore() {
   alert ('“Slipsh Splash” or something related to the ocean or water.')
 };
   return ( 
         <button onClick = {onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;