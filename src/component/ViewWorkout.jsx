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
        exerciseList: [],
        data: {}
    }

    
    componentWillMount() {
        
        axios.get(process.env.REACT_APP_GET_WORKOUT_URL + '?user_id=5cc94f1112c41412abe3a553&start=2019-05-01&end=2019-05-13')
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
        })

        const exercise = this.state.exerciseList[0]
        console.log('first', this.state.exerciseList[0])
        this.filterByExercise(exercise)
        this.chartFilter()




        
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

    }

    chartFilter = () => {

        // Sort By Date
        this.state.chartExercise.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0));

        //add Intensity

        this.state.chartExercise.map(chart => chart.intensity = (chart.set * chart.reps *chart.weight))

        // map
        var dates = this.state.chartExercise.map(chart => (moment(chart.start).format('DD MMM')))
        var intensity = this.state.chartExercise.map(chart => (chart.intensity))

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
                borderWidth: 1
            }]
        }
        this.setState({data})
        console.log('working?', this.state)
        }

    render() {
        return (
            <div className="container-view">
                <DailyWorkout filterWorkout={this.state.filterWorkout} filterByDate={this.filterByDate}></DailyWorkout>
                <div className="svg"></div>
                <SelectChart exerciseList={this.state.exerciseList} chartExercise={this.state.chartExercise} filterByExercise={this.filterByExercise} chartFilter={this.chartFilter} data={this.state.data}> </SelectChart>
            </div>
        );
    }
}

export default ViewWorkout;