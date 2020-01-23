
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservice',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81Q1wVAPPSL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 34,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81rw80KmCRL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 3,
      title: 'Frankenstein: Prodigal Son: A Novel',
      author: 'Dean Koontz, Kevin J. Anderson',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91FTaXUGZFL._AC_SR201,266_.jpg'
    },
    {
      id: 4,
      title: 'Twilight Eyes: A Thriller',
      author: 'Dean Koontz',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81jiiPGhdrL._AC_SR201,266_.jpg'
    },
    {
      id: 5,
      title: 'Production-Ready Microservice',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81Q1wVAPPSL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 6,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 34,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81rw80KmCRL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 7,
      title: 'Frankenstein: Prodigal Son: A Novel',
      author: 'Dean Koontz, Kevin J. Anderson',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91FTaXUGZFL._AC_SR201,266_.jpg'
    },
    {
      id: 8,
      title: 'Twilight Eyes: A Thriller',
      author: 'Dean Koontz',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81jiiPGhdrL._AC_SR201,266_.jpg'
    },
    {
      id: 9,
      title: 'Production-Ready Microservice',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81Q1wVAPPSL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 10,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 34,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81rw80KmCRL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 11,
      title: 'Frankenstein: Prodigal Son: A Novel',
      author: 'Dean Koontz, Kevin J. Anderson',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91FTaXUGZFL._AC_SR201,266_.jpg'
    },
    {
      id: 12,
      title: 'Twilight Eyes: A Thriller',
      author: 'Dean Koontz',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81jiiPGhdrL._AC_SR201,266_.jpg'
    },
    {
      id: 13,
      title: 'Production-Ready Microservice',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81Q1wVAPPSL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 14,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 34,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81rw80KmCRL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    {
      id: 15,
      title: 'Frankenstein: Prodigal Son: A Novel',
      author: 'Dean Koontz, Kevin J. Anderson',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91FTaXUGZFL._AC_SR201,266_.jpg'
    },
    {
      id: 16,
      title: 'Twilight Eyes: A Thriller',
      author: 'Dean Koontz',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81jiiPGhdrL._AC_SR201,266_.jpg'
    }
  ];

  getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          return reject(new Error('BOOOOOOOOOM!!! ERROR!!!'));
        } else {
          return resolve(this.data);
        }
      }, 700)
    })
  };
};