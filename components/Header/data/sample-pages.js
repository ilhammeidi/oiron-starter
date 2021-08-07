import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.starter.about
      },
      {
        name: 'team',
        link: link.starter.team
      },
      {
        name: 'blog',
        link: link.starter.blog
      },
      {
        name: 'blog detail',
        link: link.starter.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.starter.login
      },
      {
        name: 'register',
        link: link.starter.register
      },
      {
        name: 'contact',
        link: link.starter.contact
      },
      {
        name: 'contact map',
        link: link.starter.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.starter.card
      },
      {
        name: 'product',
        link: link.starter.product
      },
      {
        name: 'product detail',
        link: link.starter.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.starter.pricing
      },
      {
        name: 'faq',
        link: link.starter.faq
      },
      {
        name: 'maintenance',
        link: link.starter.maintenance
      },
      {
        name: 'coming soon',
        link: link.starter.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
