import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SCITS" src="https://www.yellow.com.au/wp-content/uploads/2018/10/YEL160_Jan-Avatar-Grey.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Sciences "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                73% 
              </Typography>
              {" — B Tech Computer Science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ravindra" src="https://thumbs.dreamstime.com/b/businesswoman-character-avatar-icon-businesswoman-character-avatar-icon-illustration-design-89831165.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ravindra Girls Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95%
              </Typography>
              {" — Intermediate studies with maths,physcis and chemistry"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Brilliant" src="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-woman-wearing-blue-t-shirt-bandana-avatar-cartoon-character-149672072.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brilliant Grammar High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               90% 
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}