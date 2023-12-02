import Svg, {Path} from 'react-native-svg'

const Wave = () => {
    return(
        <Svg style={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <Path fill="#D81E5B" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,256C384,277,480,235,576,224C672,213,768,235,864,224C960,213,1056,171,1152,133.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></Path>
        </Svg>
    )
}

const styles = {
    wave: {
        position: "absolute",
        top: 400,
        zIndex: -2
    }
}

export default Wave;