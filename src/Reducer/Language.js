import { LANGUAGE_DATA } from 'Contants';

export default (state=[], action) =>{
        switch(action.type){
            case LANGUAGE_DATA:
                return action.selected;
            default:
                return state
        }
}