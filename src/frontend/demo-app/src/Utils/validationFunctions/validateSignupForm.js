
const validationFunction =(state)=>{
    
    const keys = Object.keys(state)

    const errors ={}

    keys.map(item =>{
        if(!state[item]){
            if(item === "password2"){
                errors[item] = "Please confirm  your password " 
            }
            else if(item === "password1"){
                errors[item] = "Please enter a password" 
            }else{
                errors[item] = "Please enter a " + item
            }
            
        }
    })
    return errors

}


function passwordCurryCheck(state){
    const errors = validationFunction(state)

    return function(state){
        if(state.password1 !== state.password2){
            errors.passwordMatch = "Passwords do no match";
        }
        return errors
    }

}








export  {validationFunction,passwordCurryCheck}