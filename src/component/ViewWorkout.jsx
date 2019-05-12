import React, {Component} from 'react';
import axios from 'axios';
import SelectChart from './SelectChart';
import DailyWorkout from './DailyWorkout';
import moment from 'moment';



class ViewWorkout extends Component {
    state = {
        workouts: [],
        date: moment().format('YYYY-MM-DD'),
        filterWorkout: [],
        chartExercise: [],
        exerciseList: []
    }

    
    componentWillMount() {
        
        axios.get(process.env.REACT_APP_GET_WORKOUT_URL + '?user_id=5cc94f1112c41412abe3a553&start=2019-05-07&end=2019-05-12')
        .then(response => {
        console.log('response',response);
        let workouts = response.data
        let workoutDate = response.data.start
        console.log('response.data', workouts)
        console.log('property', moment(workoutDate).format('YYYY-MM-DD'))
        this.setState({workouts})
        console.log('workouts', this.state.workouts)

        this.setState({workouts}, function(){
        //    const exerciseList = this.exerciseIndex()
        //    console.log('exerciselIst', this.state.exerciseList)

           const now = moment().format('YYYY-MM-DD')
           const filterWorkout = this.filterByDate(now)
           console.log('filterWorkout', filterWorkout)

           const exercises = this.state.workouts.map((workout) => {
                return workout.name
           })

           const exercisesSet = [...new Set(exercises)]
           console.log({exercises})
           console.log({exercisesSet})
          this.setState({exerciseList:exercisesSet})


           const exercise = 'Bench Press'
           const chartExercise = this.filterByExercise(exercise)
           console.log('filterex', chartExercise)
        })




        
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
        console.log('exercise', exercise)
        let workoutExercise = workout.name

        return exercise === workoutExercise
    
    })
    this.setState({chartExercise})
    console.log('filterex', chartExercise)

    }

    render() {
        return (
            <div className="container-view">
                <h1>Workout Log</h1>
                <DailyWorkout filterWorkout={this.state.filterWorkout} filterByDate={this.filterByDate}></DailyWorkout>
                <h4>Check your exercise progress</h4>
                <SelectChart exerciseList={this.state.exerciseList} chartExercise={this.state.chartExercise} filterByExercise={this.filterByExercise}> </SelectChart>
            </div>
        );
    }
}

export default ViewWorkout;