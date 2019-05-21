import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
import axios from 'axios';
import _ from 'lodash';
import '../css/SearchBar.css'
import AuthHelperService from '../service/AuthHelperService';

// const exercises = [
//     {
//       _id: 1,
//       name: 'Bench Press',
//     },
//     {
//       _id: 2,
//       name: 'Shoulder Press',
//     },
//     {
//       _id: 3,
//       name: 'Lat Pulldown',
//     },
//     {
//       _id: 4,
//       name: 'Squat',
//     },
//     {
//       _id: 5,
//       name: 'Lunges',
//     },
//     {
//       _id: 6,
//       name: 'Barbel Row',
//     },
//     {
//       _id: 7,
//       name: 'Dumbell Row',
//     },
//     {
//       _id: 8,
//       name: 'Biceps Curl',
//     },
//     {
//       _id: 9,
//       name: 'Triceps Extension',
//     },
//     {
//       _id: 10,
//       name: 'One Arm Row',
//     },
//     {
//       _id: 11,
//       name: 'Pec Fly',
//     },
//     {
//       _id: 12,
//       name: 'Lateral Raise',
//     },
//     {
//       _id: 13,
//       name: 'Cable Row',
//     },
//     {
//       _id: 14,
//       name: 'Dumbell Curl',
//     }
//   ];

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
  
//function getSuggestions(value) {
//     const escapedValue = escapeRegexCharacters(value.trim());
    
//     if (escapedValue === '') {
//         return [];
//     }
  
//     const regex = new RegExp('^' + escapedValue, 'i');
  
//     return exercises.filter(exercise => regex.test(exercise.name));
//}
  
function getSuggestionValue(suggestion) {
    return suggestion.name;
}
  
function renderSuggestion(suggestion, { query }) {
    const matches = AutosuggestHighlightMatch(suggestion.name, query);
    const parts = AutosuggestHighlightParse(suggestion.name, matches);
  
    return (
        <span>
            {parts.map((part, index) => {
                const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;
                return (
                    <span className={className} key={index}>{part.text}</span>
                );
            })}
        </span>
    );
  }

class SearchBar extends Component {
    constructor() {
      super();

      this.Auth = new AuthHelperService();

      this.state = {
          task: {},
          value: '',
          suggestions: [],
          selected: ''
      }

      this.debouncedLoadSuggestions = _.debounce(this.loadSuggestions, 500);
    }

    loadSuggestions(value) {
      
        const tokenStr = this.Auth.getToken();

        axios.get(process.env.REACT_APP_API_PROD_URL + `/api/exercise?search=${value}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
          .then(response => {
            console.log('response', response);
            this.setState({ suggestions: response.data })
          })
          .catch(error => {
            console.log('error', error);
          });
    }

    onChange = (event, { newValue }) => {
        this.setState({value: newValue});
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.debouncedLoadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
    };

    onSuggestionSelected = (event,  { suggestion, suggestionValue}) => {
        console.log('onSuggestionSelected', suggestion);
        this.props.selectExercise(suggestion);
        this.setState({value: ''});
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Type exercise name...',
            value,
            onChange: this.onChange
        };

        return (
            <div className='content'>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    onSuggestionSelected={this.onSuggestionSelected}
                />
            </div>
        );
    }
}

export default SearchBar;