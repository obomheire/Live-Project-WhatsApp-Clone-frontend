const changePasswordReducer = (changePassword = {data: null}, action: any) => {

    switch(action.type){
        case 'CHANGE_PASSWORD':
            // console.log('CHANGE-PASS:', action.data);
            return {...changePassword, data: action.payload}
            // break;
            default:
                return changePassword
    }

}

export default changePasswordReducer