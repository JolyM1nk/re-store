export default class RestoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 30,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81c+o9-DetL.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      return setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
