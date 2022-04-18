import React,{useEffect,useState} from 'react';
import { formLoadingStates } from '../Utils/Constants/loadingStates';
import { useNavigate } from 'react-router-dom'


const useFormHook =(validationFunction,startingState,apiCall,defaultLoadingStatus,url,httpMethod,redirect,redirectLocation)=>{
    const [state,setState] = useState(startingState)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [errors,setErrors] = useState({})
    const [status,setStatus] = useState(defaultLoadingStatus)
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        setErrors(validationFunction(state)(state))
        setIsSubmitting(true);
    }

    const handleChange=(e)=>{
        const {value,name} = e.target
        setState({...state,[name]:value})
    }

    useEffect(()=>{
        
        if(isSubmitting && Object.keys(errors).length===0){
            setStatus({loadingState:formLoadingStates.LOADING,message:"Loading"})
            apiCall(url,httpMethod,state,{headers:state})
            .then(response=>{
                if(redirect){
                    
                    sessionStorage.authorization = response.headers.authorization
                    navigate(redirectLocation)
                }else{
                    
                    setStatus({loadingState:formLoadingStates.SUCCESS,message:response.data})
                }
                
            })
            .catch(error=>{
                
                setStatus({loadingState:formLoadingStates.FAIL,message:error.message})
            })
        }
        setIsSubmitting(false)
    },[isSubmitting])


    return{
        state,
        errors,
        status,
        handleChange,
        handleSubmit

    }
}


export default useFormHook;