import React, {Component} from 'react';

class BuddyBody extends Component {

  render() {
    return (
      <div>
        {this.props.buddies.length === 0 && <div className="nodata">No buddies around you :(</div>}

        {
          this.props.buddies.map((buddy, index) => {
            let dist = buddy.distance;
            let unit = 'm';
            if (dist > 1000) {
              dist = dist/1000; 
              unit = 'km';
            } 
            dist = Number(dist).toFixed(1);
             
            return (
              <div key={index} className="card">
                <div className="card_item">
                  <i className="icon fas fa-user"></i>
                  <p className="name">{buddy.name}</p>
                  <p className="email">{buddy.email}</p>
                </div>
                      
                <div className="card_cta">
                  <div className="dist"><span>{dist}</span> {unit}</div>
                  {
                    buddy.hasWorkout ? 
                      <div className="card_button" onClick={()=> this.props.viewLog(buddy._id)}>View Log</div>
                    :
                      <div className="no_workout">No Log Available</div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default BuddyBody;