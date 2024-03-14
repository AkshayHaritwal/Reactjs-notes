import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {
    let initialUrl = "https://image.khaleejtimes.com/?uuid=161fb4d5-dc4b-4781-a50f-03877a275841&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.67286&x=0&y=0&width=1200&height=675"
    
    let HOT_URL ="https://img.freepik.com/premium-vector/too-hot-summer-character-heat-stroke-high-temperature-warning-hot-summer-day-vector_432516-2719.jpg?w=2000";
    let COLD_URL = "https://www.khyberhotels.com/blog/wp-content/uploads/2023/10/winter-kashmir-1024x562.jpg";
    let RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8DiZrWiEWR8HYSDuboYvUSesnWbf2TDZUg&usqp=CAU";





    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL :info.temp >15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity >80 ? <ThunderstormIcon/> :info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary " component={"span"}>
            <p>Temperature = {info.temp}&deg; C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg; C</p>
            <p>Max Temp = {info.tempMax}&deg; C </p>
            <p>The Weather can be sescribed as {info.weather} and feels like {info.feelslike} </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}