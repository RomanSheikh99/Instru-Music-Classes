import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

// service components
const Service = (props) => {
    const {title,fee, instructor, image, description} = props.course
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <h2 className="text-sm font-poppins font-bold">{title}</h2>
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                        <span className="text-xs font-poppins">Instructor: {instructor}</span>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        <h3 className="text-base text-yellow-400 font-poppins font-bold">$ {fee}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className="text-xs font-poppins">{description}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Service;