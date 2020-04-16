import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GridList,GridListTile } from '@material-ui/core';
import img from '../images/image1.jpg'


const useStyles = makeStyles({
  root: {
    maxWidth:200,
    marginLeft:10,
    marginRight:10
  },
  media: {
    height:80,
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
      <Grid container>
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div style={{float:'left', margin:10}}>
            <Typography>Be The First</Typography>
        </div>
        <hr />

        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
        <Typography>$30</Typography>
        </div>
        
      </CardActions>
    </Card>
        </Grid> 
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div style={{float:'left', margin:10}}>
            <Typography>Be The First</Typography>
        </div>
        <hr />

        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
        <Typography>$30</Typography>
        </div>
        
      </CardActions>
    </Card>
        </Grid> 
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div style={{float:'left', margin:10}}>
            <Typography>Be The First</Typography>
        </div>
        <hr />

        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
        <Typography>$30</Typography>
        </div>
        
      </CardActions>
    </Card>
        </Grid> 
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div style={{float:'left', margin:10}}>
            <Typography>Be The First</Typography>
        </div>
        <hr />

        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
        <Typography>$30</Typography>
        </div>
        
      </CardActions>
    </Card>
        </Grid> 
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div style={{float:'left', margin:10}}>
            <Typography>Be The First</Typography>
        </div>
        <hr />
        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
          
        <Typography>$30</Typography>
        </div>
        
      </CardActions>
    </Card>
        </Grid> 
       
      </Grid>
     
  
  );
}
