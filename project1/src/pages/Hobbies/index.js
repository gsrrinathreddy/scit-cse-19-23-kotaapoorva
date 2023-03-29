import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.techniajz.com/uploads/blog_images/b5566c43aadeec6f340887ca651217ac-0x0.jpg',
    title: 'Playing Indoor Games',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://bloximages.newyork1.vip.townnews.com/thesuburban.com/content/tncms/assets/v3/editorial/e/40/e40a4a52-87e2-11ea-a04a-3f8d5accb9d1/5ea5c47fa23bc.image.jpg?resize=1500%2C1000',
    title: 'Watching TV',
    
  },
  {
    img: 'https://th.bing.com/th/id/OIP.OUEOR5Jhluu3uzJ529R2pQHaEc?pid=ImgDet&rs=1',
    title: 'Singing',
    
  },
  {
    img:'https://thumbs.dreamstime.com/b/hiker-woman-standing-raised-arms-mountain-freedom-enjoying-beautiful-landscape-summer-49573186.jpg',
    title: 'Traveling',
    
    cols: 2,
  },
  
];