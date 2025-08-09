import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';


export default function InfoBox({ info }) {
    const weather = info.weather?.toLowerCase();
    const temp = info.temp;
    const humidity = info.humidity;

    let weatherImage = "";

    if (weather.includes("thunderstorm")) {
        weatherImage = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d";
    } else if (weather.includes("snow") || temp <= 2) {
        weatherImage = "https://images.unsplash.com/photo-1608889175118-3583f2706eb9";
    } else if (weather.includes("rain") || weather.includes("drizzle")) {
        weatherImage = humidity >= 90
            ? "https://images.unsplash.com/photo-1526676031057-85f66f163b33"
            : "https://images.unsplash.com/photo-1532990381745-ccb9a79a5813";
    } else if (weather.includes("clouds")) {
        weatherImage = humidity >= 70
            ? "https://images.unsplash.com/photo-1499346030926-9a72daac6c63"
            : "https://images.unsplash.com/photo-1502082553048-f009c37129b9";
    } else if (weather.includes("haze") || weather.includes("mist") || weather.includes("fog")) {
        weatherImage = "https://images.unsplash.com/photo-1502082553048-f009c37129b9";
    } else if (weather.includes("smoke")) {
        weatherImage = "https://images.unsplash.com/photo-1517586979033-45bb2c87f9f8";
    } else if (weather.includes("dust") || weather.includes("sand")) {
        weatherImage = "https://images.unsplash.com/photo-1585924798370-e4ec20a7d568";
    } else if (weather.includes("clear")) {
        if (temp > 35) {
            weatherImage = "https://images.unsplash.com/photo-1594897030269-8a46d2c0794b";
        } else if (temp < 10) {
            weatherImage = "https://images.unsplash.com/photo-1608889175118-3583f2706eb9";
        } else {
            weatherImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
        }
    } else {
        weatherImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb"; // default
    }

    return (
        <div className="InfoBox">
            <h3>Weather Info</h3>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: 3, boxShadow: 4 }}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={weatherImage}
                        alt={info.weather}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <p>🌡️ Temperature: {info.temp}&deg;C</p>
                            <p>💧 Humidity: {info.humidity}%</p>
                            <p>🌡️ Feels Like: {info.feels_like}&deg;C</p>
                            <p>🌥️ Weather: {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
