import {passwordCurryCheck} from './validateSignupForm'

it("return empty error object",()=>{
    //GIVEN
    let defaultState = {username:"ewew",password1:"meat",password2:"meat"}

    //WHEN
    const errors = passwordCurryCheck(defaultState)(defaultState)
 
    //THEN
    expect(Object.keys(errors).length).toEqual(0);
})

it("should return error object with one value",()=>{
    //GIVEN
    let defaultState = {username:"ewew",password1:"meat",password2:"meaDDt"}

    //WHEN
    const errors = passwordCurryCheck(defaultState)(defaultState)

    //THEN
    expect(Object.keys(errors).length).toEqual(1);
})

it("return empty error object without passwords",()=>{
    //GIVEN
    let defaultState = {username:"ewew"}

    //WHEN
    const errors = passwordCurryCheck(defaultState)(defaultState)

    //THEN
    expect(Object.keys(errors).length).toEqual(0);
})


