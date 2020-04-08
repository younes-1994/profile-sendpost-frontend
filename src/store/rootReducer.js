import { combineReducers } from 'redux';
import ProfileReducers from './Profile';
import PostReducers from './Post';

export default combineReducers({
  ProfileReducers,
  PostReducers,
});