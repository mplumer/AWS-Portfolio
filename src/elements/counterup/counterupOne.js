import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterupOne extends Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }

    render() {
        let Data = [
            {
                countNum : 95,
                countTitle: 'Web Development',
            },
            {
                countNum : 85,
                countTitle: 'Brand Identity',
            },
            {
                countNum : 70,
                countTitle: 'Adobe Photoshop',
            },
            {
                countNum : 75,
                countTitle: 'Adobe Illustrator',
            },
            {
                countNum : 60,
                countTitle: 'JavaScript',
            },
            {
                countNum : 59,
                countTitle: 'CSS & PHP',
            },
            {
                countNum : 89,
                countTitle: 'WordPress',
            }
        ];
        return (
            <ul className="counter-box">
                {Data.map((value, index) => (
                    <li key={index}>
                        <div className="inner">
                            <span className="description">{value.countTitle}</span>
                            <label className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>%
                            </label>
                        </div>
                    </li>
                ))}
            </ul>

        )
    }
    
}

export default CounterupOne;