import React, {Component} from 'react';
import axios from 'axios';
import WithAuth from '../service/WithAuth';

import SelectChart from './SelectChart';
import DailyWorkout from './DailyWorkout';
import moment from 'moment';
import AuthHelperService from '../service/AuthHelperService';
import Header from './Header';
import Nav from './Nav';




class ViewWorkout extends Component {
    Auth = new AuthHelperService();
    state = {
        workouts: [],
        date: moment().format('YYYY-MM-DD'),
        filterWorkout: [],
        chartExercise: [],
        exerciseList: [],
        data: {},
        selectedExercise: ''
    }

     componentWillMount() {

        const tokenStr = this.Auth.getToken();
        
        axios.get(process.env.REACT_APP_GET_WORKOUT_URL , { headers: {"Authorization" : `Bearer ${tokenStr}`}})
        .then(response => {
        let workouts = response.data
        let workoutDate = response.data.start
        console.log('property', moment(workoutDate).format('YYYY-MM-DD'))
        this.setState({workouts})
        console.log('workouts', this.state.workouts)

        this.setState({workouts}, function(){

           const now = moment().format('YYYY-MM-DD')
           const filterWorkout = this.filterByDate(now)

           const exercises = this.state.workouts.map((workout) => {
                return workout.name
           })

           const exercisesSet = [...new Set(exercises)]
           this.setState({exerciseList:exercisesSet},  function(){
            const exercise = this.state.exerciseList[0]
            this.filterByExercise(exercise)
            })
        })
        console.log('list', this.state.exerciseList)
        })
        .catch(error => {
        console.log('error', error);
        });   
    }

    filterByDate = (start) =>
    {
        console.log(start)
        const filterWorkout = this.state.workouts.filter((workout) =>{
        let date = moment(start).format('YYYY-MM-DD')
        let today = moment(workout.end).local().format('YYYY-MM-DD')

        return date === today
    
    })
    this.setState({filterWorkout})
    }

    filterByExercise = (exercise) =>
    {
        const chartExercise = this.state.workouts.filter((workout) =>{
        let workoutExercise = workout.name

        return exercise === workoutExercise
        })
        console.log('weight', chartExercise)
   
        
        chartExercise.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0))
        
        chartExercise.map(chart => chart.intensity = (chart.set * chart.reps * chart.weight))
        console.log('chart Exercise', chartExercise)
        var dates = chartExercise.map(chart => (moment(chart.start).format('DD MMM')))
        var intensity = chartExercise.map(chart => (chart.intensity))

        const data = {
            labels: dates,
            datasets: [{
                label: 'Training Intensity',
                data: intensity,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        }
        this.setState({selectedExercise:exercise, data})
        console.log('data', this.state.data)
    }


    render() {
        return (
            <div>
                <Header isLoggedIn={true}/>
                
                <div className="container-view">
                    <DailyWorkout filterWorkout={this.state.filterWorkout} filterByDate={this.filterByDate}></DailyWorkout>
                    <div className="svg"></div>
                    <SelectChart selectedExercise={this.state.selectedExercise} exerciseList={this.state.exerciseList} filterByExercise={this.filterByExercise} data={this.state.data}> </SelectChart>
                </div>
                <Nav></Nav>
            </div>


        );
    }
}

export default WithAuth(ViewWorkout);