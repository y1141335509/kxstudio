import React, { useState } from 'react';
import { Container, Box, Typography, Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface SideNavProps {
  onSelectCountry: (country: string) => void;
}

interface CarouselSectionProps {
  selectedCountry: string;
}

interface Character {
  id: number;
  name: string;
  image: string;
  country: string;
  description: string;
}




// Mock data for countries and characters
const countries = ['Japan', 'USA', 'China', 'France', 'Egypt'];
const characters = [
  { id: 1, name: 'Character 1', image: 'https://uploadstatic.mihoyo.com/contentweb/20220208/2022020814003845991.png', country: 'Japan', description: 'Description 1' },
  { id: 2, name: 'Character 2', image: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/fdcbc9ef8859b7077d92ae38d925e15e_7767077963502328666.png', country: 'Japan', description: 'Description 2' },
  { id: 3, name: 'Character 3', image: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/b51565c6f1298e534e90b6e63332e9c1_6618231443033589469.png', country: 'USA', description: 'Description 3' },
  { id: 4, name: 'Character 4', image: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png', country: 'USA', description: 'Description 4' },
  { id: 5, name: 'Character 5', image: 'https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/d35a0a1d13f821fd55a6951210c672ac_8868204139408761896.png', country: 'China', description: 'Description 5' },
  { id: 6, name: 'Character 6', image: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/01d9b164e0de2611c84ccdec5b84ced8_4841535305526345122.png', country: 'China', description: 'Description 6' },
  { id: 7, name: 'Character 7', image: 'https://fastcdn.mihoyo.com/content-v2/hk4e/123893/c3f7661378c0cfa11ab2cc2a9bd09c5e_4714225803080593226.png', country: 'France', description: 'Description 7' },
  { id: 8, name: 'Character 8', image: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/c765b3ba5e3b25ce6e8afd3e758251a8_741046217554426529.png', country: 'France', description: 'Description 8' },
  { id: 9, name: 'Character 9', image: 'https://webstatic.mihoyo.com/upload/contentweb/2023/01/10/1f3bc8199884ff93a04e713809e4aef3_66257121119188218.png', country: 'Egypt', description: 'Description 9' },
  { id: 10, name: 'Character 10', image: 'https://webstatic.mihoyo.com/upload/contentweb/2023/03/15/4f486ee9943936bb8d8a8ebc9c9df9b2_964302051434856950.png', country: 'Egypt', description: 'Description 10' },
  // Add more characters as needed
];

function SideNav({ onSelectCountry }: SideNavProps) {
  return (
    <List>
      {countries.map((country) => (
        <ListItem key={country} disablePadding>
          <ListItemButton onClick={() => onSelectCountry(country)}>
            <ListItemText primary={country} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

function CarouselSection({ selectedCountry }: CarouselSectionProps) {
  const filteredCharacters = characters.filter(char => char.country === selectedCountry);

  console.log("Selected Country:", selectedCountry); // Debugging output
  console.log("Filtered Characters:", filteredCharacters); // See what characters are filtered

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: (i: number) => (
      <img src={filteredCharacters[i].image} alt={filteredCharacters[i].name} style={{ width: 50 }} />
    ),
    dotsClass: 'slick-dots custom-dots'
  };

  return (
    <Box sx={{ width: '100%', py: 4, marginTop: '2em' }}>
      <Slider {...settings}>
        {filteredCharacters.length > 0 ? filteredCharacters.map(character => (
          <div key={character.id}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: 424 }}>
              <Box sx={{ marginLeft: '6em', marginRight: '3em' }}>
                <Typography variant="h5">{character.name}</Typography>
                <Typography>{character.description}</Typography>
              </Box>
              <img src={character.image} alt={character.name} style={{ width: 375, height: 400 }} />
            </Paper>
          </div>
        )) : <Typography>No characters found for this country.</Typography>}
      </Slider>
    </Box>
  );
}


function CharacterPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('Japan'); // Default selection

  console.log("Page rendering with country:", selectedCountry); // Debug output

  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Box sx={{ width: '20%', minWidth: '150px' }}>
        <SideNav onSelectCountry={setSelectedCountry} />
      </Box>
      <Box sx={{ width: '80%' }}>
        <CarouselSection selectedCountry={selectedCountry} />
      </Box>
    </Container>
  );
}


export default CharacterPage;
