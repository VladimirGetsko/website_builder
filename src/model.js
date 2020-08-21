import image from './assets/image.gif';
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks';

const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate ipsa illo praesentium dignissimos
`;

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h2',
    styles: 'background: #7d99cc; color: #fff; text-align: center; padding: 20px;  text-transform: uppercase;'
  }),
  new ImageBlock(image, {
    styles: 'padding: 0; margin: 0; display: flex;justify-content: center;',
    alt: 'javascript',
    imageStyles: 'display: block; width: 100%; height: auto;'
  }),
  new TextColumnsBlock([
    'Приложение сделано на чистом JavaScript, без использования библиотек',
    'Приложение использует принципы SOLID и ООП в JavaScript',
    'JavaScript - это просто, интересно. Учитесь создавать любые UI своими руками'
  ], {
    styles: 'padding: 50px 20px; font-size: 20px;'
  }),
  new TextBlock(
    text, 
    {
        styles: 'background: #636363; text-align: center; color: #fff; padding: 30px 20px; font-size: 18px;'
    })
];