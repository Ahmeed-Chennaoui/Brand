import React from 'react'
import { useTheme } from '@mui/material/styles';
import {
    Card,
    Paper,
    Typography,
    Box
} from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const SearchResults = ({items}) => {
    const theme = useTheme();
  return (
    <React.Fragment>
    {
        items.map( (el) =>
            <Card 
            key={el.id}
            sx={{ maxWidth: 200, flexGrow: 1 }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    src={el.imgs[0]}
                />
                <Paper
                    square
                    elevation={0}
                >
                    <Typography>{el.titre}</Typography>
                    <Typography>{el.description}</Typography>
                </Paper>
            </Card>
        )
    }
    </React.Fragment>
  )
}
export default SearchResults