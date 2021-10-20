import axios from 'axios'


const url = 'http://localhost:5000/tasks';

const fetchTasks = () => axios.get(url);
