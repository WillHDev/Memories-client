import * as api from '../components/api/index';

export const getTasks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchTasks();
        dispatch({ type: 'FETCH_ALL', payload: data }); 
    } catch (error) {
        console.log(error.message)
    }
}