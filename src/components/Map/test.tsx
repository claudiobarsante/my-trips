import Map from '.';
import { render, screen } from '@testing-library/react';

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />); //render the map

    screen.logTestingPlaygroundURL(); //generate a url with the map

    //to get this query click on the Leaflet link under the map rendered on the Testing Playground
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument(); //check if leaflet map is rendered
  });

  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument(); //find title petrópolis in the document 'i' is to ignore if it's upper or lowercase
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument();
  });
});
