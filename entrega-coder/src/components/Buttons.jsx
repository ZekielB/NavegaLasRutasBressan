export default function Buttons({name, color}){

const myStyles = {
backgroundColor:color,
fontFamily: 'Candara',
color: 'white',
fontSize: '30px',

};


return(
<>
<button style={myStyles}>{name}</button>

</>

)

}