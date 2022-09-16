import * as api from '../../api'
import { notifyUser } from '../../utils'

type UserForm = {
    oldpassword: string,
    password: string,
    passConfirm: string
  }

export const changePassword = (formData: UserForm) => async (dispatch: any) => {
    try{
        const { data } = await api.fetchChangePassword(formData)

        dispatch({ type: 'CHANGE_PASSWORD', data})

        notifyUser(`${data}`, 'Please wait...' , 'success', '/Home')

    }catch(error: any){

        notifyUser('Opps! Request failed', `${error.response.data}`, 'error', 'error')

    }
}