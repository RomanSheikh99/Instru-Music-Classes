import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

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
                        <h2 className="text-sm">{title}</h2>
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                        <span className="text-xs">Instructor: {instructor}</span>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        <h3 className="text-base text-yellow-400">$ {fee}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className="text-xs">{description}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Service;