import { render, screen } from '@testing-library/react';
import App from './App';

test('Can call back index, () => {

});

    // to display info menu based on product category selected.
    const[itemsInProductCategory, setItemsInProductCategory] = useState(
      [
        [
          {
            picture: picture,
            title:"Cashmere1",
            price:"£5"
          },
          {
            picture: picture,
            title:"Cashmere2",
            price:"£7"
          }
        ],
        [
          {
            picture: picture,
            title:"Silk1",
            price:"£15",
          },
          {
            picture: picture,
            title:"Silk2",
            price:"£16",
          }
        ],
        [
          {
            picture: picture,
            title:"Snood1",
            price:"£19"
          },
          {
            picture: picture,
            title:"Snood2",
            price:"£20"
          }
        ],
        [
          {
            picture: picture,
            title:"Shawls1",
            price:"£20"
          },
          {
            picture: picture,
            title:"Shawls2",
            price:"£21"
          }
        ],
        [
          {
            picture: picture,
            title:"Headscarfs1",
            price:"£3"
          },
          {
            picture: picture,
            title:"Headscarfs2",
            price:"£3"
          }
        ]
      ]
    );