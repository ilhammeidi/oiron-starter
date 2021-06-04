import sample from './sample-pages';
import imgAPI from '~/public/images/imgAPI';

const grandChild = [
  {
    name: 'Vivamus Condimentum',
    link: '#'
  },
  {
    name: 'Lorem',
    link: '#'
  },
  {
    name: 'Eu Rhoncus Odio',
    link: '#'
  },
  {
    name: 'Praesent Tristique',
    link: '#'
  }
];

const mega = [
  {
    id: 'menu1',
    name: 'First Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[4],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[7],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu2',
    name: 'Second Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[8],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[9],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[10],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[4],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu3',
    name: 'Third Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[7],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[8],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[9],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[10],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[1],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu4',
    name: 'Fourth Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[4],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[7],
        child: grandChild
      }
    ]
  },
  {
    id: 'sample',
    name: 'Sample Pages',
    child: sample
  }
];

export default mega;
