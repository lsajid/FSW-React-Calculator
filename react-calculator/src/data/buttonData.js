//keypad will contain all buttons
const buttonData = [
        // ["C", "+-", "%", "/"],
    {display:"C",value:"C", type:"clear"}, 
    {display:"+-", value:"inverse", type:"feature"}, 
    {display:"%", value:"percent", type:"feature"}, 
    {display:"/", value:"divide", type:"operation"}, 

    // ["7", "8", "9", "X"],
    {display:"7", value:"7", type:"number"}, 
    {display:"8", value:"8", type:"number"}, 
    {display:"9", value:"9", type:"number"}, 
    {display:"X", value:"multiply", type:"operation"}, 

    // ["4", "5", '6', "-"],
    {display:"4", value:"4", type:"number"}, 
    {display:"5", value:"5", type:"number"}, 
    {display:"6", value:"6", type:"number"}, 
    {display:"-", value:"subtract", type:"operation"}, 

    // ['1', '2', '3', "+"],
    {display:"1", value:"1", type:"number"}, 
    {display:"2", value:"2", type:"number"}, 
    {display:"3", value:"3", type:"number"}, 
    {display:"+", value:"add", type:"operation"}, 

    // ['0', ".","√ ", "="],
    {display:"0", value:"0", type:"number"}, 
    {display:".", value:"decimal", type:"feature"}, 
    {display:"√ ", value:"radical", type:"feature"}, 
    {display:"=", value:"equal", type:"equal"}, 
  ];

  export default buttonData;